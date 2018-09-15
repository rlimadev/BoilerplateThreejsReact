import React, { Component } from 'react';

import * as THREE from 'three';
import Cube from './geometries/cube';

class BasicView extends Component {
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

    this.cube = new Cube(0xff0000, 1, 1, 1, 1, 1);

    this.scene.add(this.cube);
    this.scene.add(light);
    this.scene.add(ambient);

    this.camera.position.z = 4;

    this.loopRender();
    this.renderer.render(this.scene, this.camera);
  }

  componentWillUnmount() {
    this.cube = null;
    this.scene = null;
    this.renderer = null;
  }

  loopRender() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.loopRender.bind(this));

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }

  render() {
    return <div id="threejs" className="three-holder" />;
  }
}

export default BasicView;
