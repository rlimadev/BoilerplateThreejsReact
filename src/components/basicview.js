import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as THREE from 'three';
import Cube from './geometries/cube';
import TextGeometry from './geometries/text-geometry';

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
    this.cube.position.set(0, -1.4, 0);
    this.scene.add(this.cube);

    this.camera.position.z = 4;
    this.scene.add(light);
    this.scene.add(ambient);

    this.renderer.render(this.scene, this.camera);
    this.createText();
  }

  componentDidUpdate() {
    this.updateFont();
  }

  componentWillUnmount() {
    this.cube = null;
    this.scene = null;
    this.renderer = null;
    this.myFont = null;
  }

  newRender() {
    this.renderer.render(this.camera, this.renderer);
  }

  createText() {
    const { inputText } = this.props;
    const loader = new THREE.FontLoader();
    loader.load('./src/fonts/dancing_script.typeface.json', (font) => {
      const mesh = new TextGeometry(inputText, font, 0, 0, 0, true, 0x98cc37);
      this.init(mesh);
    });
  }

  init(font) {
    this.groupScene = new THREE.Group();
    this.myFont = font;
    this.groupScene.add(this.myFont);
    this.scene.add(this.groupScene);

    this.loopRender();
  }

  updateFont() {
    if (this.groupScene) {
      this.groupScene.rotation.y = 0;
      this.cube.rotation.x = 0;
      this.cube.rotation.y = 0;

      this.groupScene.remove(this.myFont);
      this.scene.remove(this.groupScene);
      this.groupScene = null;
      this.myFont = null;

      this.createText();
    }
  }

  loopRender() {
    requestAnimationFrame(this.loopRender.bind(this));

    this.renderRotation();

    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  }

  renderRotation() {
    if (this.groupScene) {
      this.groupScene.rotation.y += 0.001;
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
  }

  render() {
    return <div id="threejs" className="three-holder" />;
  }
}

BasicView.propTypes = {
  inputText: PropTypes.string.isRequired,
};

export default BasicView;
