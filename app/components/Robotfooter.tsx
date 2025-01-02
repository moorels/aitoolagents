'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


interface JointConfig {
  mesh: THREE.Mesh;
  initialRotation: THREE.Euler;
  rotationAxis: 'x' | 'y' | 'z';
  rotationRange: { min: number; max: number };
}

interface RobotSegment {
  main: THREE.Mesh;
  joints: JointConfig[];
  details: THREE.Mesh[];
}

const Robotfooter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<{
    head: RobotSegment;
    torso: RobotSegment;
    leftArm: RobotSegment;
    rightArm: RobotSegment;
    leftLeg: RobotSegment;
    rightLeg: RobotSegment;
  } | null>(null);
  
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Set initial camera position
    camera.position.set(0, 0.5, 2);
    camera.lookAt(0, 0, 0);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Disable zoom since robot is small
    controls.minDistance = 2;
    controls.maxDistance = 2;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create a group to hold all robot parts
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);
    robotGroup.scale.set(0.33, 0.33, 0.33);

    // Materials
    const createMaterial = (color: string, metalness = 0.8, roughness = 0.2) => {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness,
        roughness,
        envMapIntensity: 1,
        clearcoat: 0.5,
        clearcoatRoughness: 0.3,
      });
    };

    const materials = {
      primary: createMaterial('#3e567e'),
      secondary: createMaterial('#fdb72f'),
      accent: createMaterial('#60A5FA'),
      detail: createMaterial('#1F2937'),
      glow: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#4f55463'),
        emissive: new THREE.Color('#60A5FA'),
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8,
      }),
      glow1: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#d22323'),
        emissive: new THREE.Color('#d22323'),
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 1,
      }),
      glow2: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#60A5FA'),
        emissive: new THREE.Color('#60A5FA'),
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 1,
      })
    };

    // Helper functions
    const createJoint = (
      position: THREE.Vector3,
      radius: number,
      material: THREE.Material,
      rotationAxis: 'x' | 'y' | 'z',
      range: { min: number; max: number }
    ): JointConfig => {
      const geometry = new THREE.SphereGeometry(radius, 16, 16);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      
      return {
        mesh,
        initialRotation: mesh.rotation.clone(),
        rotationAxis,
        rotationRange: range,
      };
    };

    const createSegment = (
      geometry: THREE.BufferGeometry,
      position: THREE.Vector3,
      material: THREE.Material,
      details: THREE.Mesh[] = []
    ): THREE.Mesh => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      details.forEach(detail => scene.add(detail));
      return mesh;
    };

    // Create robot segments
    const createHead = (): RobotSegment => {
      const main = createSegment(
        new THREE.BoxGeometry(1.2, 1.4, 1.2),
        new THREE.Vector3(0, 2.8, 0),
        materials.primary
      );

      const visor = createSegment(
        new THREE.BoxGeometry(0.8, 0.2, 0.3),
        new THREE.Vector3(0, 3, 0.6),
        materials.glow1
      );

      const antenna1 = createSegment(
        new THREE.CylinderGeometry(0.05, 0.05, 0.4),
        new THREE.Vector3(-0.4, 3.5, 0),
        materials.glow2
      );

      const antenna2 = createSegment(
        new THREE.CylinderGeometry(0.05, 0.05, 0.4),
        new THREE.Vector3(0.4, 3.5, 0),
        materials.glow2
      );

      const neckJoint = createJoint(
        new THREE.Vector3(0, 2.3, 0),
        0.2,
        materials.secondary,
        'y',
        { min: -Math.PI / 4, max: Math.PI / 4 }
      );

      return {
        main,
        joints: [neckJoint],
        details: [visor, antenna1, antenna2]
      };
    };

    const createTorso = (): RobotSegment => {
      const main = createSegment(
        new THREE.BoxGeometry(2, 3, 1.5),
        new THREE.Vector3(0, 0.5, 0),
        materials.primary
      );

      // Add chest plates and other details
      const chestPlate = createSegment(
        new THREE.BoxGeometry(1.8, 1, 0.3),
        new THREE.Vector3(0, 1.2, 0.8),
        materials.secondary
      );

      const corePlate = createSegment(
        new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16),
        new THREE.Vector3(0, 0.5, 0.8),
        materials.glow
      );

      // Add spine segments
      const spineSegments = [];
      for (let i = 0; i < 4; i++) {
        spineSegments.push(
          createSegment(
            new THREE.BoxGeometry(0.3, 0.2, 0.2),
            new THREE.Vector3(0, 0 - i * 0.4, -0.5),
            materials.secondary
          )
        );
      }

      return {
        main,
        joints: [],
        details: [chestPlate, corePlate, ...spineSegments]
      };
    };

    const createArm = (isLeft: boolean): RobotSegment => {
      const side = isLeft ? -1 : 1;
      
      // Upper arm
      const main = createSegment(
        new THREE.CylinderGeometry(0.25, 0.2, 1.5, 8),
        new THREE.Vector3(side * 1.2, 1.5, 0),
        materials.primary
      );

      // Shoulder joint
      const shoulderJoint = createJoint(
        new THREE.Vector3(side * 1.2, 2, 0),
        0.3,
        materials.secondary,
        'x',
        { min: -Math.PI / 2, max: Math.PI / 2 }
      );

      // Elbow joint
      const elbowJoint = createJoint(
        new THREE.Vector3(side * 1.2, 0.8, 0),
        0.25,
        materials.secondary,
        'x',
        { min: -Math.PI / 2, max: 0 }
      );

      // Forearm
      const forearm = createSegment(
        new THREE.CylinderGeometry(0.2, 0.18, 1.3, 8),
        new THREE.Vector3(side * 1.2, 0, 0),
        materials.primary
      );

      // Hand
      const hand = createSegment(
        new THREE.BoxGeometry(0.3, 0.4, 0.2),
        new THREE.Vector3(side * 1.2, -0.8, 0),
        materials.secondary
      );

      // Armor plates and details
      const upperArmPlate = createSegment(
        new THREE.BoxGeometry(0.4, 0.8, 0.3),
        new THREE.Vector3(side * 1.4, 1.5, 0.2),
        materials.secondary
      );

      const forearmPlate = createSegment(
        new THREE.BoxGeometry(0.35, 0.6, 0.25),
        new THREE.Vector3(side * 1.4, 0, 0.2),
        materials.secondary
      );

      return {
        main,
        joints: [shoulderJoint, elbowJoint],
        details: [forearm, hand, upperArmPlate, forearmPlate]
      };
    };

    const createLeg = (isLeft: boolean): RobotSegment => {
      const side = isLeft ? -1 : 1;
      
      // Upper leg
      const main = createSegment(
        new THREE.CylinderGeometry(0.35, 0.3, 2),
        new THREE.Vector3(side * 0.5, -1.5, 0),
        materials.primary
      );

      // Hip joint
      const hipJoint = createJoint(
        new THREE.Vector3(side * 0.5, -0.5, 0),
        0.3,
        materials.secondary,
        'x',
        { min: -Math.PI / 3, max: Math.PI / 3 }
      );

      // Knee joint
      const kneeJoint = createJoint(
        new THREE.Vector3(side * 0.5, -2.5, 0),
        0.25,
        materials.secondary,
        'x',
        { min: 0, max: Math.PI / 2 }
      );

      // Lower leg
      const lowerLeg = createSegment(
        new THREE.CylinderGeometry(0.3, 0.25, 2),
        new THREE.Vector3(side * 0.5, -3.5, 0),
        materials.primary
      );

      // Foot
      const foot = createSegment(
        new THREE.BoxGeometry(0.4, 0.3, 0.8),
        new THREE.Vector3(side * 0.5, -4.6, 0.2),
        materials.secondary
      );

      // Armor plates
      const upperLegPlate = createSegment(
        new THREE.BoxGeometry(0.5, 1, 0.3),
        new THREE.Vector3(side * 0.7, -1.5, 0.3),
        materials.secondary
      );

      const lowerLegPlate = createSegment(
        new THREE.BoxGeometry(0.45, 0.8, 0.25),
        new THREE.Vector3(side * 0.7, -3.5, 0.3),
        materials.secondary
      );

      return {
        main,
        joints: [hipJoint, kneeJoint],
        details: [lowerLeg, foot, upperLegPlate, lowerLegPlate]
      };
    };

    // Create robot
    robotRef.current = {
      head: createHead(),
      torso: createTorso(),
      leftArm: createArm(true),
      rightArm: createArm(false),
      leftLeg: createLeg(true),
      rightLeg: createLeg(false)
    };

    // Add all robot parts to the group
    Object.values(robotRef.current).forEach(segment => {
      if (segment.main) robotGroup.add(segment.main);
      segment.joints.forEach(joint => robotGroup.add(joint.mesh));
      segment.details.forEach(detail => robotGroup.add(detail));
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (robotRef.current) {
        // Add gentle floating animation
        const time = Date.now() * 0.001;
        const floatOffset = Math.sin(time) * 0.1;
        
        Object.values(robotRef.current).forEach(segment => {
          if (segment.main) {
            segment.main.position.y += floatOffset * 0.01;
          }
        });
      }

      controls.update(); // Update controls in animation loop
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full cursor-pointer"
      style={{ 
        position: 'relative',
        minHeight: '150px',
        transform: 'translateX(-15%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      
    </div>
  );
};

export default Robotfooter;
