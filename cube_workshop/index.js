// Import from unpkg or skypack CDN
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { gsap } from 'https://unpkg.com/gsap@3.12.5/index.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(512,512);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshPhysicalMaterial({color:"pink"});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

const light = new THREE.PointLight();
light.intensity = 50;
light.position.z = 5;
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10);
camera.position.z = 5;

gsap.ticker.add(function() {
    box.rotation.x += 0.015;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
});