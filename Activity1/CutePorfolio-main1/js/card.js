let cardsTitle = (proj) =>{
    let div = document.createElement('div')
    div.id = 'tits'
    div.innerHTML=`<h1>${proj}</h1>`

    return div
}
let cards = (images, paragraph) =>{
    let div = document.createElement('div')
    div.id='desu'
    div.innerHTML=`
    <div class="jazzi">
        <img class="cardi" src="${images}" alt="">
        <p>${paragraph}</p>
    </div>
    `
    return div
}
export { cards, cardsTitle }