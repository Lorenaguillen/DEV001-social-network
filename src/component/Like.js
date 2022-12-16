/* eslint-disable import/no-unresolved */
import {
  updateTask, onGetTask,
} from '../lib/index.js';

const likeHandler = (id, likes) => {
  updateTask(id, {
    like: likes,
  });
};

export const likePost = (user) => {
  const poste = document.querySelector('.cajapost');
  const likeBtn = poste.querySelectorAll('.btnLike');
  likeBtn.forEach((likes) => {
    likes.addEventListener('mouseup', (e) => {
      const id = e.target.id;
      onGetTask(id).then((res) => {
        // res.data son las respuesta 
        const post = res.data();
        if (!post.like.includes(user)) {
          // ... hacer copia y agregar ID del usuario
          const likesNew = [...post.like, user];
          likeHandler(id, likesNew);
        } else {
          // filtra el array de usuarios
          const filterUs = post.like.filter((elemento) => elemento !== user);
          likeHandler(id, filterUs);
        }
      });
    });
  });
};
