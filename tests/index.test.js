const { expect } = require("chai")
const getAnimeQuotes = require("../solution")

describe("getCatPicture()", ()=>{
    it("should return an object with an anime key with the name of the anime", ()=>{
        const actual = getAnimeQuotes().then((data)=>data)
        const expected = {"anime":"Naruto",
        "Rock Lee": "If you believe in your dreams, I will prove to you, that you can achieve your dreams just by working hard."}
        expect(actual).to.eql(expected)
    })
    it("should return an object with a key with the name of the character and a quote as the value", ()=>{
        const actual = getAnimeQuotes().then((data)=>data)
        const expected = {"anime":"Naruto",
        "Rock Lee": "If you believe in your dreams, I will prove to you, that you can achieve your dreams just by working hard."}
        expect(actual).to.eql(expected)
    })
})