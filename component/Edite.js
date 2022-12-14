/* eslint-disable import/no-unresolved */
import {
  updateTask,
} from '../lib/index.js';

const updateTaskHandler = (id, tt) => {
  updateTask(id, {
    post: tt.value,
  });
};
export const EditePost = () => {
  const poste = document.querySelector('.cajapost');
  const editbtn = poste.querySelectorAll('.edit_img');
  editbtn.forEach((btn) => {
    btn.addEventListener('mouseup', (e) => {
      const id = e.target.id;
      const carta = poste.querySelectorAll('.cardCont');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < carta.length; i++) {
        const postCard = carta[i].id === e.target.id;
        let cartaInd;
        if (postCard) {
          cartaInd = carta[i];
          console.log(cartaInd);
          const tt = cartaInd.querySelector('.cajaText');
          tt.disabled = false;
          const btnedit = cartaInd.querySelector('.cajaEdit');
          btnedit.style.display = 'block';
          const cajaicon = cartaInd.querySelector('.cajaIcon');
          cajaicon.style.display = 'none';

          const btnsend = cartaInd.querySelector('.btnSaveImage');
          // eslint-disable-next-line no-loop-func
          btnsend.addEventListener('click', () => {
            updateTaskHandler(id, tt);
            tt.disabled = true;
            cajaicon.style.display = 'flex';
            btnedit.style.display = 'none';
          });
        }
      }
    });
  });
};

export const namePost = (id, name) => {
  updateTask(id, {
    name,
  });
};
