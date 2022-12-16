export const Rutas = (rutas) => {
  let sms;
  if (rutas === 'registro') {
    sms = '/profile';
  } else {
    sms = '/Begin';
  }
  return sms;
};

// esto se hizo para guiar la ruta de inicio, para que una se vaya a perfil y la otra a inicio