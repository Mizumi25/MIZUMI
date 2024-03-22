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
    
  <div class = "card">
    <img src="${images} " alt="">
    <div class="card-content">
      <h2>
        Card Heading
      </h2>
      <p>
        ${paragraph} 
      </p>
      <a href="#" class="button">
        <span class="material-symbols-outlined">
          Click ME
        </span>
      </a>
    </div>
  </div>
    `
    return div
}
export { cards, cardsTitle }