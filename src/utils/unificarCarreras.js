export function unificarCarreras(data) {
  const mapa = {};

  data.forEach((carrera) => {
    if (!mapa[carrera.nombre]) {
      mapa[carrera.nombre] = { ...carrera };
    } else {
      mapa[carrera.nombre].universidades.push(...carrera.universidades);
    }
  });

  return Object.values(mapa);
}