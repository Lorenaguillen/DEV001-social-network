//  jes nos permite simular esta funcion en register login y google, esto es un (Mock)
export const formularioregistro = jest.fn((email) => {
  if (email === 'resolve@gmail.com') {
    return Promise.resolve();
  }
  if (email === 'reject@gmail.com') {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ code: 'auth/email-already-in-use' });
  }
  return '';
});
export const formulariologin = jest.fn((email) => {
  if (email === 'camila01@gmail.com') {
    return Promise.resolve();
  }
  if (email === 'camill@gmail.com') {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ code: 'auth/email-already-in-use' });
  }
  return '';
});
export const viewUser = jest.fn(() => ({ user: { displayName: 'camila', photoURL: '', uid: '5550121' } }));
// eslint-disable-next-line max-len
export const createPost = jest.fn((post, name, id) => Promise.resolve({ Post: { post, name, id } }));
// jest.fn(); retorna un objeto tipo mock
export const formularioGoogle = jest.fn();
export const onGetTasks = jest.fn();
export const deleteTasks = jest.fn();
export const updateTask = jest.fn();
export const signOut = jest.fn();
export const updateUser = jest.fn();
