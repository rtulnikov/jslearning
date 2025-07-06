const shortenText = (ukorosheniaTexta) =>{
    let proba = ukorosheniaTexta.slice(0, 100) + '...'
    return proba; 
}

console.log(shortenText(`Димаааааааааааааааааааааааааааааааааа ануууууууууууууууу идииииииииииииииии сюдаааааааааааааааааааааа`));

let u = `Димаааааааааааааааааааааааааааааааааа ануууууууууууууууу идииииииииииииииии сюдааааааааааааааааааааа`
console.log(u.length)
