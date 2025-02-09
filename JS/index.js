const API_KEY="cfddce6b581600eb5347babeaea64b88"
//fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}&offset=1563&limit=1`)
    //.then(response => response.json())
    //.then((characters) => {
        //console.log(characters);
    //})
    //.catch((error) => {
        //console.log(error)
    //});

//fetch(`http://gateway.marvel.com/v1/public/characters/1017100?apikey=${API_KEY}`)
    //.then(response => response.json())
    //.then((character) => {
        //console.log(character);
    //})
    //.catch((error) => {
        //console.log(error)
    //});

//fetch(`http://gateway.marvel.com/v1/public/creators?apikey=${API_KEY}&limit=100`)
    //.then(response => response.json())
    //.then((creators) => {
        //console.log(creators);
    //})
    //.catch((error) => {
        //console.log(error)
    //});

    const bodyElement = document.getElementsByTagName("body");
    async function renderData() {
        const container = document.querySelector('.container');
        const randomChar = Math.trunc(Math.random() * 1564);
        const data = await fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}&offset=${randomChar}&limit=1`);
        const characterData = await data.json();
                console.log(characterData);
    
        if (!data) {
            return;
        }
    
        characterData.data.results.forEach(character => {
            
            // const card = document.createElement('div');
            // card.classList.add('card');
            const card = document.getElementById("characterCard");
            if (card.style.display === "none") {
                card.style.display = '';
            }
            
            // const name = document.createElement('h2');
            const name = document.getElementById("characterName");
            name.textContent = "";
            name.textContent = character.name;
            
            // const portrait = document.createElement('img');
            const portrait = document.getElementById("characterPortrait");
            portrait.src = "";
            const imgSrcPath = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`;
            portrait.src = imgSrcPath;

            // const description = document.createElement('p');
            const description = document.getElementById("characterDescription");
            description.textContent = character.description;
    
            // card.appendChild(name);
            // card.appendChild(portrait);
            // card.appendChild(description);
            const comics = document.getElementById('characterComics');
            comics.innerHTML = "";
            const hasComics = character.comics.available > 0;
            if (hasComics) {
                comics.innerHTML = character.comics.items[0].name;
            }
        });

    }
    renderData();



    
   
    
