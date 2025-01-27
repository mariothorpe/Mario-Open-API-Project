const API_KEY="cfddce6b581600eb5347babeaea64b88"
fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}&limit=100`)
    .then(response => response.json())
    .then((characters) => {
        console.log(characters);
    })
    .catch((error) => {
        console.log(error)
    });