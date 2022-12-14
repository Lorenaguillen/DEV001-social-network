export const Rutas = (rutas) => {
  let sms;
  if (rutas === 'registro') {
    sms = '/profile';
  } else {
    sms = '/Begin';
  }
  return sms;
};
