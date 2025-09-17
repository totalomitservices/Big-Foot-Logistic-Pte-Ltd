
'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; 
    controls.enablePan = false; 
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 1.5;


    // EARTH
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('https://unpkg.com/three-globe@2.24.4/example/img/earth-dark.jpg'),
        bumpMap: new THREE.TextureLoader().load('https://unpkg.com/three-globe@2.24.4/example/img/earth-topology.png'),
        bumpScale: 0.05,
      })
    );
    scene.add(sphere);

     // Atmosphere
    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 50, 50),
        new THREE.ShaderMaterial({
            vertexShader: `
                varying vec3 vertexNormal;
                void main() {
                    vertexNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vertexNormal;
                void main() {
                    float intensity = pow(0.6 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);
                    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
                }
            `,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1);
    scene.add(atmosphere);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);


    // PINS
    const pins: { lat: number; lon: number; city: string; country: string }[] = [
        { lat: 28.6139, lon: 77.2090, city: 'New Delhi', country: 'India' },
        { lat: 1.3521, lon: 103.8198, city: 'Singapore', country: 'Singapore' },
        { lat: -35.2809, lon: 149.1300, city: 'Canberra', country: 'Australia' }
    ];

    const pinObjects = new THREE.Group();
    sphere.add(pinObjects);

    pins.forEach(pin => {
      const pinMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.01, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      );

      const latRad = (90 - pin.lat) * (Math.PI / 180);
      const lonRad = (pin.lon + 180) * (Math.PI / 180);

      pinMesh.position.set(
        -Math.sin(latRad) * Math.cos(lonRad),
        Math.cos(latRad),
        -Math.sin(latRad) * Math.sin(lonRad)
      );

      pinMesh.lookAt(sphere.position);
      pinMesh.userData = pin;
      pinObjects.add(pinMesh);

      // Create Label
      const label = document.createElement('div');
      label.className = 'pin-label';
      label.textContent = `${pin.city} - ${pin.country}`;
      mountRef.current?.appendChild(label);
      pinMesh.userData.label = label;
    });


    // UI Buttons
    const uiContainer = document.createElement('div');
    uiContainer.className = 'absolute top-5 right-5 flex flex-col gap-2';
    mountRef.current?.appendChild(uiContainer);
    
    const createButton = (text: string, onClick: () => void) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = 'w-10 h-10 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/20 shadow-lg';
        button.onclick = onClick;
        uiContainer.appendChild(button);
    }
    
    createButton('+', () => gsap.to(camera.position, { z: camera.position.z - 0.5, duration: 1, ease: 'power2.out' }));
    createButton('-', () => gsap.to(camera.position, { z: camera.position.z + 0.5, duration: 1, ease: 'power2.out' }));
    createButton('H', () => gsap.to(camera.position, { z: 2, duration: 1, ease: 'power2.out' }));

     // Hint text
    const hint = document.createElement('div');
    hint.className = 'absolute bottom-5 left-5 text-white/50 text-xs';
    hint.textContent = 'Drag to rotate • Hover pins • Click pins to zoom';
    mountRef.current?.appendChild(hint);


    // MOUSE INTERACTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let intersected: THREE.Object3D | null = null;
    let hoveredPin: THREE.Object3D | null = null;

    const onMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);
    
    const onClick = (event: MouseEvent) => {
        if(intersected) {
             const pin = intersected.userData;
             const pinPosition = intersected.position.clone().multiplyScalar(1.2);

            gsap.to(camera.position, {
                x: pinPosition.x,
                y: pinPosition.y,
                z: pinPosition.z,
                duration: 1,
                onUpdate: () => controls.update()
            });
             gsap.to(camera.position, { z: 1.5, duration: 1, delay: 0.5 });
        }
    }
     window.addEventListener('click', onClick);

    // ANIMATION LOOP
    const animate = () => {
      requestAnimationFrame(animate);

      if(!isInteracting.current) {
        sphere.rotation.y += 0.0005;
      }
      controls.update();
      
      // Update raycaster
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pinObjects.children);
      
      if (intersects.length > 0) {
        if (intersected !== intersects[0].object) {
            if (intersected) {
                gsap.to(intersected.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
                if (intersected.userData.label) intersected.userData.label.style.display = 'none';
            }
            intersected = intersects[0].object;
            gsap.to(intersected.scale, { x: 2, y: 2, z: 2, duration: 0.3 });
             if (intersected.userData.label) intersected.userData.label.style.display = 'block';

        }
      } else {
         if (intersected) {
             gsap.to(intersected.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
             if (intersected.userData.label) intersected.userData.label.style.display = 'none';

         }
         intersected = null;
      }
      
       // Update labels
      pinObjects.children.forEach(pin => {
          const p = pin.position.clone().project(camera);
          if (pin.userData.label) {
             pin.userData.label.style.transform = `translate(${(p.x * 0.5 + 0.5) * window.innerWidth}px, ${(-p.y * 0.5 + 0.5) * window.innerHeight}px)`;
          }
      });


      renderer.render(scene, camera);
    };
    animate();

    // RESIZE HANDLER
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

     const onInteractionStart = () => { isInteracting.current = true; };
     const onInteractionEnd = () => { isInteracting.current = false; };
     renderer.domElement.addEventListener('mousedown', onInteractionStart);
     renderer.domElement.addEventListener('mouseup', onInteractionEnd);
     renderer.domElement.addEventListener('touchstart', onInteractionStart);
     renderer.domElement.addEventListener('touchend', onInteractionEnd);


    // CLEANUP
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      renderer.domElement.removeEventListener('mousedown', onInteractionStart);
      renderer.domElement.removeEventListener('mouseup', onInteractionEnd);
      renderer.domElement.removeEventListener('touchstart', onInteractionStart);
      renderer.domElement.removeEventListener('touchend', onInteractionEnd);
      mountRef.current?.removeChild(renderer.domElement);
       mountRef.current?.removeChild(uiContainer);
       mountRef.current?.removeChild(hint);
       pinObjects.children.forEach(pin => {
          if (pin.userData.label) mountRef.current?.removeChild(pin.userData.label);
      });
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full relative" >
       <style jsx global>{`
        .pin-label {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            display: none;
            pointer-events: none;
            transform-origin: 0 0;
        }
       `}</style>
  </div>;
};

export default Globe;
