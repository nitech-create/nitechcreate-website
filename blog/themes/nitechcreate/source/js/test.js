window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = document.body.clientWidth;
  const height = window.innerHeight;
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#testcanvas")
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  
// scene.fog = new THREE.Fog(0xfcf8e8, 10000, 50000);

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    100000
  );
  camera.position.set(0, 0, +20000);

  renderer.setClearColor(0xfcf8e8);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(
    0xffffff
  );
  directionalLight.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight);

  const light = new THREE.AmbientLight(0xFFFFFF, 0.6);
  scene.add(light);

  // 初回実行
  loop();
  function loop() {
    requestAnimationFrame(loop);

      renderer.render(scene, camera);
  }
}