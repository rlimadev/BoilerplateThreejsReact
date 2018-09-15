import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three';

const Cube = (colorMaterial, width, height, depth, widthSegments, heightSements) => {
  const geometry = new BoxGeometry(width, height, depth, widthSegments, heightSements);
  const material = new MeshPhongMaterial({ color: colorMaterial });

  const cube = new Mesh(geometry, material);

  return cube;
};

export default Cube;
