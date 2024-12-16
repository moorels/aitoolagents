'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import RobotModal from './RobotModal';

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

const HumanFigure3D = () => {
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
      primary: createMaterial('#4B5563'),
      secondary: createMaterial('#9CA3AF'),
      accent: createMaterial('#60A5FA'),
      detail: createMaterial('#1F2937'),
      glow: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#60A5FA'),
        emissive: new THREE.Color('#60A5FA'),
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8,
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
        materials.glow
      );

      const antenna1 = createSegment(
        new THREE.CylinderGeometry(0.05, 0.05, 0.4),
        new THREE.Vector3(-0.4, 3.5, 0),
        materials.secondary
      );

      const antenna2 = createSegment(
        new THREE.CylinderGeometry(0.05, 0.05, 0.4),
        new THREE.Vector3(0.4, 3.5, 0),
        materials.secondary
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

    // Create energy effects
    const createEnergyEffect = () => {
      const geometry = new THREE.TorusGeometry(0.2, 0.05, 16, 32);
      const material = materials.glow.clone();
      material.opacity = 0.6;
      
      const effect = new THREE.Mesh(geometry, material);
      effect.rotation.x = Math.PI / 2;
      scene.add(effect);
      return effect;
    };

    const energyEffects = Array(4).fill(null).map(createEnergyEffect);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    // Camera setup
    camera.position.set(5, 2, 15);
    camera.lookAt(0, 0, 0);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 20;
    controls.minDistance = 8;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (robotRef.current) {
        const time = Date.now() * 0.001;
        
        // Animate head
        robotRef.current.head.joints[0].mesh.rotation.y = Math.sin(time * 0.5) * 0.2;
        
        // Animate arms
        const armAnimation = (arm: RobotSegment, phase: number) => {
          arm.joints[0].mesh.rotation.x = Math.sin(time + phase) * 0.3;
          arm.joints[1].mesh.rotation.x = Math.sin(time + phase + Math.PI) * 0.2 - 0.3;
        };
        
        armAnimation(robotRef.current.leftArm, 0);
        armAnimation(robotRef.current.rightArm, Math.PI);
        
        // Animate legs
        const legAnimation = (leg: RobotSegment, phase: number) => {
          leg.joints[0].mesh.rotation.x = Math.sin(time + phase) * 0.15;
          leg.joints[1].mesh.rotation.x = Math.abs(Math.sin(time + phase)) * 0.3;
        };
        
        legAnimation(robotRef.current.leftLeg, 0);
        legAnimation(robotRef.current.rightLeg, Math.PI);

        // Animate energy effects
        energyEffects.forEach((effect, i) => {
          effect.position.y = Math.sin(time * 2 + i * Math.PI / 2) * 2;
          effect.rotation.z = time * 2;
          effect.scale.setScalar(1 + Math.sin(time * 3 + i) * 0.1);
        });
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      <RobotModal
        isVisible={showModal}
        position={mousePosition}
        text="Analyzing patterns and processing data streams... AI systems operational."
      />
    </div>
  );
};

export default HumanFigure3D;
