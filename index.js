// URI: https://restcountries.com/v3.1/name/kenya

// using the fetch method in js --- fetch is assynchronous --  promises

 async function getCountryData(country){    
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`) // htttp resp
    const ourData = await response.json() 
   console.log(ourData);
   buildUI(ourData)
 }


 const form = document.querySelector("form")

 form.addEventListener("submit", (e)=>{
    e.preventDefault() // stop the from from initiating a http request
    const search = document.getElementById("search-word").value
    getCountryData(search)
 })
const countryDiv = document.querySelector(".country")
 function buildUI(country){
    if(country.status == 404){
        countryDiv.innerHTML = `<p style="color:orangered" > Country Not Found </p>`
    }else{
        country = country[0]
        countryDiv.innerHTML = `
                <img src = "${country.flags.png}" alt="${country.flags.alt}" width="400px" >
                <h2> ${country.name.official} <h2>
        `
    }
 }