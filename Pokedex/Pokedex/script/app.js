const PokemonID = document.getElementById("pokemon")
const Descricao = document.getElementById("desc")
const PokeImagem = document.getElementById("imagem")
let lado_img = true

document.getElementById("btn").addEventListener('click',()=>{
    BuscaPokemon(PokemonID.value)
})
const BuscaPokemon = (id)=>{
   
    const url = 'https://pokeapi.co/api/v2/pokemon/'+id+''
    fetch(url).then(response => response.json())
    .then(pokemon =>{

        console.log(pokemon)
        
        PokeImagem.style.backgroundImage ='url('+pokemon.sprites.front_default+')';
        Descricao.innerHTML = ["<h2>"+pokemon.name+"</h2>"
        +"<ul>"
        +"<li>Peso: "+pokemon.weight+"</li>"
        +"<li> Experencia Base: "+pokemon.base_experience+"</li>"
        ]
        PokeImagem.addEventListener('mouseover',()=>{
            PokeImagem.style.backgroundImage ='url('+pokemon.sprites.back_default+')';
        })
        PokeImagem.addEventListener('mouseleave',()=>{
            PokeImagem.style.backgroundImage ='url('+pokemon.sprites.front_default+')';
        })
    
    })
}
