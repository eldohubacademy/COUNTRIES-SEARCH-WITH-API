const url = 'https://moviedatabase8.p.rapidapi.com/Search/365';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '04b9e190a9msh47d09a5fe559570p1c9d81jsn3fa51f8478e1',
		'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
	}
};

async function getMovie() {
    

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    showMovies(result)

} catch (error) {
	console.error(error);
}

}
getMovie()


function showMovies(arr){
    let div=  document.getElementById("movies")
    arr.forEach(movie=>{
        const movieDiv = document.createElement("div")
        movieDiv.innerHTML = `
                <img src="${movie}" >
        `
    })
}