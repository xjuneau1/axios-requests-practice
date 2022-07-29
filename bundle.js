(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const getAnimeQuotes = require("./src/solution")

const button = document.getElementById("btn")
const quote = document.getElementById("quote-text")


button.addEventListener("click", async function renderText(){
    const data  = await getAnimeQuotes().then((data)=>{return data})
    quote.innerHTML = `
    <div>
        <p>The name of the anime your quote is from is called: <em>"${data.anime}"</em></p>
        <p>The name of the character who said this quote is: <em>"${Object.keys(data)[1]}"</em></p>
        <p>The quote is: <em>"${Object.values(data)[1]}"</em></p>
    </div>
    
    `
})

},{"./src/solution":2}],2:[function(require,module,exports){
//Write your code here!


function getAnimeQuotes(){
    
}

module.exports = getAnimeQuotes
},{}]},{},[1]);
