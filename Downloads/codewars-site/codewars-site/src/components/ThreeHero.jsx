import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CRIMSON = new THREE.Color("#e50914");
const BLUE = new THREE.Color("#1565c0");
const GOLD = new THREE.Color("#ffd700");

function EnergyCore() {
  const core = useRef();
  const glow = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.y = t * 0.6;
      core.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      const s = 1 + Math.sin(t * 2) * 0.04;
      core.current.scale.setScalar(s);
    }
    if (glow.current) {
      glow.current.material.opacity = 0.35 + Math.sin(t * 1.6) * 0.12;
    }
  });
  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color={GOLD}
          emissive={CRIMSON}
          emissiveIntensity={1.4}
          metalness={0.6}
          roughness={0.15}
          wireframe
        />
      </mesh>
      <mesh ref={glow}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color={CRIMSON} transparent opacity={0.3} />
      </mesh>
      <pointLight color={GOLD} intensity={6} distance={6} />
    </group>
  );
}

function HoloRings() {
  const group = useRef();
  const r1 = useRef();
  const r2 = useRef();
  const r3 = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (r1.current) r1.current.rotation.z = t * 0.25;
    if (r2.current) r2.current.rotation.x = t * 0.3 + 0.4;
    if (r3.current) r3.current.rotation.y = t * 0.35;
    if (group.current) group.current.rotation.y = t * 0.05;
  });
  return (
    <group ref={group}>
      <mesh ref={r1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.2, 0.012, 16, 128]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.7} />
      </mesh>
      <mesh ref={r2} rotation={[0.3, Math.PI / 3, 0]}>
        <torusGeometry args={[2.6, 0.01, 16, 128]} />
        <meshBasicMaterial color={CRIMSON} transparent opacity={0.55} />
      </mesh>
      <mesh ref={r3} rotation={[1.1, 0, 0.5]}>
        <torusGeometry args={[3.0, 0.008, 16, 128]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function Particles({ count = 260 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (points.current) points.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.02} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Hexagons({ count = 10 }) {
  const group = useRef();
  const data = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 3 - 1,
        ],
        speed: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? BLUE : CRIMSON,
      })),
    [count]
  );
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current?.children.forEach((mesh, i) => {
      const d = data[i];
      mesh.rotation.z = t * d.speed;
      mesh.position.y = d.pos[1] + Math.sin(t * d.speed + d.offset) * 0.25;
    });
  });
  return (
    <group ref={group}>
      {data.map((d, i) => (
        <mesh key={i} position={d.pos}>
          <ringGeometry args={[0.14, 0.17, 6]} />
          <meshBasicMaterial color={d.color} transparent opacity={0.55} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

function Arcs({ count = 5 }) {
  const group = useRef();
  const lines = useMemo(
    () =>
      Array.from({ length: count }, () => {
        const start = new THREE.Vector3().randomDirection().multiplyScalar(1.1);
        const end = start.clone().multiplyScalar(1 + Math.random() * 1.2);
        const mid = start
          .clone()
          .lerp(end, 0.5)
          .add(new THREE.Vector3().randomDirection().multiplyScalar(0.4));
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const pts = curve.getPoints(20);
        const geometry = new THREE.BufferGeometry().setFromPoints(pts);
        return { geometry, color: Math.random() > 0.5 ? GOLD : BLUE };
      }),
    [count]
  );
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current?.children.forEach((line, i) => {
      line.material.opacity = 0.15 + Math.abs(Math.sin(t * 3 + i)) * 0.5;
    });
  });
  return (
    <group ref={group}>
      {lines.map((l, i) => (
        <line key={i} geometry={l.geometry}>
          <lineBasicMaterial color={l.color} transparent opacity={0.4} />
        </line>
      ))}
    </group>
  );
}

function Rig() {
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.08) * 0.4;
    camera.position.y = Math.cos(t * 0.06) * 0.25;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeHero() {
  return (
    <div className="three-hero" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#050505", 5, 11]} />
          <ambientLight intensity={0.25} />
          <pointLight position={[3, 2, 4]} color="#1565c0" intensity={3} />
          <pointLight position={[-3, -2, 3]} color="#e50914" intensity={3} />
          <EnergyCore />
          <HoloRings />
          <Particles />
          <Hexagons />
          <Arcs />
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  );
}
