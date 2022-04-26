// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
const myFunction = async () =>{
    try{
        const q = document.querySelector("#search").value;
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=818ec820de5649575955663bd77e57cb&language=en-US&include_adult=false&query=${q}`)
        const data = await res.json();
        

        console.log(data.results);
        return data.results;
    }catch(err){
        console.log(err)
    }
}

function append(data){
    let movies = document.querySelector("#movies");
    movies.innerHTML = null;

    data.forEach(ele => {
        let div = document.createElement("div");
        div.setAttribute("class","movie_div")

        let img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + ele.poster_path  //  ele.poster_path;

        let name = document.createElement("p");
        name.innerText = ele.title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now"

        btn.addEventListener("click", function(){
            addMovies(ele)
            console.log(ele)
        })

        div.append(img, name, btn);
        movies.append(div)
    })

    function addMovies(ele){
        console.log(ele);
        localStorage.setItem("movie" , JSON.stringify(ele))
        window.location.href ="checkout.html"
    }
}
async function main() {

    let data = await myFunction();
    if (data == undefined) return false;

    append(data)
}

function debounce(func, delay) {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
        func();

    }, delay);
}

let pay = Number(JSON.parse(localStorage.getItem("amount")));
document.querySelector("#wallet").innerText = pay