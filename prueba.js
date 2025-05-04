const fs = require('fs').promises; // Usamos versión promesa

// Leer archivo JSON
let Datos = [];
async function cargandoDatos() {
    try{
        const data = await fs.readFile('anime.json', 'utf8');
        const datos =  JSON.parse(data);
        Datos.push(...datos);
        imprimirAinmes()
    }

    catch (error) {
    console.error('Error leyendo el archivo:', error);
}
        
        
      
    
}




function imprimirAinmes (){
    Datos.forEach(Element =>{console.log(Element.titulo)})
}


const anime = {
    "titulo": "Solo leveling",
    "genero": ["Acción", "Aventura", "Fantasia"],
    "episodios": 40,
    "en_emision": true
}

// Guardar en archivo
async function agregarAnime() {
    try {
        // Leer el archivo existente
        const data = await fs.readFile('anime.json', 'utf8');
        
        // Parsear el archivo JSON para convertirlo en un objeto
        const animes = JSON.parse(data);
        
        // Agregar el nuevo anime al arreglo
        animes.push(anime);
        
        // Escribir de nuevo el archivo con los animes actualizados
        await fs.writeFile('anime.json', JSON.stringify(animes, null, 2));
        console.log('Nuevo anime agregado con éxito');
    } catch (err) {
        console.error('Error al agregar el anime:', err);
    }
}

agregarAnime()
cargandoDatos()
  