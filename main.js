/* eslint-disable import/no-unresolved */
import { Home } from './component/Home.js';
import { Register } from './component/Register.js';
import { Login } from './component/Login.js';
import { Begin } from './component/Begin.js';
import { Profile } from './component/Profile.js';
import { NuestroEquipo } from './component/Nosotras.js';

const rootDiv = document.getElementById('root');

let routes = {};
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]);
};
routes = {
  '/': Home(onNavigate),
  '/register': Register(onNavigate),
  '/login': Login(onNavigate),
  '/Begin': Begin(onNavigate),
  '/profile': Profile(onNavigate),
  '/contacto': NuestroEquipo(onNavigate),

};

const component = () => routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
rootDiv.appendChild(component());
