/* eslint-disable import/no-unresolved */
import {
  deleteTasks,
} from '../lib/index.js';

const deleteTaskHandler = (id) => {
  deleteTasks(id);
};
export const Delete = () => {
  const poster = document.querySelector('.cajapost');
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
  modalHeader.className = 'modal_header_begin flex_modal_header';
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
  modalBody.className = 'modal_body_begin';
  contenidoModal.appendChild(modalBody);
  const mensajeModal = document.createElement('p');
  mensajeModal.innerText = 'Are you sure you want to delete the publication?';
  mensajeModal.className = 'modal_mensaje_begin';
  const botonModal = document.createElement('button');
  botonModal.className = 'eliminar_begin';
  botonModal.textContent = 'Delete';
  const botonCancelar = document.createElement('button');
  botonCancelar.textContent = 'Cancel';
  botonCancelar.className = 'cancelar_begin';
  modalBody.appendChild(mensajeModal);
  modalBody.appendChild(botonCancelar);
  modalBody.appendChild(botonModal);

  botonCancelar.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  botonClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  const deletebtn = poster.querySelectorAll('.delete_img');
  // console.log(deletebtn);
  deletebtn.forEach((btn) => {
    btn.addEventListener('mouseup', (e) => {
      modal.style.display = 'block';
      botonModal.addEventListener('click', () => {
        deleteTaskHandler(e.target.id);
        modal.style.display = 'none';
      });
    });
  });
  return modal;
};
