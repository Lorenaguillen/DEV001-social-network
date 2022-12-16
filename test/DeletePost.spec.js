import { Delete } from '../src/component/DeletePost.js';
// import { onNavigate } from '../src/main.js';

jest.mock('firebase/auth');
jest.mock('../src/__mocks__/main.js');
describe('test de funcion eliminar post', () => {
  it('debería ser una función', () => {
    expect(typeof Delete).toBe('function');
  });
});
