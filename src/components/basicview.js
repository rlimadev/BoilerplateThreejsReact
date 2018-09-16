import React, { Component } from 'react';

import * as THREE from 'three';
import Cube from './geometries/cube';
import DancingScript from './geometries/dancingscript';

class BasicView extends Component {
  constructor(inputText) {
    super();
    this.inputTextValue = inputText;
  }

  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000,
    );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const light = new THREE.DirectionalLight(0xfffffff);
    light.position.set(0, 20, 10);
    const ambient = new THREE.AmbientLight({ color: 0x707070 });

    const loader = new THREE.FontLoader();
    loader.load('./src/fonts/dancing_script.typeface.json', (font) => {
      const mesh = new DancingScript(this.inputTextValue.inputText, font, 0, 0, 0, true, 0x98cc37);
      this.init(mesh);
    });

    this.scene.add(light);
    this.scene.add(ambient);
  }

  componentWillUnmount() {
    this.cube = null;
    this.scene = null;
    this.renderer = null;
    this.myFont = null;
  }

  init(font) {
    this.groupScene = new THREE.Group();
    this.myFont = font;
    this.groupScene.add(this.myFont);
    this.scene.add(this.groupScene);

    this.cube = new Cube(0xff0000, 1, 1, 1, 1, 1);
    this.cube.position.set(0, -1.4, 0);
    this.scene.add(this.cube);
    this.camera.position.z = 4;

    this.loopRender();
    this.renderer.render(this.scene, this.camera);
  }

  loopRender() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.loopRender.bind(this));

    this.groupScene.rotation.y += 0.01;

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }

  render() {
    return <div id="threejs" className="three-holder" />;
  }
}

export default BasicView;
