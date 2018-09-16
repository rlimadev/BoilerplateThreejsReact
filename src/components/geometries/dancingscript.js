import {
  ShapeBufferGeometry, MeshBasicMaterial, Mesh, DoubleSide,
} from 'three';

const DancingScript = (text, shape, x, y, z, doubleSided = false, colorP) => {
  const shapes = shape.generateShapes(`${text}`, 1);
  const geometry = new ShapeBufferGeometry(shapes);

  geometry.computeBoundingBox();

  const material = new MeshBasicMaterial({
    color: colorP,
    side: DoubleSide,
  });

  const posX = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

  const mesh = new Mesh(geometry, material);
  mesh.doubleSided = doubleSided;
  mesh.position.x = (x === 0) ? posX : x;
  mesh.position.y = y;
  mesh.position.z = z;
  return mesh;
};

export default DancingScript;
