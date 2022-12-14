/* eslint-disable import/no-unresolved */
import { formulariologin, formularioGoogle } from '../lib/index.js';
import { Rutas } from '../lib/rutas.js';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'divPadre2';

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
  modalHeader.className = 'modal_header_login flex_modal_header';
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
  modalBody.className = 'modal_body_login';
  contenidoModal.appendChild(modalBody);
  const mensajeModal = document.createElement('p');
  mensajeModal.className = 'modal_mensaje_login';
  modalBody.appendChild(mensajeModal);

  HomeDiv.appendChild(modal);

  // div container
  const divcontainer = document.createElement('div');
  divcontainer.className = 'container_login';
  // cont div registro
  const divLogin = document.createElement('div');
  divLogin.className = 'con_form_login';
  // imagen de login
  const imgLogin = document.createElement('div');
  imgLogin.className = 'imgLogin';
  divcontainer.appendChild(imgLogin);

  // boton retorno
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegreso2';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Back to home';
  buttonHome.className = 'btn_home_login';
  buttonHome.textContent = '«';
  divBoton.appendChild(buttonHome);
  divcontainer.appendChild(divBoton);

  // div titulo y textos
  const divBienvenida2 = document.createElement('div');
  const mensajeBienvenida2 = document.createElement('h2');
  mensajeBienvenida2.textContent = 'Welcome';
  divBienvenida2.appendChild(mensajeBienvenida2);
  divBienvenida2.className = 'mensajeBienvenida2';
  divcontainer.appendChild(divBienvenida2);

  // imagen tamaño pc
  const divImgContainer = document.createElement('div');
  divImgContainer.className = 'img_container_login';
  divLogin.appendChild(divImgContainer);

  // formulario
  const form = document.createElement('form');
  form.className = 'form_login';
  // div formulario
  const divForm = document.createElement('div');
  divForm.className = 'formulariologin';
  form.appendChild(divForm);
  // titulo formulario
  const tituloForm = document.createElement('h2');
  tituloForm.textContent = 'Sign In';
  divForm.appendChild(tituloForm);
  // grupos de formulario
  const grupo1 = document.createElement('div');
  grupo1.className = 'grupos2';
  const email = document.createElement('input');
  email.type = 'email';
  email.className = 'emailLogin';
  const barra1L = document.createElement('span');
  barra1L.className = 'barraLogin';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  labelEmail.className = 'labelEmailLogin';
  divForm.appendChild(grupo1);
  grupo1.appendChild(email);
  grupo1.appendChild(barra1L);
  grupo1.appendChild(labelEmail);

  const grupo2 = document.createElement('div');
  grupo2.className = 'grupos2';
  const pass = document.createElement('input');
  pass.type = 'password';
  pass.className = 'passLogin';
  const barra2L = document.createElement('span');
  barra2L.className = 'barraLogin';
  const spanPass = document.createElement('span');
  spanPass.textContent = '👀';
  spanPass.className = 'ojito';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  labelPass.className = 'labelPassLogin';
  divForm.appendChild(grupo2);
  grupo2.appendChild(pass);
  grupo2.appendChild(barra2L);
  grupo2.appendChild(spanPass);
  grupo2.appendChild(labelPass);

  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Login';
  buttonSubmit.classList = 'btn_form_login';
  buttonSubmit.type = 'submit';
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  imgGoogle.className = 'imgGoogleL';
  imgGoogle.src = 'https://i.postimg.cc/Vv17HkvB/google-1.png';
  buttonGoogle.appendChild(imgGoogle);
  buttonGoogle.classList = 'btn_googleL';
  divForm.appendChild(buttonSubmit);
  divForm.appendChild(buttonGoogle);

  botonClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  spanPass.addEventListener('click', () => {
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formulariologin(email.value, pass.value).then(() => {
      onNavigate(Rutas('login'));
      form.reset();
      window.location.reload();
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

  buttonHome.addEventListener('click', () => onNavigate('/'));
  divLogin.appendChild(form);
  divcontainer.appendChild(divLogin);
  HomeDiv.appendChild(divcontainer);
  return HomeDiv;
};
