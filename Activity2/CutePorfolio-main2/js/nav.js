const func4 = () => {
    let nav = document.createElement("div")
    nav.innerHTML = `
    
    <ul>
                <h2><a href="../../index.html">Back</a></h2>
            </ul>
    <h2>Mizu</h2>
    <i class="fa-3x fa fa-solid fa-toggle-on" id="toggleButton"></i>
    
    
    `
    
    nav.className = "nav"


    return nav;
}

export { func4 };