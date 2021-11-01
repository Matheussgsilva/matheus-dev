var buttonStudies = document.getElementById("portfolio-studies")
var buttonFreela = document.getElementById("portfolio-freela")
var portfolioBox = document.getElementsByClassName("portfolio-box-images")[0]

buttonFreela.addEventListener("click", function freela() {
    buttonFreela.classList.add("button-portfolio-active")
    buttonStudies.classList.remove("button-portfolio-active")
    portfolioBox.innerHTML = ""
    portfolioBox.insertAdjacentHTML("afterbegin", `
    <ul>
        <li class="portfolio-images-freela"></li>
        <li class="portfolio-images-freela"></li>
        <li class="portfolio-images-freela"></li>
        <li class="portfolio-images-freela"></li>
        <li class="portfolio-images-freela"></li>
        <li class="portfolio-images-freela"></li>
    </ul>
    `)
})

buttonStudies.addEventListener("click", function freela() {
    buttonFreela.classList.remove("button-portfolio-active")
    buttonStudies.classList.add("button-portfolio-active")
    portfolioBox.innerHTML = ""
    portfolioBox.insertAdjacentHTML("afterbegin", `
    <ul>
        <li class="portfolio-images"></li>
        <li class="portfolio-images"></li>
        <li class="portfolio-images"></li>
        <li class="portfolio-images"></li>
        <li class="portfolio-images"></li>
        <li class="portfolio-images"></li>
    </ul>
    `)
})