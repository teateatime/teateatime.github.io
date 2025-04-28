import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.157.0/examples/jsm/loaders/GLTFLoader.js?module';
import { DRACOLoader } from 'https://unpkg.com/three@0.157.0/examples/jsm/loaders/DRACOLoader.js?module';

function loadModel({ containerId, modelPath, scale = 0.5, cameraZ = 1, size = { width: 200, height: 200 }, rotate = true }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
  camera.position.z = cameraZ;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Apply styles to container and add canvas after renderer is ready
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.appendChild(renderer.domElement);

  const light = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(light);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    modelPath,
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(scale, scale, scale);
  
      model.traverse((child) => {
        if (child.isMesh && child.material && !(child.material instanceof THREE.MeshStandardMaterial)) {
          const matProps = { ...child.material };
          child.material = new THREE.MeshStandardMaterial(matProps);
        }
      });
  
      scene.add(model);
  
      let rotation = 0;
      const animate = () => {
        requestAnimationFrame(animate);
        if (rotate) {
          rotation += 0.01;
          model.rotation.y = rotation;
        }
        renderer.render(scene, camera);
      };
      animate();
    },
    undefined,
    (err) => console.error(`Failed to load ${modelPath}:`, err)
  );  
}

// "Chill Cat" (https://skfb.ly/o877K) by Shix is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Cute Cat with Strawberries" (https://skfb.ly/6SOt7) by jiayingc is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Cute Spooky Cat" (https://skfb.ly/6VNPU) by 🎀 ★彡[ꜰᴇʟɪx ʏᴀᴅᴏᴍɪ]彡★ 🎀 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Choco Bunny" (https://skfb.ly/ozVBY) by Ergoni is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Pikachu" (https://skfb.ly/6ZXrT) by Murky is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Pika" (https://skfb.ly/6xyNL) by virums is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

window.addEventListener('DOMContentLoaded', () => {
  loadModel({
    containerId: 'model-header',
    modelPath: 'models/chill_cat.glb',
    scale: 0.5,
    cameraZ: 1,
    size: { width: 150, height: 150 },
    rotate: true
  });
});