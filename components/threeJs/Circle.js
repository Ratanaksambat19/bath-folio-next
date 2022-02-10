import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Circle = () => {

    const canvas = useRef();

    useEffect (() => {

        const scene = new THREE.Scene();
    
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight, 0.1, 1000);
    
        const renderer = new THREE.WebGLRenderer({ canvas: canvas.current, alpha: true });
    
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
    

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
        
        const torus = new THREE.Mesh(geometry, material);
        // scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(20, 20, 20);
        scene.add(pointLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        
        controls.enableZoom = false;

        function addStar() {
            const geometryStar = new THREE.SphereGeometry(0.25, 24, 24);
            const materialStar = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometryStar, materialStar);

            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z)
            scene.add(star)
        }

        Array(200).fill().forEach(addStar)

        // const spaceTexture = new THREE.TextureLoader().load('background_space.jpg');
        // scene.background = spaceTexture;

        const skillPy = new THREE.TextureLoader().load('./skills/py.png');
        const python = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 3),
            new THREE.MeshBasicMaterial({ map: skillPy })
        );
        python.position.z = 5;
        python.position.x = 20;
        python.position.y = 10;
        scene.add(python);
        

        const skillJs = new THREE.TextureLoader().load('./skills/javascript.png');
        const javascript = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 3),
            new THREE.MeshBasicMaterial({ map: skillJs })
        )
        javascript.position.z = 2;
        javascript.position.x = 15;
        javascript.position.y = 5;
        scene.add(javascript);

        const skillReact = new THREE.TextureLoader().load('./skills/atom.png');
        const reactJs = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 3),
            new THREE.MeshBasicMaterial({ map: skillReact })
        )
        reactJs.position.z = -5;
        reactJs.position.x = 15;
        reactJs.position.y = 15;
        scene.add(reactJs);

        const skillVue = new THREE.TextureLoader().load('./skills/brands.png');
        const vueJs = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 3),
            new THREE.MeshBasicMaterial({ map: skillVue })
        )
        vueJs.position.z = -5;
        vueJs.position.x = 15;
        vueJs.position.y = -15;
        scene.add(vueJs);


        const moonTexture = new THREE.TextureLoader().load('moon.jpg');
        const normalTexture = new THREE.TextureLoader().load('normal.jpg');
        const moon = new THREE.Mesh(
            new THREE.SphereGeometry(5, 32, 16),
            new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: normalTexture })
        );
        // scene.add(moon);
        


        function animate() {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.02;
            torus.rotation.z += 0.03;

            controls.update();
            renderer.render(scene, camera);
        }

        // function moveCamera() {
        //     const t = document.body.getBoundingClientRect().top;

        //     moon.rotation.x += 0.05;
        //     moon.rotation.y += 0.075;
        //     moon.rotation.z += 0.05;

        //     camera.position.z = t * 0.001;
        //     camera.position.y = t * 0.002;
        //     camera.position.x = t * 0.002;
        // }

        // document.body.onscroll = moveCamera;
        animate();
    })


    return (
        <canvas ref={canvas} />
    )
}

export default Circle;