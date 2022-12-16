/* eslint-disable import/no-unresolved */
import {
  signOut, viewUser,
} from '../lib/index.js';
import { Post } from './Post.js';
import { Share } from './PostShare.js';

export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'bienvenida';
  const headerMenu = document.createElement('header');
  headerMenu.className = 'header_menu';
  const contenedorMenu = document.createElement('div');
  contenedorMenu.className = 'contenedorMenu';
  headerMenu.appendChild(contenedorMenu);
  const headerPerfil = document.createElement('div');
  headerPerfil.className = 'headerPerfil';
  contenedorMenu.appendChild(headerPerfil);
  const nombrePerfil = document.createElement('div');
  nombrePerfil.className = 'nombrePerfil';
  const iconoMenu = document.createElement('label');
  iconoMenu.className = 'iconoMenu';
  headerPerfil.appendChild(iconoMenu);
  const checkMenu = document.createElement('button');
  checkMenu.className = 'checkmenu';
  const imgMenuH = document.createElement('img');
  imgMenuH.className = 'checkMenuIcon';
  imgMenuH.src = 'https://i.postimg.cc/8P2WmnYN/menu-removebg-previe<w.png';
  checkMenu.appendChild(imgMenuH);
  iconoMenu.appendChild(checkMenu);
  const imgMenu = document.createElement('span');
  imgMenu.className = 'imgMenu checkmenuImg';
  iconoMenu.appendChild(imgMenu);
  headerPerfil.appendChild(nombrePerfil);
  const nombreUs = document.createElement('h3');
  const fotoUs = document.createElement('img');
  fotoUs.className = 'foto';
  /* HEADER CON IMAGENES */

  const headerPagina = document.createElement('div');
  headerPagina.className = 'header_pagina';
  headerMenu.appendChild(headerPagina);
  const tituloPag = document.createElement('h1');
  tituloPag.innerText = 'LyMusic';
  const subtitle = document.createElement('h3');
  subtitle.innerText = 'Enjoy the MUSIC';
  headerPagina.appendChild(tituloPag);
  headerPagina.appendChild(subtitle);

  /* MENU LATERAL */
  const asideMenu = document.createElement('nav');
  headerMenu.appendChild(asideMenu);
  asideMenu.className = 'asideMenu';
  const listasMenu = document.createElement('ul');
  listasMenu.className = 'listasMenu';
  asideMenu.appendChild(listasMenu);
  const liInicio = document.createElement('li');
  const aInicio = document.createElement('a');
  aInicio.innerText = 'Inicio';
  liInicio.appendChild(aInicio);
  listasMenu.appendChild(liInicio);
  const liContacto = document.createElement('li');
  const aContacto = document.createElement('a');
  aContacto.innerText = 'Contacto';
  liContacto.appendChild(aContacto);
  listasMenu.appendChild(liContacto);
  const liHome = document.createElement('li');
  const aHome = document.createElement('a');
  liHome.appendChild(aHome);
  aHome.innerText = 'profile';
  listasMenu.appendChild(liHome);
  const salir = document.createElement('li');
  salir.className = 'salir';
  const aSalir = document.createElement('a');
  const iconoSalir = document.createElement('img');
  iconoSalir.src = 'https://i.postimg.cc/B62QsMgc/log-out-regular-24.png';
  iconoSalir.className = 'iconoSalir';
  salir.appendChild(aSalir);
  aSalir.appendChild(iconoSalir);
  listasMenu.appendChild(salir);
  imgMenuH.addEventListener('click', () => {
    if (asideMenu.style.display === 'block') {
      asideMenu.style.display = 'none';
      imgMenuH.src = 'https://i.postimg.cc/8P2WmnYN/menu-removebg-preview.png';
    } else {
      asideMenu.style.display = 'block';
      imgMenuH.src = 'https://i.postimg.cc/15rnD5Dc/close-removebg-preview.png';
    }
  });
  salir.addEventListener('click', (e) => {
    e.preventDefault();
    signOut().then(() => {
      onNavigate('/');
      window.location.reload();
    });
  });
  liHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/profile');
    asideMenu.style.display = 'none';
    imgMenuH.src = 'https://i.postimg.cc/8P2WmnYN/menu-removebg-preview.png';
  });
  liContacto.addEventListener('click', () => {
    onNavigate('/contacto');
    asideMenu.style.display = 'none';
    imgMenuH.src = 'https://i.postimg.cc/8P2WmnYN/menu-removebg-preview.png';
  });
  aInicio.addEventListener('click', () => {
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    asideMenu.style.display = 'none';
    imgMenuH.src = 'https://i.postimg.cc/8P2WmnYN/menu-removebg-preview.png';
  });
  viewUser((user) => {
    if (user !== null) {
      headerMenu.style.display = 'block';
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      nombreUs.innerText = displayName;
      fotoUs.src = photoURL;
      nombrePerfil.appendChild(nombreUs);
      nombrePerfil.appendChild(fotoUs);
    } else {
      headerMenu.style.display = 'none';
    }
  });

  HomeDiv.appendChild(headerMenu);
  HomeDiv.appendChild(Share());
  HomeDiv.appendChild(Post());
  return HomeDiv;
};
