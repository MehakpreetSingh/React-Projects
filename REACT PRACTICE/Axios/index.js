function showOutput(res ) {
    var outdiv = document.getElementById("resu");
    for (let i = 0; i < res.results.length; i++) {
        console.log(res.results[i])
        outdiv.innerHTML += `
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${res.results[i].original_name || res.results[i].original_title || res.results[i].name || res.results[i].title}</h5>
                </a>
        
            </div>
        </div>
        `
    }
}

function showMovies() {
    axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=748d8f1491929887f482d9767de12ea8")
        .then(res => {showOutput(res.data) ; console.log(res.data);})
        .catch(err => console.log(err));
}

var getClick = document.getElementById("getmovies")
getClick.addEventListener('click', showMovies)