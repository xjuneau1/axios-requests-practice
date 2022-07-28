
const { default: axios } = require("axios");
//Write your code here!

const url = `https://animechan.vercel.app/api/random`

function getAnimeQuotes(){
    return axios.get(url).then(({data:{anime, character, quote}}) => {
        let obj = {anime: anime,}
        obj[character] = quote
        return obj

        //  -- OR --

        // let object = {}
        // object['anime'] = anime
        // object[character] = quote
        // return object
  
    })
}

getAnimeQuotes().then((data)=>console.log(data))

module.exports = getAnimeQuotes