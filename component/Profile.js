/* eslint-disable import/no-unresolved */
import { viewUser, updateUser } from '../lib/index.js';
import { Rutas } from '../lib/rutas.js';
// updateProfile,
export const Profile = (onNavigate) => {
  /* Div padre */
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'divPadrePerfil';
  // modal Registration
  // el fondo del modal
  const modal = document.createElement('section');
  modal.className = 'modal';
  // el centro del modal
  const modalFlex = document.createElement('div');
  modalFlex.className = 'flex_modal';
  modal.appendChild(modalFlex);
  // cont modal
  const contenidoModal = document.createElement('div');
  contenidoModal.className = 'contenido_modal';
  modalFlex.appendChild(contenidoModal);
  // headermodal
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal_header_profile flex_modal_header';
  contenidoModal.appendChild(modalHeader);
  // logomodal
  const logoModal = document.createElement('div');
  logoModal.className = 'logo_modal';
  modalHeader.appendChild(logoModal);
  const textoHeader = document.createElement('h2');
  textoHeader.innerText = 'Lymusic';
  logoModal.appendChild(textoHeader);
  // botonmodal
  const botonClose = document.createElement('button');
  botonClose.className = 'close';
  botonClose.innerText = 'x';
  modalHeader.appendChild(botonClose);
  // body modal
  const modalBody = document.createElement('div');
  modalBody.className = 'modal_body_profile';
  contenidoModal.appendChild(modalBody);
  const mensajeModal = document.createElement('p');
  mensajeModal.className = 'modal_mensaje_profile';
  modalBody.appendChild(mensajeModal);

  /* contenedor perfil */
  const contenedorPerfil = document.createElement('div');
  contenedorPerfil.className = 'contenedorPerfil';
  // cont div registro
  const divProfile = document.createElement('div');
  divProfile.className = 'con_form_profile';
  // boton retorno
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegresoProfile';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = '«';
  buttonHome.classList = 'btn_home_profile';
  divBoton.appendChild(buttonHome);
  buttonHome.addEventListener('click', () => {
    onNavigate('/Begin');
    window.location.reload();
  });
  contenedorPerfil.appendChild(divBoton);
  /* titulo perfil */
  const divTit = document.createElement('div');
  contenedorPerfil.appendChild(divTit);
  const tituloPro = document.createElement('h2');
  tituloPro.textContent = 'Edit your Profile';
  divTit.appendChild(tituloPro);
  divTit.className = 'divTit';
  // imagen tamaño pc
  const divImgContainer = document.createElement('div');
  divImgContainer.className = 'img_container_profile';
  divProfile.appendChild(divImgContainer);
  /* formulario */
  const form = document.createElement('form');
  contenedorPerfil.appendChild(form);
  // div formulario
  const divForm = document.createElement('div');
  divForm.className = 'formularioProfile';
  form.appendChild(divForm);
  // titulo formulario
  const tituloForm = document.createElement('h2');
  tituloForm.textContent = 'Profile';
  divForm.appendChild(tituloForm);
  /* grupos de formularios */
  const grupo1 = document.createElement('div');
  grupo1.className = 'gruposProfile';
  const nombre = document.createElement('input');
  nombre.className = 'nombre_input';
  nombre.type = 'text';
  const barra1 = document.createElement('span');
  barra1.className = 'barra_profile';
  const labelNombre = document.createElement('label');
  labelNombre.innerText = 'Nombre';
  labelNombre.className = 'nombre_label';
  divForm.appendChild(grupo1);
  grupo1.appendChild(nombre);
  grupo1.appendChild(barra1);
  grupo1.appendChild(labelNombre);

  const grupo2 = document.createElement('div');
  grupo2.className = 'gruposProfile';
  const imgPerfil = document.createElement('input');
  imgPerfil.type = 'url';
  imgPerfil.className = 'url_foto';
  const barra2 = document.createElement('span');
  barra2.className = 'barra_profile';
  const labelUrl = document.createElement('label');
  labelUrl.innerText = 'Enter the URL of your image:';
  labelUrl.className = 'label_url';
  divForm.appendChild(grupo2);
  grupo2.appendChild(imgPerfil);
  grupo2.appendChild(barra2);
  grupo2.appendChild(labelUrl);

  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Enviar';
  buttonSubmit.className = 'btn_submit';
  divForm.appendChild(buttonSubmit);
  modal.style.display = 'none';
  botonClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  viewUser((user) => {
    if (user) {
      contenedorPerfil.style.display = 'block';
      if (user !== null) {
        nombre.value = user.displayName;
        imgPerfil.value = user.photoURL;
      }
    } else {
      modal.style.display = 'none';
      contenedorPerfil.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUser(nombre.value, imgPerfil.value).then(() => {
      onNavigate(Rutas('perfil'));
      window.location.reload();
    }).catch((err) => {
      modal.style.display = 'block';
      mensajeModal.innerText = err.code;
    });
  });
  HomeDiv.appendChild(modal);
  HomeDiv.appendChild(contenedorPerfil);
  return HomeDiv;
};
