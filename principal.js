// const mostrarPersonajes = (resultados) => {
//     console.log(data.resultados);
//     const results = data.results;
//     const section = document.querySelector('.section');
//     let html = '';
//     results.forEach(element => {
//         html += `
//         <div class="card">
//         <img src="${element.image}" alt="${element.name}">
//         <h2>${element.name}</h2>
//         <p>${element.species}</p>
//         </div>
//         `
//     });
//     section.innerHTML = html;
// }
// url referencia a la Api 

//alert('sorido0')

const url = 'https://rickandmortyapi.com/api/character'
const url2 = 'https://hp-api.onrender.com/api/characters'


async function cargarData() {

   

    const respuesta = await fetch(url2);
    const data = await respuesta.json()
    return data
}

const  data  = cargarData()
setTimeout( async() => {
    console.log( await data)
}, 2000);

async function mostrarDatos(resp) {

    const data = await resp;

    const personajesInfo = await data.filter(
        (personahes) => {
            return personahes.image != "";
        }
    )
    
    const section = document.querySelector('.section');
    let html = '';
    personajesInfo.forEach(element => {
        html += `
            <div class="card">
            <img src=${element.image} alt="${element.name}">
            <h2>${element.name}</h2>
            <p>Nickname: ${element.alternate_names}</p>
            <p>Birthday: ${element.dateOfBirth}</p>
            <p>Actor/iz: ${element.actor}</p>
            <p>Species: ${element.species}</p>
            <p>House: ${element.house}</p>
            <p>Patronus: ${element.patronus}</p>
            <p>ancestry: ${element.ancestry}</p>
            </div>
            `
    }
    );
    console.log(section)
    section.innerHTML = html;

//     <div class="card" style="width: 18rem;">
//   <div class="card-header">
//     Featured
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
// </div>
 

}

mostrarDatos(data);
// const mostrarPersonajes = (resultados) => { }


