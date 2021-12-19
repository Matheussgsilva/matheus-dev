var buttonStudies = document.getElementById("portfolio-studies")
var buttonFreela = document.getElementById("portfolio-freela")
var portfolioBox = document.getElementsByClassName("portfolio-box-images")[0]

buttonFreela.addEventListener("click", function freela() {
    buttonFreela.classList.add("button-portfolio-active")
    buttonStudies.classList.remove("button-portfolio-active")
    portfolioBox.innerHTML = ""
    portfolioBox.insertAdjacentHTML("afterbegin",/*html*/ `
    
        <span class="subtitle" id="portfolio-subtitle">Em Breve</span>
    
    `)
})

buttonStudies.addEventListener("click", function study() {
    buttonFreela.classList.remove("button-portfolio-active")
    buttonStudies.classList.add("button-portfolio-active")
    portfolioBox.innerHTML = ""
    portfolioBox.insertAdjacentHTML("afterbegin",/*html*/ `
    <ul>
        <li class="portfolio-images">
            <a href="https://matheussgsilva.github.io/consulta-cep/" target="_blank">
            <img src="src/images/CEP.jpg" alt=""></a>
        </li>
        <li class="portfolio-images">
            <a href="https://matheussgsilva.github.io/calculadora-imc/" target="_blank">
            <img src="src/images/IMC.jpg" alt=""></a>
        </li>
        <li class="portfolio-images">
            <a href="https://matheussgsilva.github.io/mathflix/" target="_blank">
            <img src="src/images/mathflix.jpg" alt=""></a>
        </li>
        <li class="portfolio-images">
            <a href="https://matheussgsilva.github.io/gerador-qrcode/" target="_blank">
            <img src="src/images/qrcode.png" alt=""></a>
        </li>
    </ul>
    `)
})