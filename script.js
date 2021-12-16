const url = 'https://pokeapi.co/api/v2/pokemon?limit=50';
const pokeBtn = document.querySelector('#pokeBtn');

pokeBtn.addEventListener('click', getPokeDetails);

async function getPokeDetails(){
    try{
        const getPokemons = await fetch(url)
            .then(data => data.json())
            .then(data => {
             data.results.map(pokeObj => {
               getPokeName(pokeObj);
            })
            return data;
         })
    }
    catch(err){
        console.log(err);
    }
    
}

const pokeContainer = document.querySelector('#poke-container');

async function getPokeName(pokeObj){
  try{
    const pokeData = await fetch(pokeObj.url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // <div class="card" style="width: 18rem;">
      const card = document.createElement('div');
      card.className = 'card';

      // <img src="..." class="card-img-top" alt="...">
      const pokeImage = data.sprites.front_shiny
      const img = document.createElement('img');
      img.className = "card-img-top";
      img.src = pokeImage;
      card.append(img);

      // <div class="card-body">
      const cardBody = document.createElement("div");
      cardBody.className ="card-body";

      // <h5 class="card-title">Card title</h5>
      const h5TagE1 = document.createElement("h3");
      h5TagE1.className = "card-title";
      h5TagE1.innerText = `Name : ${data.name}`;
      cardBody.append(h5TagE1);

      const h5TagE2 = document.createElement("h4");
      h5TagE2.className = "card-title";
      h5TagE2.innerText = `Abilities`;
      cardBody.append(h5TagE2);

      // <p class="card-text">
      const pTagE1 = document.createElement("p");
      pTagE1.className = "card-text";
      pTagE1.innerText =  data.abilities.map(abilityObj =>{
        // console.log(abilityObj);
        return abilityObj.ability.name;
      })

      cardBody.append(pTagE1);

      const h5TagE3 = document.createElement("h4");
      h5TagE3.className = "card-title";
      h5TagE3.innerText = `Moves`;
      cardBody.append(h5TagE3);

      const pTagE2 = document.createElement("p");
      pTagE2.className = "card-text";
      pTagE2.innerText =  data.moves.map(movesObj =>{
        //console.log(movesObj);
        return movesObj.move.name;
      })

      cardBody.append(pTagE2);
      
      const h4TagE4 = document.createElement("h5");
      h4TagE4.className = "card-title";
      h4TagE4.innerText = `Weight : ${data.weight}`;
      cardBody.append(h4TagE4);

      card.append(cardBody);
      pokeContainer.append(card);

    })
  }catch(err){
    console.log(err);
  }
   
}



  
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

