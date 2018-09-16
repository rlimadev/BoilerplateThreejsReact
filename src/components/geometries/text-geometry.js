import {
  ShapeBufferGeometry, MeshBasicMaterial, Mesh, DoubleSide,
} from 'three';

const DancingScript = (text, shape, x, y, z, doubleSided = false, color) => {
  const parameters = {
    text, shape, x, y, z, doubleSided, color,
  };

  const shapes = parameters.shape.generateShapes(parameters.text, 1);
  const geometry = new ShapeBufferGeometry(shapes);

  geometry.computeBoundingBox();

  const material = new MeshBasicMaterial({
    color: parameters.color,
    side: DoubleSide,
  });

  const posX = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

  const mesh = new Mesh(geometry, material);
  mesh.doubleSided = parameters.doubleSided;
  mesh.position.x = (parameters.x === 0) ? posX : parameters.x;
  mesh.position.y = parameters.y;
  mesh.position.z = parameters.z;
  return mesh;
};

export default DancingScript;
