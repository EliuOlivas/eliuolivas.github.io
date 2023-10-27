window.onload =()=>{
    var arreglo = []
    var cont = 0
    var url = 'https://pokeapi.co/api/v2/';
    fetch(url+'pokemon?limit=12')
  .then(response=>response.json())
  .then(data=>{
    let lista = document.querySelector('#lista')
     lista.innerHTML=""
      data.results.forEach(element => {
        fetch(element.url)
        .then(res =>res.json())
        .then(dataPokemon=>{
          console.log(dataPokemon)
        lista.innerHTML = lista.innerHTML + `
        <div class="col-3 p-4">
        <div class="card" style="width: 18rem;">
            <img src="${dataPokemon.sprites.other.home.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">es un Pokémon singular de tipo psíquico introducido en la primera generación. Es el ancestro de todos los Pokémon</p>
              <a data-id="${cont}" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#" class="btnVer btn-dark w-100">Elegir</a>
            </div>
          </div>
    </div>`

    let a =document.querySelectorAll(".btnVer")
    a.forEach(e=>e.addEventListener('click', mostrar))
    arreglo.push(dataPokemon)
    cont ++

        })

       
      });
      console.log(data)
  })

    let mostrar =(evt)=>{
        let index = evt.target.dataset.id
        
        let name = document.querySelector("#exampleModalLabel")
        let tipo = document.querySelector("#tipo")
        let habilidades = document.querySelector("#habilidades")
        name.innerHTML = arreglo[index].name
        tipo.innerHTML = arreglo[index].types[0].type.name
        var h="Habilidades: "
        arreglo[index].abilities.forEach(el => h+=el.ability.name + ", ")
        habilidades.innerHTML.h
    }
}// llave on load