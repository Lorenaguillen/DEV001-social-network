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
            <img src='../assets/img/centro.png'/>
            </div>
            <div class='texto-team'>
                <h4>cami</h4>
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
            <img src='../assets/img/centro.png'/>
            </div>
           <div class='texto-team'>
                <h4>camila</h4>
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
                 <img src='../assets/img/centro.png'/>
             </div>
             <div class='texto-team'>
                 <h4>camm</h4>
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
    </div>
  </section>`;
  HomeDiv.appendChild(divBoton);
  // HomeDiv.appendChild(elemento);
  return HomeDiv;
};
