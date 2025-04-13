// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.157.0/examples/jsm/loaders/GLTFLoader.js?module';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// camera.position.z = 1;

// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setClearColor(0x000000, 0); // Transparent background
// renderer.setSize(200, 200);

// // Attach canvas to the model-container
// const container = document.getElementById('model-header');
// container.style.position = 'relative';
// container.style.width = '100%';
// container.style.display = 'flex';
// container.style.justifyContent = 'center';
// container.appendChild(renderer.domElement);

// // Hemisphere light for soft ambient glow
// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2); // ⬅️ Increased intensity
// scene.add(hemiLight);

// // Directional light to simulate sunlight or focused lamp
// const dirLight = new THREE.DirectionalLight(0xffffff, 2); // ⬅️ Strong directional light
// dirLight.position.set(3, 5, 2); // Position the light above and slightly to the side
// dirLight.castShadow = true;
// scene.add(dirLight);


// let model;

// const loader = new GLTFLoader();
// loader.load(
//   'models/chill_cat.glb',
//   function (gltf) {
//     console.log('Model loaded successfully!');
//     model = gltf.scene;
//     model.scale.set(0.5, 0.5, 0.5);
//     scene.add(model);
//   },
//   undefined,
//   function (error) {
//     console.error('Model load error:', error);
//   }
// );

// // "Chill Cat" (https://skfb.ly/o877K) by Shix is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// // "Cute Cat with Strawberries" (https://skfb.ly/6SOt7) by jiayingc is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// // "Cute Spooky Cat" (https://skfb.ly/6VNPU) by 🎀 ★彡[ꜰᴇʟɪx ʏᴀᴅᴏᴍɪ]彡★ 🎀 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// // "Choco Bunny" (https://skfb.ly/ozVBY) by Ergoni is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// // "Pikachu" (https://skfb.ly/6ZXrT) by Murky is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Pika" (https://skfb.ly/6xyNL) by virums is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// function animate() {
//   requestAnimationFrame(animate);
//   if (model) {
//     model.rotation.y += 0.01;
//   }
//   renderer.render(scene, camera);
// }

// // DOMContentLoaded ensures everything in <body> is loaded
// window.addEventListener('DOMContentLoaded', () => {
//     loadModel({
//       containerId: 'model-header',
//       modelPath: 'models/chill_cat.glb',
//       scale: 0.5,
//     });
  
//     loadModel({
//       containerId: 'footer-model',
//       modelPath: 'models/choco_bunny.glb',
//       scale: 0.4,
//     });
//   });

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.157.0/examples/jsm/loaders/GLTFLoader.js?module';

function loadModel({ containerId, modelPath, scale = 0.5, cameraZ = 1, size = { width: 200, height: 200 }, rotate = true }) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = cameraZ;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(size.width, size.height);

  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.appendChild(renderer.domElement);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(3, 5, 2);
  dirLight.castShadow = true;
  scene.add(dirLight);

  const loader = new GLTFLoader();
  let model;

  loader.load(
    modelPath,
    (gltf) => {
      model = gltf.scene;
      model.scale.set(scale, scale, scale);
      scene.add(model);
    },
    undefined,
    (error) => {
      console.error(`Failed to load ${modelPath}:`, error);
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    if (model && rotate) model.rotation.y += 0.01; // Rotate only if 'rotate' is true
    renderer.render(scene, camera);
  }

  animate();
}

// "Chill Cat" (https://skfb.ly/o877K) by Shix is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Cute Cat with Strawberries" (https://skfb.ly/6SOt7) by jiayingc is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Cute Spooky Cat" (https://skfb.ly/6VNPU) by 🎀 ★彡[ꜰᴇʟɪx ʏᴀᴅᴏᴍɪ]彡★ 🎀 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Choco Bunny" (https://skfb.ly/ozVBY) by Ergoni is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Pikachu" (https://skfb.ly/6ZXrT) by Murky is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Pika" (https://skfb.ly/6xyNL) by virums is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// Load both models
window.addEventListener('DOMContentLoaded', () => {
  loadModel({
    containerId: 'model-header',
    modelPath: 'models/chill_cat.glb',
    scale: 0.5,
    cameraZ: 1,
    size: { width: 200, height: 200 },
    rotate: true // Enable rotation for the first model
  });

  loadModel({
    containerId: 'model-footer',
    modelPath: 'models/pika.glb',
    scale: 0.4,
    cameraZ: 6,
    size: { width: 250, height: 250 },
    rotate: true
  });
});