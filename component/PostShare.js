/* eslint-disable import/no-unresolved */
import {
  createPost, viewUser,
} from '../lib/index.js';

export const Share = () => {
  const sectionBody = document.createElement('section');
  sectionBody.className = 'sectionBody';
  const textocc = document.createElement('h3');
  textocc.innerText = 'Share your love for music with our community';
  sectionBody.appendChild(textocc);
  const formPost = document.createElement('form');
  formPost.className = 'formPost';
  const cajaTexForm = document.createElement('div');
  cajaTexForm.classList = 'cajatextform';
  const textoPost = document.createElement('textarea');
  textoPost.className = 'textoPost';
  textoPost.placeholder = 'Write here:';
  const cajabtn = document.createElement('div');
  cajabtn.className = 'cajabtn';
  const botonPost = document.createElement('button');
  botonPost.type = 'submit';
  botonPost.textContent = 'Post';
  botonPost.className = 'botonPost';

  // caja Like
  // const cajaLike = document.createElement('div');
  // cajaLike.className = 'cajaLike';
  // const btnLike = document.createElement('button');
  // btnLike.type = 'submit';
  // btnLike.className = 'btnLike';

  sectionBody.appendChild(formPost);
  formPost.appendChild(cajaTexForm);
  cajaTexForm.appendChild(textoPost);
  formPost.appendChild(cajabtn);
  cajabtn.appendChild(botonPost);

  // formPost.appendChild(cajaLike);
  // cajaLike.appendChild(btnLike);

  const divPoster = document.createElement('section');
  divPoster.className = 'cajapost';
  viewUser((user) => {
    if (user) {
      if (user !== null) {
        formPost.addEventListener('submit', async (e) => {
          e.preventDefault();
          const likeus = 0;
          createPost(textoPost.value, user.uid, user.displayName, likeus);
          formPost.reset();
        });
      }
    }
  });
  return sectionBody;
};
