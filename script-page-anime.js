  //10&search=${termino}
  let dataAnime = []
  function buscarAnime() {
    const termino = document.getElementById('busqueda').value;
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=${termino}&sortBy=ranking&sortOrder=asc`;

    
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'anime-db.p.rapidapi.com',
        'x-rapidapi-key': '0767f8da85mshc6b24990a4e5667p1fb579jsnc689ac9494f6'
      }
    })
      .then(response => response.json())
      .then(data=>{
      resultado =data.data
      // mostrarResultados(resultado)
      almacenAnime(resultado)
      console.log(dataAnime)
      filtrar(dataAnime)
      mostrarResultados(dataAnime)
      selectAnime(dataAnime)
      
      
      })
      
      .catch(error => console.error('Error al buscar:', error));
  }


function almacenAnime(resultado) {
resultado.forEach(anime =>{
dataAnime.push(anime)
})
}




  function filtrar(dataAnime) {
  const filtrados = dataAnime.filter(anime => anime.title.toLowerCase().startsWith("n"));
  console.log("Filtrados por 'n':", filtrados);
  return filtrados
  
  }



 
  const homePage = document.querySelector("h1")
  const lista = document.getElementById('resultados');

  homePage.addEventListener("click",()=>{buscarAnime()})

  function mostrarResultados(animes) {
    lista.innerHTML = "";
    animes.forEach(anime => {

      const div = document.createElement('div');
      div.className = "cajaAnime"
      div.innerHTML = `<img class="animes" src="${anime.image}" data-titulo="${anime.title}">
<div class="tituloAnime" >${anime.title} </div>
<div>ranking: ${anime.ranking}</div>
<div class="generos">${anime.genres}</div>`;

      lista.appendChild(div);
      

    });
  }

// funcion para selecionar anime 
function selectAnime(dataAnime){
document.querySelectorAll(".animes").forEach(element =>{
  element.addEventListener("click", ()=>{
    const Nombre = element.dataset.titulo;
    console.log(Nombre)
    const filtrar = dataAnime.filter(anime => anime.title===Nombre)
    console.log(filtrar)

    if (filtrar.length > 0) {
      const animeSeleccionado = filtrar[0];
      lista.innerHTML = `
        <div class="animeDetallado">
          <img class="animeF" src="${animeSeleccionado.image}">
        <div id="infBasica">
        <span class="tituloInf"> ${animeSeleccionado.title} <br><br>
        Ranking: ${animeSeleccionado.ranking}<br><br>
        Genero: ${animeSeleccionado.genres}<br><br>
        Status: ${animeSeleccionado.status}
        </div>
        <div class="infApliada">
        <p>${animeSeleccionado.synopsis}</p>
        </div>

        </div>
      `;
    } else {
      lista.innerHTML = `<p>No se encontró el anime seleccionado.</p>`;
    }

  })
})
}


 
  buscarAnime()
  filtrar()
  
//insertBefore: es una funcion que funciona como appendChild 
// pero en vez de agregarlo detras del ultimo nodo puedes insertarlo en un nodo especifico