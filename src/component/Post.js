/* eslint-disable import/no-unresolved */
import {
  onGetTasks, viewUser,
} from '../lib/index.js';
import { EditePost, namePost } from './Edite.js';
import { Delete } from './DeletePost.js';
import { likePost } from './Like.js';

const PostHandler = (doc, id, user, name) => {
  const postUS = doc;
  const cardDiv = document.createElement('div');
  cardDiv.className = 'cardCont';
  cardDiv.setAttribute('id', id);

  /*  */

  const cajaPost = document.createElement('div');
  cajaPost.className = 'cajaPost';
  cardDiv.appendChild(cajaPost);
  const cajaName = document.createElement('div');
  cajaName.className = 'cajaName';
  cajaName.innerText = postUS.name;
  cardDiv.appendChild(cajaName);

  const cajaIcon = document.createElement('div');
  cajaIcon.className = 'cajaIcon';
  cardDiv.appendChild(cajaIcon);
  // caja Like
  const cajaLike = document.createElement('div');
  cajaLike.className = 'cajaLike';
  const btnLike = document.createElement('button');
  btnLike.innerText = '❤';
  btnLike.setAttribute('id', id);
  const numLike = document.createElement('p');
  numLike.className = 'numLike';
  const numLikes = doc.like.length - 1;
  btnLike.className = 'btnLike';
  numLike.innerText = numLikes;
  cajaLike.appendChild(btnLike);
  cajaLike.appendChild(numLike);
  cajaIcon.appendChild(cajaLike);
  btnLike.setAttribute('id', id);

  const cajaText = document.createElement('textarea');
  cajaText.innerText = postUS.post;
  cajaText.className = 'cajaText';
  cajaText.disabled = 'true';
  cajaPost.appendChild(cajaText);
  const cajaEdit = document.createElement('div');
  cajaEdit.className = 'cajaEdit';
  cardDiv.appendChild(cajaEdit);
  const btnSaveText = document.createElement('button');
  btnSaveText.className = 'btnSaveText';
  const imgSave = document.createElement('img');
  imgSave.className = 'btnSaveImage';
  imgSave.src = 'https://i.postimg.cc/HWB4C2hC/plane.png';
  btnSaveText.appendChild(imgSave);
  const btnDelete = document.createElement('button');
  btnDelete.className = 'btnDelete';
  const btnEdit = document.createElement('button');
  btnEdit.className = 'btnEdit';

  const liDelete = document.createElement('img');
  liDelete.className = 'delete_img';
  liDelete.src = 'https://i.postimg.cc/Dzk1cY81/Trash.png';
  const liEdit = document.createElement('img');
  liEdit.className = 'edit_img';
  liEdit.src = 'https://i.postimg.cc/W4ThzRdY/EditarB.png';

  btnEdit.appendChild(liEdit);
  btnDelete.appendChild(liDelete);
  const cajaIconos = document.createElement('div');
  cajaIconos.className = 'cajaIconos';
  cajaIcon.appendChild(cajaIconos);
  const postFilter = doc.id === user;
  if (postFilter) {
    namePost(id, name);
    cajaIconos.appendChild(btnDelete);
    liDelete.setAttribute('id', id);
    cajaIconos.appendChild(btnEdit);
    liEdit.setAttribute('id', id);
    cajaEdit.appendChild(btnSaveText);
  }
  if (postUS.like.includes(user)) {
    btnLike.style.color = '#ff0054';
  }
  return cardDiv;
};
export const Post = () => {
  const poster = document.createElement('div');
  const divPoster = document.createElement('section');
  divPoster.className = 'cajapost';
  viewUser((user) => {
    if (user !== null) {
      poster.style.display = 'block';
      onGetTasks((querySnapshot) => {
        const contenedorCaja = document.createElement('div');
        contenedorCaja.className = 'contenedorCaja';
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          const name = user.displayName;
          contenedorCaja.appendChild(PostHandler(data, id, user.uid, name));
        });
        divPoster.innerHTML = '';
        divPoster.appendChild(contenedorCaja);
        EditePost();
        // delite elimina la publicacion
        poster.appendChild(Delete());
        likePost(user.uid);
      });
    } else {
      poster.style.display = 'none';
    }
  });

  poster.appendChild(divPoster);
  // la funcion me debe retornar el div poster
  return poster;
};
