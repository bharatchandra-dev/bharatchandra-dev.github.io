const LOADER = document.getElementById('js-loader');

const TRAY = document.getElementById('js-tray-slide');
const DRAG_NOTICE = document.getElementById('js-drag-notice');

var theModel;

// const MODEL_PATH = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/chair.glb";
const MODEL_PATH = "5 september seat cover .glb";

var activeOption = 'Plane';
var loaded = false;

const colors = [
{
  texture: 'seat_texture/1.jpg',
  size: [2, 2, 2],
  shininess: 0 },
{
  texture: 'seat_texture/2.jpg',
  size: [4, 4, 4],
  shininess: 0 },
{
  texture: 'seat_texture/3.jpg',
  size: [8, 8, 8],
  shininess: 10 },
{
  texture: 'seat_texture/4.jpg',
  size: [3, 3, 3],
  shininess: 0 },
{
  texture: 'seat_texture/5.jpg',
  size: [6, 6, 6],
  shininess: 0 },
{
  texture: 'seat_texture/6.jpg',
  size: [2, 2, 2],
  shininess: 0 },
{
  texture: 'seat_texture/7.jpg',
  size: [4, 4, 4],
  shininess: 0 },
{
  texture: 'seat_texture/8.jpg',
  size: [8, 8, 8],
  shininess: 10 },
{
  texture: 'seat_texture/9.jpg',
  size: [3, 3, 3],
  shininess: 0 },
{
  texture: 'seat_texture/10.jpg',
  size: [6, 6, 6],
  shininess: 0 },
{
  texture: 'seat_texture/11.jpg',
  size: [2, 2, 2],
  shininess: 0 },
{
  texture: 'seat_texture/12.jpg',
  size: [4, 4, 4],
  shininess: 0 },
{
  texture: 'seat_texture/13.jpg',
  size: [8, 8, 8],
  shininess: 10 },
{
  texture: 'seat_texture/14.jpg',
  size: [3, 3, 3],
  shininess: 0 },
{
  texture: 'seat_texture/1_1.jpg',
  size: [6, 6, 6],
  shininess: 0 },
  {
    texture: 'seat_texture/2_1.jpg',
    size: [4, 4, 4],
    shininess: 0 },
  
  {
    texture: 'seat_texture/3_1.jpg',
    size: [8, 8, 8],
    shininess: 10 },
  
  {
    texture: 'seat_texture/4_1.jpg',
    size: [3, 3, 3],
    shininess: 0 },
  
  {
    texture: 'seat_texture/5_5.jpg',
    size: [6, 6, 6],
    shininess: 0 },
  {
    texture: 'seat_texture/6_1.jpg',
    size: [2, 2, 2],
    shininess: 0 },
  
  {
    texture: 'seat_texture/7_1.jpg',
    size: [4, 4, 4],
    shininess: 0 },
  
  {
    texture: 'seat_texture/8_1.jpg',
    size: [8, 8, 8],
    shininess: 10 },
  
  {
    texture: 'seat_texture/9_1.jpg',
    size: [3, 3, 3],
    shininess: 0 },
  
  {
    texture: 'seat_texture/10_1.jpg',
    size: [6, 6, 6],
    shininess: 0 },
  {
    texture: 'seat_texture/11_1.jpg',
    size: [2, 2, 2],
    shininess: 0 },
  
  {
    texture: 'seat_texture/12_1.jpg',
    size: [4, 4, 4],
    shininess: 0 },
  
  {
    texture: 'seat_texture/13_1.jpg',
    size: [8, 8, 8],
    shininess: 10 },
  
  {
    texture: 'seat_texture/14_1.jpg',
    size: [3, 3, 3],
    shininess: 0 },
  
  {
    texture: 'seat_texture/15_1.jpg',
    size: [6, 6, 6],
    shininess: 0 },

// {
//   color: '131417' },

];




const BACKGROUND_COLOR = 0xdddddd;
// Init the scene
const scene = new THREE.Scene();
// Set background
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

const canvas = document.querySelector('#c');

// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);

var cameraFar = 7;

document.body.appendChild(renderer.domElement);

// Add a camerra
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.z = cameraFar;
camera.position.x = 5;
camera.position.y = 1;
scene.add(camera)

// Initial material
const INITIAL_MTL = new THREE.MeshPhongMaterial({ color: 0xf1f1f1, shininess: 10 });

// const INITIAL_MAP = [
// { childID: "back", mtl: INITIAL_MTL },
// { childID: "base", mtl: INITIAL_MTL },
// { childID: "cushions", mtl: INITIAL_MTL },
// { childID: "legs", mtl: INITIAL_MTL },
// { childID: "supports", mtl: INITIAL_MTL }];

// const INITIAL_MAP = [
//   { childID: "seat_bottom_", mtl: INITIAL_MTL },
//   { childID: "head_rest_", mtl: INITIAL_MTL },
//   { childID: "Plane004", mtl: INITIAL_MTL },
//   { childID: "backup_base_", mtl: INITIAL_MTL },
//   { childID: "seat_base_", mtl: INITIAL_MTL }];

const INITIAL_MAP = [
  { childID: "Plane", mtl: INITIAL_MTL },
  { childID: "thread2", mtl: INITIAL_MTL },
  { childID: "thread_1", mtl: INITIAL_MTL },
  { childID: "threads_for_bottom_", mtl: INITIAL_MTL },
  { childID: "head_rest_", mtl: INITIAL_MTL },
  { childID: "head_rest_suppot", mtl: INITIAL_MTL },
  { childID: "seat_front", mtl: INITIAL_MTL },
  { childID: "bottom_seat_", mtl: INITIAL_MTL },
  { childID: "right_side_pattern", mtl: INITIAL_MTL },
  { childID: "left_side_pattern", mtl: INITIAL_MTL },
  { childID: "bottom_seat_suuport_", mtl: INITIAL_MTL }
];


// Init the object loader
var loader = new THREE.GLTFLoader();

loader.load(MODEL_PATH, function (gltf) {
  theModel = gltf.scene;

  theModel.traverse(o => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  // Set the models initial scale   
  theModel.scale.set(1, 1, 1);
  theModel.rotation.y = Math.PI;

  // Offset the y position a bit
  theModel.position.y = -1;

  // Set initial textures
  for (let object of INITIAL_MAP) {
    initColor(theModel, object.childID, object.mtl);
  }

  // Add the model to the scene
  scene.add(theModel);

  // Remove the loader
  LOADER.remove();

}, undefined, function (error) {
  console.error(error);
});

// Function - Add the textures to the models
function initColor(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type; // Set a new property to identify this object
      }
    }
  });
}

// Add lights
var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
hemiLight.position.set(0, 50, 0);
// Add hemisphere light to scene   
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(12, 20, 8);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// Add directional Light to scene    
scene.add(dirLight);

// Floor
var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
var floorMaterial = new THREE.MeshPhongMaterial({
  color: 0xeeeeee,
  shininess: 0 });


var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
floor.position.y = -1;
scene.add(floor);

// Add controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.1;
controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
controls.autoRotateSpeed = 0.2; // 30

function animate() {

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  if (theModel != null && loaded == false) {
    initialRotation();
    DRAG_NOTICE.classList.add('start');
  }
}

animate();

// Function - New resizing method
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {

    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Function - Build Colors

function buildColors(colors) {
  for (let [i, color] of colors.entries()) {
    let swatch = document.createElement('div');
    swatch.classList.add('tray__swatch');

    if (color.texture)
    {
      swatch.style.backgroundImage = "url(" + color.texture + ")";
    } else
    {
      swatch.style.background = "#" + color.color;
    }

    swatch.setAttribute('data-key', i);
    TRAY.append(swatch);
  }
}

buildColors(colors);

// Select Option
const options = document.querySelectorAll(".option");

for (const option of options) {
  option.addEventListener('click', selectOption);
}

function selectOption(e) {
  let option = e.target;
  activeOption = e.target.dataset.option;
  for (const otherOption of options) {
    otherOption.classList.remove('--is-active');
  }
  option.classList.add('--is-active');
}

// Swatches
const swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of swatches) {
  swatch.addEventListener('click', selectSwatch);
}

function selectSwatch(e) {
  let color = colors[parseInt(e.target.dataset.key)];
  let new_mtl;

  if (color.texture) {

    let txt = new THREE.TextureLoader().load(color.texture);

    txt.repeat.set(color.size[0], color.size[1], color.size[2]);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    new_mtl = new THREE.MeshPhongMaterial({
      map: txt,
      shininess: color.shininess ? color.shininess : 10 });

  } else

  {
    new_mtl = new THREE.MeshPhongMaterial({
      color: parseInt('0x' + color.color),
      shininess: color.shininess ? color.shininess : 10 });


  }
  setMaterial(theModel, activeOption, new_mtl);
}

function setMaterial(parent, type, mtl) {
  parent.traverse(o => {
    if (o.isMesh && o.nameID != null) {
      if (o.nameID == type) {
        // console.log(o.material)
        o.material = mtl;
      }
    }
  });
}

// Function - Opening rotate
let initRotate = 0;

function initialRotation() {
  initRotate++;
  if (initRotate <= 120) {
    theModel.rotation.y += Math.PI / 60;
  } else {
    loaded = true;
  }
}

var slider = document.getElementById('js-tray'),sliderItems = document.getElementById('js-tray-slide'),difference;

function slide(wrapper, items) {
  var posX1 = 0,
  posX2 = 0,
  posInitial,
  threshold = 20,
  posFinal,
  slides = items.getElementsByClassName('tray__swatch');

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);


  function dragStart(e) {
    e = e || window.event;
    posInitial = items.offsetLeft;
    difference = sliderItems.offsetWidth - slider.offsetWidth;
    difference = difference * -1;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }

    if (items.offsetLeft - posX2 <= 0 && items.offsetLeft - posX2 >= difference) {
      items.style.left = items.offsetLeft - posX2 + "px";
    }
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {

    } else if (posFinal - posInitial > threshold) {

    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

}
slide(slider, sliderItems);

// var link = document.createElement( 'a' ); link.style.display = 'none'; document.body.appendChild( link );

//   function save( blob, filename ) { link.href = URL.createObjectURL( blob ); link.download = filename; link.click(); }
//   function saveString( text, filename ) { save( new Blob( [ text ], { type: 'application/octet-stream' } ), filename );}

//   var script=document.createElement('script');
//   script.src='https://threejs.org/examples/js/exporters/GLTFExporter.js';
//   // script.onload = function () {
//   //   var exporter = new THREE.GLTFExporter();
//   //   var sceneToExport = window.AFRAME ? AFRAME.scenes[0].object3D : scene;
//   //   exporter.parse(sceneToExport, function (result) {
//   //     var output = JSON.stringify( result, null, 2 );
//   //     console.log( output );
//   //     saveString( output, 'scene.gltf' );
//   //   });
//   //   };
//   //   document.head.appendChild(script);

//   function myFunction() {
//     var exporter = new THREE.GLTFExporter();
//     var sceneToExport = window.AFRAME ? AFRAME.scenes.object3D : scene;
//     exporter.parse(scene, (result) => {
//       var output = JSON.stringify( result, null, 2 );
//       console.log( output );
//       saveString( output, 'scene.gltf' );
//     });
//     };
//     document.head.appendChild(script);

