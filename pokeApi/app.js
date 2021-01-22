const getSearchText = () =>{
    const submit = document.getElementById('submit')
    submit.addEventListener('click', (event)=>{
        event.preventDefault();
        
        const searchText = document.getElementById('pokemonName')
        if(searchText.value){
            testApi(searchText.value)
        }else{
            alert('Por favor dijite el nombre del pokemon')
        }
    })
}

getSearchText();

const testApi = async (searchText) =>{
    let url = `https://pokeapi.co/api/v2/pokemon/${searchText}/`
    try{
        const result = await fetch(url, {method:'GET'})
        const data = await result.json();
        console.log(data)

        drawPokemon(data);
    }catch (error){
        console.log(error+ ':  NO se encontro este pokemon')
    }
    
}

testApi();

const drawPokemon = (data) =>{
    const divPokemon = document.getElementById('containerP')
    const divPokemonD = document.getElementById('containerD')
    const divPokemonC = document.getElementById('containerC')
    const divTitle = document.getElementById('nameTitle')

    divPokemon.innerHTML = '';
    divPokemonD.innerHTML = '';
    divPokemonC.innerHTML = '';
    divTitle.innerHTML = '';

    const imgPokemon = document.createElement('img')
    imgPokemon.src = data.sprites.front_default
    imgPokemon.alt = data.name;

    const imgPokemon2 = document.createElement('img')
    imgPokemon2.src = data.sprites.front_shiny
    imgPokemon2.alt = data.name

    const imgPokemon3 = document.createElement('img')
    imgPokemon3.src = data.sprites.back_default
    imgPokemon3.alt = data.name

    const namePokemon = document.createElement('h4')
    namePokemon.textContent = data.name

    const pokemonImg = divPokemon.appendChild(imgPokemon);
    const pokemonImg2 = divPokemonD.appendChild(imgPokemon2);
    const pokemonImg3 = divPokemonC.appendChild(imgPokemon3);
    const Title = divTitle.appendChild(namePokemon)
    
    const dataArray = [];

    for(let key in data){
        dataArray.push(key+' : '+data[key])
    }
    console.log(dataArray)
}