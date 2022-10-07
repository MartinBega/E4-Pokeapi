const input = document.querySelector('.input')
const boton = document.querySelector('.btn')
const pokemon = document.querySelector('.pokemon')



const fetchPokemon = async(url) => {

    const baseUrl = url
    try {

        const response = await fetch(baseUrl);
        const data = await response.json();
        renderPokemon(data);
        
    } catch (error){

        
        renderError()
        console.log(error)
    }

}


const renderPokemon = (data) => {

    document.querySelector('.pokemon').style.visibility = 'visible';
    input.value= "";
    const {name, sprites, height, weight, types } = data;


    return pokemon.innerHTML = ` 
    <div class="poke"> 
        <img  src="${sprites.other.home.front_default}"/>
        <h2>${name.toUpperCase()}</h2>
        <div class="tipo-poke">
            ${types
              .map((tipo) => {
                return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
              })
              .join("")}
        </div>
        <p class="height">Height: ${height / 10}m</p>
        <p class="weight">Weight: ${weight / 10}Kg</p>
    </div>
  `;   
  
}

const renderError = () => {
    
    document.querySelector('.pokemon').style.visibility = 'hidden';

    if(input.value==""){
        input.value= "";
        alert('No ha ingresado ningun numero')
    }else{
        input.value= "";
        alert('No se ha encontrado ese pokemon')
    }
}

boton.addEventListener('click', e =>{

    e.preventDefault();
    const id = input.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    

    fetchPokemon(url);


    
})





