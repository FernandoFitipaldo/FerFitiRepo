/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("Ingresa tu nombre");
  let nacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
  datosPersona.edad = (new Date().getFullYear()) - nacimiento;
  datosPersona.ciudad = prompt("Ingresa tu ciudad");
  datosPersona.interesPorJs = confirm("Te interesa Javascript?");
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  document.getElementById('nombre').innerText = `${datosPersona.nombre}`;
  document.getElementById('edad').innerText =`${datosPersona.edad}`;
  document.getElementById('ciudad').innerText = `${datosPersona.ciudad}`;
  document.getElementById('javascript').innerText = `${datosPersona.interesPorJs == true ? 'Sí' : ' No'}`;
 
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const fila = document.getElementById('fila');
  if(fila.innerText == '') {
    listado.forEach(materia => {
      fila.innerHTML += 
      `<div class="caja">
        <img src="${materia.imgUrl}" alt="imagen de ${materia.lenguajes}">
        <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
        <p class="bimestre">Bimestre: ${materia.bimestre}</p>
      </div>`
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  const color = document.querySelector('#color');
  const sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');
  color.classList.toggle('dark');
}
  
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const body = document.querySelector('body');
const sobreMi = document.getElementById('sobre-mi');

function mostrarSobreMi() {
  sobreMi.classList.remove('oculto');
  alternarColorTema();
}

body.addEventListener('keydown', (event) => {
  if (event.code === 'KeyF') {
    mostrarSobreMi();
  }
});