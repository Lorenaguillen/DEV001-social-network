export const NuestroEquipo = (onNavigate) => {
  const HomeDiv = document.createElement('section');
  HomeDiv.className = 'nosotras';
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegresoProfile';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = '«';
  buttonHome.classList = 'btn_home_contacto';
  divBoton.appendChild(buttonHome);
  buttonHome.addEventListener('click', () => {
    onNavigate('/Begin');
  });

  HomeDiv.innerHTML = `<section class='team contenedor' id='equipo'>
    <h3>Nuestro equipo</h3> 
    <p class='after'>Conoce personas geniales</p>
    <div class='card'>
        <div class='content-card'>
            <div class='people'>
            <img src='https://i.postimg.cc/MT5vk9tM/Adrianafoto.png'/>
            </div>
            <div class='texto-team'>
                <h4>Adriana Araujo</h4>
                <div class='social-media'>
                  <a href='https://github.com/ARAUJOVILLASMIL' target='_blank' class='social-media-icon'>
                      <i class='bx bxl-github'></i>
                  </a>
                  <a href='https://www.linkedin.com/in/araujo-adriana/'/' target='_blank'
                      class='social-media-icon'>
                      <i class='bx bxl-linkedin'></i>
                  </a>
                  <a href='mailto:araujovillasmil@gmail.com' class='social-media-icon'>
                      <i class='bx bx-mail-send'></i>
                  </a>
              </div>
            </div>
        </div>
        <div class='content-card'>
            <div class='people'>
            <img src='https://i.postimg.cc/gcKB53WC/Camilafoto.png'/>
            </div>
           <div class='texto-team'>
                <h4>Camila Leal</h4>
                <div class='social-media'>
                <a href='https://github.com/khammylv' target='_blank' class='social-media-icon'>
                    <i class='bx bxl-github'></i>
                </a>
                <a href='https://www.linkedin.com/in/maria-camila-leal-vasquez'/' target='_blank'
                    class='social-media-icon'>
                    <i class='bx bxl-linkedin'></i>
                </a>
                <a href='mailto:khammylv@gmail.com' class='social-media-icon'>
                    <i class='bx bx-mail-send'></i>
                </a>
            </div>
             </div>
        </div>
        <div class='content-card'>
             <div class='people'>
                 <img src='https://i.postimg.cc/ydHvp8r6/lorenafoto.png'/>
             </div>
             <div class='texto-team'>
                 <h4>Lorena Guillen</h4>
                 <div class='social-media'>
                 <a href='https://github.com/Lorenaguillen' target='_blank' class='social-media-icon'>
                     <i class='bx bxl-github'></i>
                 </a>
                 <a href='https://www.linkedin.com/in/lorena-guillen-demichelli-03a8618b/
                 ' target='_blank'
                     class='social-media-icon'>
                     <i class='bx bxl-linkedin'></i>
                 </a>
                 <a href='mailto:guillen.lorena88@gmail.com' class='social-media-icon'>
                     <i class='bx bx-mail-send'></i>
                 </a>
             </div>
            </div>
        </div>
    </div>
  </section>`;
  HomeDiv.appendChild(divBoton);
  // HomeDiv.appendChild(elemento);
  return HomeDiv;
};
