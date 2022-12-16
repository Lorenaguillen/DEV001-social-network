/* eslint-disable import/no-unresolved */
import { formularioregistro, formularioGoogle } from '../lib/index.js';
import { Rutas } from '../lib/rutas.js';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'divPadre';
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
  modalHeader.className = 'modal_header_registro flex_modal_header';
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
  modalBody.className = 'modal_body_registro';
  contenidoModal.appendChild(modalBody);
  const mensajeModal = document.createElement('p');
  mensajeModal.className = 'modal_mensaje_registro';
  modalBody.appendChild(mensajeModal);

  HomeDiv.appendChild(modal);

  // div container
  const divcontainer = document.createElement('div');
  divcontainer.className = 'container_registro';
  // cont div registro
  const divRegisro = document.createElement('div');
  divRegisro.className = 'con_form_registro';
  // imagen de registro
  const imgRegistro = document.createElement('div');
  imgRegistro.className = 'imgRegistro';
  divcontainer.appendChild(imgRegistro);

  // boton retorno
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegreso';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = '«';
  buttonHome.classList = 'btn_home_registro';
  divBoton.appendChild(buttonHome);
  buttonHome.addEventListener('click', () => onNavigate('/'));
  divcontainer.appendChild(divBoton);

  // div titulo y textos
  const divBienvenida = document.createElement('div');
  const mensajeBienvenida = document.createElement('h2');
  mensajeBienvenida.textContent = 'Welcome';
  divBienvenida.appendChild(mensajeBienvenida);
  divBienvenida.className = 'mensajeBienvenida';
  divcontainer.appendChild(divBienvenida);
  // imagen tamaño pc
  const divImgContainer = document.createElement('div');
  divImgContainer.className = 'img_container_registro';
  divRegisro.appendChild(divImgContainer);
  // formulario
  const form = document.createElement('form');
  form.className = 'formulario_registro';
  // div formulario
  const divForm = document.createElement('div');
  divForm.className = 'formularioRegistro';
  form.appendChild(divForm);
  // titulo formulario
  const tituloForm = document.createElement('h2');
  tituloForm.textContent = 'Registration';
  divForm.appendChild(tituloForm);
  // grupos de formulario
  const grupo1 = document.createElement('div');
  grupo1.className = 'grupos';
  const email = document.createElement('input');
  email.type = 'email';
  email.classList = 'email_registro';
  const barra1 = document.createElement('span');
  barra1.className = 'barra';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  labelEmail.className = 'labelEmail';
  divForm.appendChild(grupo1);
  grupo1.appendChild(email);
  grupo1.appendChild(barra1);
  grupo1.appendChild(labelEmail);

  const grupo2 = document.createElement('div');
  grupo2.className = 'grupos';
  const pass = document.createElement('input');
  pass.type = 'password';
  pass.classList = 'pass_registro';
  const barra2 = document.createElement('span');
  barra2.className = 'barra';
  const spanPass = document.createElement('span');
  spanPass.textContent = '👀';
  spanPass.className = 'ojito2';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  labelPass.className = 'labelPass';
  divForm.appendChild(grupo2);
  grupo2.appendChild(pass);
  grupo2.appendChild(barra2);
  grupo2.appendChild(spanPass);
  grupo2.appendChild(labelPass);

  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'sign up';
  buttonSubmit.classList = 'btn_formulario_registro';
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  imgGoogle.className = 'imgGoogle';
  imgGoogle.src = 'https://i.postimg.cc/Vv17HkvB/google-1.png';
  buttonGoogle.appendChild(imgGoogle);
  buttonGoogle.classList = 'btn_google';
  divForm.appendChild(buttonSubmit);
  divForm.appendChild(buttonGoogle);

  botonClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
// spanpass es nuestro ojito, pasa de passw a tipo texto
  spanPass.addEventListener('click', () => {
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  });
// preventDefault para que no se recargue el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
//
    formularioregistro(email.value, pass.value).then(() => {
      onNavigate(Rutas('registro'));
      form.reset();
    }).catch((err) => {
      modal.style.display = 'block';

      mensajeModal.innerText = err.code;
    });
  });
  buttonGoogle.addEventListener('click', () => {
    formularioGoogle().then(() => {
      onNavigate(Rutas('google'));
    }).catch((err) => {
      modal.style.display = 'block';

      mensajeModal.innerText = err.code;
    });
  });
  divRegisro.appendChild(form);
  divcontainer.appendChild(divRegisro);
  HomeDiv.appendChild(divcontainer);
  return HomeDiv;
};
