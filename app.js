let scene, camera, renderer;

const init = () => {
    // scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    // camera
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.perspectiveCamera(60, aspect, 0.01, 5000);
    camera.position.ser(0.5, 0, 0);

    // camera controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", renderer);

    //light
    ambientLight = new THREE.ambientLight(0x404040, 20);
    scene.add(ambientLight);

    // loader
    const loader = new THREE.WebGLRenderer();
    loader.load("scene.gltf", (result) => {
        scene.add(result.scene);
        animate();
    });

    // recursive Loop for Render Scene
    const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animare);
    };

    init();
};