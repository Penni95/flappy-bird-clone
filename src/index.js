import Phaser from "phaser";

const config = {
  type: Phaser.AUTO, // sets WebGL (Web Graphics Library - JS API 2D/3D renderer) as default
  width: 800,
  height: 600,
  physics: {
    default: 'arcade' // arcade physics plugin, manages physic simulations
  },
  scene: {
    preload, //instead of preLoader: preLoader - JS Shorthand
    create
  }
};


// loads assets like images, music, animations ...
function preload(){
  // 'this' context - scene
  // contains functions and properties we can use
  this.load.image('sky', 'assets/sky.png'); // 1. parameter is key
  // console.log('test1');
}

function create(){
  // parameters: 
  // x = 400
  // y = 300
  // key of image
  this.add.image(config.width / 2, config.height / 2, 'sky');
  // console.log('test2');
}

new Phaser.Game(config);
