const func1 = ( data1, data2, data3) => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = `


    <div class="w1">
    <h1>${data1}</h1>
    <p>${data2}</p>
    <button>${data3}</button>
    </div>`
    
    leftDiv.className = "ClassL"


    return leftDiv;
}

export { func1 };