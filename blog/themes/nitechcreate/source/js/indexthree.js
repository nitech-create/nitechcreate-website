window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = document.body.clientWidth;
  const height = window.innerHeight;
  const boxnum = 10;//boxの数
  const Cylindernum=10;
  const octahedronnum=10;
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#threecanvas")
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

  // 箱を作成
  var boxarray = new Array(boxnum);
  var boxMesh = new Array(boxnum);
  var boxrotationXarray = new Array(boxnum);
  var boxrotationYarray = new Array(boxnum);
  var boxrotationZarray = new Array(boxnum);

  var boxvelocityXarray = new Array(boxnum);
  var boxvelocityYarray = new Array(boxnum);
  var boxvelocityZarray = new Array(boxnum);
  var boxsize = 800;
  var material;
  const apart = 15000;
  var colorrand = 0;

  for (var i = 0; i < boxnum; i++) {
    boxsizerand = boxsize;
    boxsizerand = Math.round((Math.random() + 0.5) * boxsize);
    boxarray[i] = new THREE.BoxGeometry(boxsizerand, boxsizerand, boxsizerand);
    colorrand = Math.random();
    if (colorrand < 0.25) {
      material = new THREE.MeshLambertMaterial({
        color: 0xef4f4f
      });
    } else if (colorrand < 0.5) {
      material = new THREE.MeshLambertMaterial({
        color: 0xee9595
      });
    } else if (colorrand < 0.75) {
      material = new THREE.MeshLambertMaterial({
        color: 0xffcda3
      });
    } else {
      material = new THREE.MeshLambertMaterial({
        color: 0x74c7b8
      });
    }

    boxMesh[i] = new THREE.Mesh(boxarray[i], material);
    boxMesh[i].position.set((Math.random() - 0.5) * apart*2, (Math.random() - 0.5) * apart*2, (Math.random() - 0.5) * apart);
    boxMesh[i].rotation.set((Math.random() - 0.5) * 2 * Math.PI, (Math.random() - 0.5) * 2 * Math.PI, (Math.random() - 0.5) * 2 * Math.PI);
    boxrotationXarray[i] = (Math.random() - 0.5) / 50;
    boxrotationYarray[i] = (Math.random() - 0.5) / 50;
    boxrotationZarray[i] = (Math.random() - 0.5) / 50;

    boxvelocityXarray[i] = (Math.random() - 0.5) * 3;
    boxvelocityYarray[i] = (Math.random() - 0.5) * 3;
    boxvelocityZarray[i] = (Math.random() - 0.5) * 3;
    scene.add(boxMesh[i]);
  }
    var Cylinderarray = new Array(Cylindernum);
    var CylinderMesh = new Array(Cylindernum);
    var CylinderrotationXarray = new Array(Cylindernum);
    var CylinderrotationYarray = new Array(Cylindernum);
    var CylinderrotationZarray = new Array(Cylindernum);
  
    var CylindervelocityXarray = new Array(Cylindernum);
    var CylindervelocityYarray = new Array(Cylindernum);
    var CylindervelocityZarray = new Array(Cylindernum);
    var Cylindersize = 800;
  
    for (var i = 0; i < Cylindernum; i++) {
      Cylindersizerand = Cylindersize;
      Cylindersizerand = Math.round((Math.random() + 0.5) * Cylindersize);
      Cylinderarray[i] = new THREE.CylinderGeometry(Cylindersizerand, Cylindersizerand,Cylindersizerand);
      colorrand = Math.random();
      if (colorrand < 0.25) {
        material = new THREE.MeshLambertMaterial({
          color: 0xef4f4f
        });
      } else if (colorrand < 0.5) {
        material = new THREE.MeshLambertMaterial({
          color: 0xee9595
        });
      } else if (colorrand < 0.75) {
        material = new THREE.MeshLambertMaterial({
          color: 0xffcda3
        });
      } else {
        material = new THREE.MeshLambertMaterial({
          color: 0x74c7b8
        });
      }
  
      CylinderMesh[i] = new THREE.Mesh(Cylinderarray[i], material);
      CylinderMesh[i].position.set((Math.random() - 0.5) * apart*2, (Math.random() - 0.5) * apart*2, (Math.random() - 0.5) * apart);
      CylinderMesh[i].rotation.set((Math.random() - 0.5) * 2 * Math.PI, (Math.random() - 0.5) * 2 * Math.PI, (Math.random() - 0.5) * 2 * Math.PI);
      CylinderrotationXarray[i] = (Math.random() - 0.5) / 50;
      CylinderrotationYarray[i] = (Math.random() - 0.5) / 50;
      CylinderrotationZarray[i] = (Math.random() - 0.5) / 50;
  
      CylindervelocityXarray[i] = (Math.random() - 0.5) * 3;
      CylindervelocityYarray[i] = (Math.random() - 0.5) * 3;
      CylindervelocityZarray[i] = (Math.random() - 0.5) * 3;
      scene.add(CylinderMesh[i]);
    }

      // 箱を作成
  var octahedronarray = new Array(octahedronnum);
  var octahedronMesh = new Array(octahedronnum);
  var octahedronrotationXarray = new Array(octahedronnum);
  var octahedronrotationYarray = new Array(octahedronnum);
  var octahedronrotationZarray = new Array(octahedronnum);

  var octahedronvelocityXarray = new Array(octahedronnum);
  var octahedronvelocityYarray = new Array(octahedronnum);
  var octahedronvelocityZarray = new Array(octahedronnum);
  var octahedronsize = 1000;

  for (var i = 0; i < octahedronnum; i++) {
    octahedronsizerand = octahedronsize;
    octahedronsizerand = Math.round((Math.random() + 0.5) * octahedronsize);
    octahedronarray[i] = new THREE.OctahedronBufferGeometry(octahedronsizerand);
    colorrand = Math.random();
    if (colorrand < 0.25) {
      material = new THREE.MeshLambertMaterial({
        color: 0xef4f4f
      });
    } else if (colorrand < 0.5) {
      material = new THREE.MeshLambertMaterial({
        color: 0xee9595
      });
    } else if (colorrand < 0.75) {
      material = new THREE.MeshLambertMaterial({
        color: 0xffcda3
      });
    } else {
      material = new THREE.MeshLambertMaterial({
        color: 0x74c7b8
      });
    }

    octahedronMesh[i] = new THREE.Mesh(octahedronarray[i], material);
    octahedronMesh[i].position.set((Math.random() - 0.5) * apart*2, (Math.random() - 0.5) * apart*2, (Math.random() - 0.5) * apart);
    octahedronMesh[i].rotation.set((Math.random() - 0.5) * 2 * Math.PI, (Math.random() - 0.5) * 2 * Math.PI, (Math.random() - 0.5) * 2 * Math.PI);
    octahedronrotationXarray[i] = (Math.random() - 0.5) / 50;
    octahedronrotationYarray[i] = (Math.random() - 0.5) / 50;
    octahedronrotationZarray[i] = (Math.random() - 0.5) / 50;

    octahedronvelocityXarray[i] = (Math.random() - 0.5) * 3;
    octahedronvelocityYarray[i] = (Math.random() - 0.5) * 3;
    octahedronvelocityZarray[i] = (Math.random() - 0.5) * 3;
    scene.add(octahedronMesh[i]);
  }
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
    for (var i = 0;i<boxnum;i++){
      boxMesh[i].rotation.x +=boxrotationXarray[i];
      boxMesh[i].rotation.y +=boxrotationYarray[i];
      boxMesh[i].rotation.z +=boxrotationZarray[i];

      
      boxMesh[i].position.x +=boxvelocityXarray[i];
      boxMesh[i].position.y +=boxvelocityYarray[i];
      boxMesh[i].position.z +=boxvelocityZarray[i];
    }

    
    for (var i = 0;i<Cylindernum;i++){
      CylinderMesh[i].rotation.x +=CylinderrotationXarray[i];
      CylinderMesh[i].rotation.y +=CylinderrotationYarray[i];
      CylinderMesh[i].rotation.z +=CylinderrotationZarray[i];

      
      CylinderMesh[i].position.x +=CylindervelocityXarray[i];
      CylinderMesh[i].position.y +=CylindervelocityYarray[i];
      CylinderMesh[i].position.z +=CylindervelocityZarray[i];
    }

    for (var i = 0;i<octahedronnum;i++){
      octahedronMesh[i].rotation.x +=octahedronrotationXarray[i];
      octahedronMesh[i].rotation.y +=octahedronrotationYarray[i];
      octahedronMesh[i].rotation.z +=octahedronrotationZarray[i];

      
      octahedronMesh[i].position.x +=octahedronvelocityXarray[i];
      octahedronMesh[i].position.y +=octahedronvelocityYarray[i];
      octahedronMesh[i].position.z +=octahedronvelocityZarray[i];
    }
      renderer.render(scene, camera);
  }
}