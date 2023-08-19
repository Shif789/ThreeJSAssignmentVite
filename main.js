import * as THREE from "three";

import TWEEN from "three/addons/libs/tween.module.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";

const table = [
  "Walid",
  "25",
  "Male",
  1,
  1,
  "Noel",
  "24",
  "Male",
  18,
  1,
  "Khaled",
  "30",
  "Male",
  1,
  2,
  "Hira",
  "25",
  "Female",
  2,
  2,
  "Shahriar",
  "25",
  "Male",
  13,
  2,
  "Mahmud",
  "30",
  "Male",
  14,
  2,
  "Mehjabeen",
  "26",
  "Female",
  15,
  2,
  "Mahfuz",
  "26",
  "Male",
  16,
  2,
  "Maisha",
  "18",
  "Female",
  17,
  2,
  "Omair",
  "30",
  "Male",
  18,
  2,
  "Raju",
  "26",
  "Male",
  1,
  3,
  "Lavanya",
  "25",
  "Female",
  2,
  3,
  "Khizer",
  "25",
  "Male",
  13,
  3,
  "Renukkha",
  "25",
  "Female",
  14,
  3,
  "Hema",
  "42",
  "Female",
  15,
  3,
  "Ahnaf",
  "26",
  "Male",
  16,
  3,
  "Osama",
  "31",
  "Male",
  17,
  3,
  "Pinky",
  "26",
  "Female",
  18,
  3,
  "Kader",
  "27",
  "Male",
  1,
  4,
  "Abdullah",
  "28",
  "Male",
  2,
  4,
  "Urmi",
  "27",
  "Female",
  3,
  4,
  "Maruf",
  "23",
  "Male",
  4,
  4,
  "Naim",
  "31",
  "Male",
  5,
  4,
  "Mahia",
  "24",
  "Female",
  6,
  4,
  "Masud",
  "35",
  "Male",
  7,
  4,
  "Jannatul",
  "26",
  "Female",
  8,
  4,
  "Didarul",
  "22",
  "Male",
  9,
  4,
  "Nitin",
  "30",
  "Male",
  10,
  4,
  "Cupper",
  "29",
  "Male",
  11,
  4,
  "Zinia",
  "25",
  "Female",
  12,
  4,
  "Gordon",
  "33",
  "Male",
  13,
  4,
  "Gerd",
  "35",
  "Male",
  14,
  4,
  "Asif",
  "38",
  "Male",
  15,
  4,
  "Serena",
  "40",
  "Female",
  16,
  4,
  "Bahar",
  "38",
  "Male",
  17,
  4,
  "Kaaif",
  "50",
  "Male",
  18,
  4,
  "Ritu",
  "24",
  "Female",
  1,
  5,
  "Samiya",
  "27",
  "Female",
  2,
  5,
  "Yaqub",
  "42",
  "Male",
  3,
  5,
  "Zihan",
  "26",
  "Male",
  4,
  5,
  "Nadim",
  "23",
  "Male",
  5,
  5,
  "Muhammad",
  "29",
  "Male",
  6,
  5,
  "Tania",
  "28",
  "Female",
  7,
  5,
  "Ratul",
  "33",
  "Male",
  8,
  5,
  "Raihan",
  "34",
  "Male",
  9,
  5,
  "Phill",
  "35",
  "Male",
  10,
  5,
  "Angelina",
  "39",
  "Female",
  11,
  5,
  "Clara",
  "36",
  "Female",
  12,
  5,
  "Indira",
  "35",
  "Female",
  13,
  5,
  "Salaf",
  "37",
  "Male",
  14,
  5,
  "Sohan",
  "39",
  "Male",
  15,
  5,
  "Tahmid",
  "26",
  "Male",
  16,
  5,
  "Irfan",
  "28",
  "Male",
  17,
  5,
  "Xefer",
  "27",
  "Female",
  18,
  5,
  "Ceaser",
  "68",
  "Male",
  1,
  6,
  "Ceaser",
  "68",
  "Male",
  2,
  6,
  "Ceaser",
  "68",
  "Male",
  4,
  9,
  "Ceaser",
  "68",
  "Male",
  5,
  9,
  "Ceaser",
  "68",
  "Male",
  6,
  9,
  "Ceaser",
  "68",
  "Male",
  7,
  9,
  "Ceaser",
  "68",
  "Male",
  8,
  9,
  "Sameer",
  "26",
  "Male",
  9,
  9,
  //   "Eu",
  //   "Europium",
  //   "151.964",
  //   10,
  //   9,
  //   "Gd",
  //   "Gadolinium",
  //   "157.25",
  //   11,
  //   9,
  //   "Tb",
  //   "Terbium",
  //   "158.92535",
  //   12,
  //   9,
  //   "Dy",
  //   "Dysprosium",
  //   "162.5",
  //   13,
  //   9,
  //   "Ho",
  //   "Holmium",
  //   "164.93032",
  //   14,
  //   9,
  //   "Er",
  //   "Erbium",
  //   "167.259",
  //   15,
  //   9,
  //   "Tm",
  //   "Thulium",
  //   "168.93421",
  //   16,
  //   9,
  //   "Yb",
  //   "Ytterbium",
  //   "173.054",
  //   17,
  //   9,
  //   "Lu",
  //   "Lutetium",
  //   "174.9668",
  //   18,
  //   9,
  //   "Hf",
  //   "Hafnium",
  //   "178.49",
  //   4,
  //   6,
  //   "Ta",
  //   "Tantalum",
  //   "180.94788",
  //   5,
  //   6,
  //   "W",
  //   "Tungsten",
  //   "183.84",
  //   6,
  //   6,
  //   "Re",
  //   "Rhenium",
  //   "186.207",
  //   7,
  //   6,
  //   "Os",
  //   "Osmium",
  //   "190.23",
  //   8,
  //   6,
  //   "Ir",
  //   "Iridium",
  //   "192.217",
  //   9,
  //   6,
  //   "Pt",
  //   "Platinum",
  //   "195.084",
  //   10,
  //   6,
  //   "Au",
  //   "Gold",
  //   "196.966569",
  //   11,
  //   6,
  //   "Hg",
  //   "Mercury",
  //   "200.59",
  //   12,
  //   6,
  //   "Tl",
  //   "Thallium",
  //   "204.3833",
  //   13,
  //   6,
  //   "Pb",
  //   "Lead",
  //   "207.2",
  //   14,
  //   6,
  //   "Bi",
  //   "Bismuth",
  //   "208.9804",
  //   15,
  //   6,
  //   "Po",
  //   "Polonium",
  //   "(209)",
  //   16,
  //   6,
  //   "At",
  //   "Astatine",
  //   "(210)",
  //   17,
  //   6,
  //   "Rn",
  //   "Radon",
  //   "(222)",
  //   18,
  //   6,
  //   "Fr",
  //   "Francium",
  //   "(223)",
  //   1,
  //   7,
  //   "Ra",
  //   "Radium",
  //   "(226)",
  //   2,
  //   7,
  //   "Ac",
  //   "Actinium",
  //   "(227)",
  //   4,
  //   10,
  //   "Th",
  //   "Thorium",
  //   "232.03806",
  //   5,
  //   10,
  //   "Pa",
  //   "Protactinium",
  //   "231.0588",
  //   6,
  //   10,
  //   "U",
  //   "Uranium",
  //   "238.02891",
  //   7,
  //   10,
  //   "Np",
  //   "Neptunium",
  //   "(237)",
  //   8,
  //   10,
  //   "Pu",
  //   "Plutonium",
  //   "(244)",
  //   9,
  //   10,
  //   "Am",
  //   "Americium",
  //   "(243)",
  //   10,
  //   10,
  //   "Cm",
  //   "Curium",
  //   "(247)",
  //   11,
  //   10,
  //   "Bk",
  //   "Berkelium",
  //   "(247)",
  //   12,
  //   10,
  //   "Cf",
  //   "Californium",
  //   "(251)",
  //   13,
  //   10,
  //   "Es",
  //   "Einstenium",
  //   "(252)",
  //   14,
  //   10,
  //   "Fm",
  //   "Fermium",
  //   "(257)",
  //   15,
  //   10,
  //   "Md",
  //   "Mendelevium",
  //   "(258)",
  //   16,
  //   10,
  //   "No",
  //   "Nobelium",
  //   "(259)",
  //   17,
  //   10,
  //   "Lr",
  //   "Lawrencium",
  //   "(262)",
  //   18,
  //   10,
  //   "Rf",
  //   "Rutherfordium",
  //   "(267)",
  //   4,
  //   7,
  //   "Db",
  //   "Dubnium",
  //   "(268)",
  //   5,
  //   7,
  //   "Sg",
  //   "Seaborgium",
  //   "(271)",
  //   6,
  //   7,
  //   "Bh",
  //   "Bohrium",
  //   "(272)",
  //   7,
  //   7,
  //   "Hs",
  //   "Hassium",
  //   "(270)",
  //   8,
  //   7,
  //   "Mt",
  //   "Meitnerium",
  //   "(276)",
  //   9,
  //   7,
  //   "Ds",
  //   "Darmstadium",
  //   "(281)",
  //   10,
  //   7,
  //   "Rg",
  //   "Roentgenium",
  //   "(280)",
  //   11,
  //   7,
  //   "Cn",
  //   "Copernicium",
  //   "(285)",
  //   12,
  //   7,
  //   "Nh",
  //   "Nihonium",
  //   "(286)",
  //   13,
  //   7,
  //   "Fl",
  //   "Flerovium",
  //   "(289)",
  //   14,
  //   7,
  //   "Mc",
  //   "Moscovium",
  //   "(290)",
  //   15,
  //   7,
  //   "Lv",
  //   "Livermorium",
  //   "(293)",
  //   16,
  //   7,
  //   "Ts",
  //   "Tennessine",
  //   "(294)",
  //   17,
  //   7,
  //   "Og",
  //   "Oganesson",
  //   "(294)",
  //   18,
  //   7,
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [], cone: [] };

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 3000;

  scene = new THREE.Scene();

  // table

  for (let i = 0; i < table.length; i += 5) {
    const element = document.createElement("div");
    element.className = "element";

    // to customize the colour for different genders
    if (table[i + 2] == "Male") {
      element.style.backgroundColor = "rgba(0, 0, 255)";
    } else {
      element.style.backgroundColor = "rgba(255,20,147)";
    }
    //element.style.backgroundColor = "rgba(255,192,203)";
    //"rgba(0, 0, 255," + (Math.random() * 0.5 + 0.25) + ")";
    //console.log();

    const number = document.createElement("div");
    number.className = "number";
    number.textContent = i / 5 + 1;
    element.appendChild(number);

    const symbol = document.createElement("div");
    symbol.className = "symbol";
    symbol.textContent = table[i];
    element.appendChild(symbol);

    const details = document.createElement("div");
    details.className = "details";
    details.innerHTML = table[i + 1] + "<br>" + table[i + 2];
    element.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;
    scene.add(objectCSS);

    objects.push(objectCSS);

    //

    const object = new THREE.Object3D();
    object.position.x = table[i + 3] * 140 - 1330;
    object.position.y = -(table[i + 4] * 180) + 990;

    targets.table.push(object);
  }

  // sphere

  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);
  }

  // helix

  for (let i = 0, l = objects.length; i < l; i++) {
    const theta = i * 0.175 + Math.PI;
    const y = -(i * 8) + 450;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.helix.push(object);
  }

  // grid

  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();

    object.position.x = (i % 5) * 400 - 800;
    object.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
    object.position.z = Math.floor(i / 25) * 1000 - 2000;

    targets.grid.push(object);
  }

  // cone

  for (let i = 0, l = objects.length; i < l; i++) {
    // const theta = i * 0.175 + Math.PI;
    // const y = -(i * 8) + 450;
    const theta = i * 5 + Math.PI;
    const y = -(i * 12) + 450;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(500, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.cone.push(object);
  }

  //   for (let i = 0; i < objects.length; i++) {
  //     const theta = i * 4 + Math.PI;
  //     const y = -(i * 12) + 450;

  //     const object = new THREE.Object3D();

  //     object.position.setFromCylindricalCoords(theta, y);

  //     vector.x = object.position.x * 2;
  //     vector.y = object.position.y;
  //     vector.z = object.position.z * 2;

  //     object.lookAt(vector);
  //     targets.cone.push(object);
  //   }

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("container").appendChild(renderer.domElement);

  //

  controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener("change", render);

  const buttonTable = document.getElementById("table");
  buttonTable.addEventListener("click", function () {
    transform(targets.table, 2000);
  });

  const buttonSphere = document.getElementById("sphere");
  buttonSphere.addEventListener("click", function () {
    transform(targets.sphere, 2000);
  });

  const buttonHelix = document.getElementById("helix");
  buttonHelix.addEventListener("click", function () {
    transform(targets.helix, 2000);
  });

  const buttonGrid = document.getElementById("grid");
  buttonGrid.addEventListener("click", function () {
    transform(targets.grid, 2000);
  });

  // For Cone Button
  const buttonCone = document.getElementById("cone");
  buttonCone.addEventListener("click", function () {
    console.log("clicked");
    transform(targets.cone, 2000);
  });

  transform(targets.table, 2000);

  //

  window.addEventListener("resize", onWindowResize);
}

function transform(targets, duration) {
  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targets[i];

    new TWEEN.Tween(object.position)
      .to(
        { x: target.position.x, y: target.position.y, z: target.position.z },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to(
        { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

function animate() {
  requestAnimationFrame(animate);

  TWEEN.update();

  controls.update();
}

function render() {
  renderer.render(scene, camera);
}
