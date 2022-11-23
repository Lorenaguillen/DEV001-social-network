import { updateProfile, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/index.js';
import { Rutas } from '../lib/rutas.js';
// updateProfile,
export const Profile = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'divPadrePerfil';

  const divTit = document.createElement('div');
  HomeDiv.appendChild(divTit);
  const tituloPro = document.createElement('h2');
  tituloPro.textContent = 'Edit your Profile';
  divTit.appendChild(tituloPro);
  divTit.className = 'divTit';

  const form = document.createElement('form');
  form.className = 'form_perfil';

  HomeDiv.appendChild(form);
  const nombre = document.createElement('input');
  nombre.className = 'nombre_input';
  nombre.type = 'text';
  nombre.placeholder = 'Type your Name';
  const labelNombre = document.createElement('label');
  labelNombre.innerText = 'Nombre';
  labelNombre.className = 'nombre_label';
  const labelUrl = document.createElement('label');
  labelUrl.innerText = 'URL';
  labelUrl.className = 'label_url';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Enviar';
  buttonSubmit.className = 'btn_submit';
  const imgPerfil = document.createElement('input');
  imgPerfil.type = 'url';
  imgPerfil.className = 'url_foto';
  imgPerfil.placeholder = 'Enter the URL of your image'
  // let nombreCambio = '';
  //  let fotoCambio = '';
  form.appendChild(labelNombre);
  form.appendChild(nombre);
  form.appendChild(labelUrl);
  form.appendChild(imgPerfil);
  form.appendChild(buttonSubmit);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(imgPerfil.value);
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user !== null) {
        console.log(user);
        console.log('dentro de profile');
      }
      console.log(user);
      nombre.value = user.displayName;
      imgPerfil.value = user.photoURL;
    }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(nombre.value);
    // console.log(imgPerfil.value);
    updateProfile(auth.currentUser, {
      displayName: nombre.value, photoURL: imgPerfil.value,
    }).then(() => {
      console.log(auth.currentUser.email);
      onNavigate(Rutas(auth.currentUser.email));
      window.location.reload();

      // Profile updated!
      // ...
    }).catch((error) => {
      alert(error.message);
    });
  });

  return HomeDiv;
};
