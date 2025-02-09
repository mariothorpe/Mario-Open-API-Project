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


    async function renderData() {
        const container = document.querySelector('.container');
        const data = await fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}&offset=1563&limit=1`);
        const characterData = await data.json();
                console.log(characterData);
    
        if (!data) {
            return;
        }
    
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
    
            const title = document.createElement('h2');
            title.textContent = item.title;
    
            const body = document.createElement('p');
            body.textContent = item.body;
    
            card.appendChild(title);
            card.appendChild(body);
            container.appendChild(card);
        });
    }
    renderData();



    
   
    
