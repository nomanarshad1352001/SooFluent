import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERT = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_res;
  uniform vec2 u_mouse;

  float hash(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    vec2 asp = vec2(u_res.x / u_res.y, 1.0);
    vec2 p = uv * asp;
    float t = u_time * 0.045;
    vec2 mo = (u_mouse - 0.5) * 0.09;

    vec2 q = vec2(fbm(p * 1.25 + t), fbm(p * 1.25 + vec2(5.2, 1.3) - t * 0.8));
    float f = fbm(p * 1.1 + 2.3 * q + mo + t * 0.55);

    vec3 ivory = vec3(0.988, 0.965, 0.933);
    vec3 cream = vec3(1.0, 0.957, 0.896);
    vec3 peach = vec3(1.0, 0.894, 0.796);
    vec3 gold  = vec3(1.0, 0.812, 0.553);
    vec3 blush = vec3(1.0, 0.625, 0.50);

    vec3 col = ivory;
    col = mix(col, cream, smoothstep(0.2, 0.75, f));
    col = mix(col, peach, smoothstep(0.35, 0.95, q.x * f + 0.15));
    col = mix(col, gold, smoothstep(0.58, 1.02, f) * 0.5);
    col = mix(col, blush, smoothstep(0.66, 1.1, f * q.y * 1.55) * 0.34);

    // keep a bright airy pocket where the headline sits
    float glow = smoothstep(1.35, 0.15, distance(uv, vec2(0.3, 0.72)));
    col = mix(col, ivory, glow * 0.35);

    gl_FragColor = vec4(col, 1.0);
  }
`;

/**
 * Warm, slow-moving silk gradient rendered in WebGL.
 * Sits behind the hero; pauses when off-screen or tab is hidden.
 */
export default function ShaderBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const host = canvas.parentElement as HTMLElement;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: false,
        powerPreference: "low-power",
      });
    } catch {
      return; // CSS gradient behind remains as fallback
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(1, 1) },
      u_mouse: { value: new THREE.Vector2(0.3, 0.7) },
    };
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
    });
    scene.add(new THREE.Mesh(geometry, material));

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      const pr = Math.min(window.devicePixelRatio, 1.5);
      renderer.setPixelRatio(pr);
      renderer.setSize(w, h, false);
      uniforms.u_res.value.set(w * pr, h * pr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const mouseTarget = new THREE.Vector2(0.3, 0.7);
    const onMouse = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      mouseTarget.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
    };
    host.addEventListener("mousemove", onMouse, { passive: true });

    let raf = 0;
    let running = true;
    let visible = true;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!running || !visible) return;
      uniforms.u_time.value += Math.min(clock.getDelta(), 0.05);
      uniforms.u_mouse.value.lerp(mouseTarget, 0.04);
      renderer.render(scene, camera);
    };
    tick();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);
    const onVis = () => {
      running = !document.hidden;
      if (running) clock.getDelta();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("mousemove", onMouse);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
