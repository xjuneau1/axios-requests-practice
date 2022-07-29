const getAnimeQuotes = require("./src/solution")

const button = document.getElementById("btn")
const quote = document.getElementById("quote-text")


button.addEventListener("click", async function renderText(){
    const data  = await getAnimeQuotes().then((data)=>data)
    quote.innerHTML = `
    <div>
        <p>The name of the anime your quote is from is called: <em>"${data.anime}"</em></p>
        <p>The name of the character who said this quote is: <em>"${Object.keys(data)[1]}"</em></p>
        <p>The quote is: <em>"${Object.values(data)[1]}"</em></p>
    </div>
    
    `
})
