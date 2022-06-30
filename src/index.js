import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO, // sets WebGL (Web Graphics Library - JS API 2D/3D renderer) as default
  width: 800,
  height: 600,
  physics: {
    // arcade physics plugin, manages physic simulations
    default: 'arcade'
  },
  scene: {
    preLoad, //instead of preLoader: preLoader - JS Shorthand
    create
  }
};

// loads assets like images, music, animations ...
function preLoad(){
  // 'this' context - scene
  // contains functions and properties we can use
  debugger
}

function create(){
  debugger
}

new Phaser.Game(config);
