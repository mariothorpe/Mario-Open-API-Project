const API_KEY="cfddce6b581600eb5347babeaea64b88"

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
            const card = document.getElementById("characterCard");
            if (card.style.display === "none") {
                card.style.display = '';
            }

            const name = document.getElementById("characterName");
            name.textContent = "";
            name.textContent = character.name;

            const portrait = document.getElementById("characterPortrait");
            portrait.src = "";
            const imgSrcPath = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`;
            portrait.src = imgSrcPath;
    
            const description = document.getElementById('characterDescription');
            description.textContent = character.description;

            const comics = document.getElementById('characterComics');
            comics.innerHTML = "";
            const hasComics = character.comics.available > 0;
            if (hasComics) {
                comics.innerHTML = character.comics.items[0].name;
            }
        });
    }
    renderData();



    
   
    
