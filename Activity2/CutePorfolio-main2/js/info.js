const func1 = ( data1, data2, data3) => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = `


    <div class="w1">
    <h1>${data1}</h1>
    <span>${data2}</span>
    <button class="butts">${data3}</button>
    </div>`
    
    leftDiv.className = "ClassL"


    return leftDiv;
}

export { func1 };