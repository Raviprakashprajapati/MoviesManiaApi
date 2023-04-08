
let moviesname = document.getElementById("movies-name")
let searchbtn = document.getElementById("search-btn")
let result = document.getElementById("result")
let searchDiv = document.getElementById("div-list")


// fetch api



let getmoviefromlist = (textcontent) => {
    let moviesName = moviesname.value
    let text = textcontent 
    
    
    
    let url = `https://www.omdbapi.com/?t=${text}&apikey=7d71c432`



    // if input field empty

    if (moviesName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movies Name</h3>`
    }
    else {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                // if movie exits in database
                if (data.Response == 'True') {

                    result.innerHTML = `
        <div class="info" >
        <img src="${data.Poster}" alt="" class="poster">
            <div id="uiverse-btn" >
                <h2 style="margin-top:8px" >${data.Title}</h2>
                <div class="rating" >
                <img src="staricons.png" />
                <h4>${data.imdbRating}</h4>
                </div>
                <div class="details" >
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                </div>
                <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
                </div>
            </div>
        </div>

        

        <h3 style="text-align:center; color:yellow;" >BoxOffice:</h3>
        <p style="text-align:center; color:white;"   >${data.BoxOffice}</p>
     

        <h3 style="color:yellow"  >Plot -</h3>
        <p style="color:white"  >${data.Plot}</p>
        
        <h3 style="color:yellow" >Cast -</h3>
        <p style="color:white"  >${data.Actors}</p>

        
        <h3 style="color:yellow" >Writer -</h3>
        <p style="color:white"  >${data.Writer}</p>

        
        <h3 style="color:yellow" >Director -</h3>
        <p style="color:white"  >${data.Director}</p>

        
        <h3 style="color:yellow" >Awards -</h3>
        <p style="color:white"  >${data.Awards}</p>

            `;
                }

                // if movies doss not exits

                else {
                    result.innerHTML = `<h3 class="msg" >${data.Error}</h3>`
                }
            })

            // if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg" >Error Occured</h3>`
            })

    }

}



function changeEvent() {
    // console.log(moviesname.value)
    if (moviesname.value == "") {
        searchDiv.innerHTML = ""
        searchDiv.classList.add('div-display')


    }

    else {
        fetch(`https://www.omdbapi.com/?t=${moviesname.value}&apikey=7d71c432`)
            .then((value) => {
                return value.json()
            })
            .then((value) => {
                if (value.Title == undefined) {

                }

                else {

                    
                    
                    let p = document.createElement('div')
                    p.innerHTML += `<div class="flexc" > <p>${value.Title}</p> <img src=${value.Poster} height="60px" width="60px" alt=""> </div>`

                    searchDiv.classList.remove("div-display")
                    searchDiv.insertAdjacentElement('afterbegin', p)
                    p.addEventListener('click', () => {
                        
                        getmoviefromlist(p.textContent)
                        moviesname.value = value.Title
                        searchDiv.classList.add('div-display')
                        searchDiv.innerHTML = ""
                    })

                }
            })

    }

    document.addEventListener('click',(Event)=>{
       moviesname.value = ""
       searchDiv.classList.add('div-display')
    })

}

moviesname.addEventListener("keyup", changeEvent)







let getmovie = () => {
    let moviesName = moviesname.value
    // let text = textcontent 
    searchDiv.classList.add('div-display')
    
    
    
    let url = `https://www.omdbapi.com/?t=${moviesName}&apikey=7d71c432`



    // if input field empty

    if (moviesName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movies Name</h3>`
    }
    else {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                // if movie exits in database
                if (data.Response == 'True') {

                    result.innerHTML = `
        <div class="info" >
        <img src="${data.Poster}" alt="" class="poster">
            <div id="uiverse-btn" >
                <h2 style="margin-top:8px" >${data.Title}</h2>
                <div class="rating" >
                <img src="staricons.png" />
                <h4>${data.imdbRating}</h4>
                </div>
                <div class="details" >
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                </div>
                <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
                </div>
            </div>
        </div>

        

        <h3 style="text-align:center; color:yellow;" >BoxOffice:</h3>
        <p style="text-align:center; color:white;"   >${data.BoxOffice}</p>
     

        <h3 style="color:yellow"  >Plot -</h3>
        <p style="color:white"  >${data.Plot}</p>
        
        <h3 style="color:yellow" >Cast -</h3>
        <p style="color:white"  >${data.Actors}</p>

        
        <h3 style="color:yellow" >Writer -</h3>
        <p style="color:white"  >${data.Writer}</p>

        
        <h3 style="color:yellow" >Director -</h3>
        <p style="color:white"  >${data.Director}</p>

        
        <h3 style="color:yellow" >Awards -</h3>
        <p style="color:white"  >${data.Awards}</p>

            `;
                }

                // if movies doss not exits

                else {
                    result.innerHTML = `<h3 class="msg" >${data.Error}</h3>`
                }
            })

            // if error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg" >Error Occured</h3>`
            })

    }

}

searchbtn.addEventListener('click', getmovie)

window.addEventListener('load', getmovie)








