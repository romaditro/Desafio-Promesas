//Promesas : async/await.
//La palabra ASYNC ante una función significa solamente una cosa: que la función siempre devolverá una promesa.
// AWAIT: funciona solamente dentro de funciones async
// await hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

//https://es.stackoverflow.com/questions/255432/la-consola-muestra-promise-pending-al-momento-de-usar-async-await-en-node
//https://es.stackoverflow.com/questions/175773/c%C3%B3mo-filtrar-un-objeto-json-complejo-usando-filter


const funcionGeneral = async () => {
    try {       
        const urlAPI = "https://jsonplaceholder.typicode.com/photos";
        const respuesta = await fetch(urlAPI)
            
        var response = await respuesta.json();
        
        //response.filter(obtenerProductoPorId);
        //console.log(response.filter(obtenerProductoPorId()));
        
        let arrayFilter = response.filter(e => e.albumId == "1")
        
        
        arrayFilter.forEach(function(album) {
            if(album.id <= 20)
            {
                console.log(album);
            } 
        });
        
    } catch (err) {
        console.error(err)
    }
}


console.log('Antes de la función....\n');


setTimeout(function(){ 
    funcionGeneral();
    console.log("Información enviada");
 }, 2000);


console.log('\nDespues de la función.');