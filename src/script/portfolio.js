var buttonStudies = document.getElementById("portfolio-studies")
var buttonFreela = document.getElementById("portfolio-freela")
var portfolioBox = document.getElementsByClassName("portfolio-box-projects")[0]

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
    <div class="portfolio-box">
                <div class="portfolio-info">
                    <div class="portfolio-info-header">
                        <div class="portfolio-info-title">
                            <h3>Gerenciador Fonanceiro</h3>
                        </div>
                        <div class="portfolio-image">
                            <img src="src/images/proj-fin.jpg" alt="Prancheta e lápis">
                        </div>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/www.png" alt="Imagem WWW"/>
                        <a href="https://gerenciador-financeiro-matheussgsilva.vercel.app/" target="_blank">Clique para ver o projeto em produção</a>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/github.png" alt="Logo GitHub"/>
                        <a href="https://github.com/Matheussgsilva/gerenciador-financeiro" target="_blank">Acesse o repositório no GitHub</a>
                    </div>
                    <p>Tecnologias:</p>
                    <div class="portfolio-techs">
                        <img src="src/images/techs/react.png" alt="Logo React JS" title="React JS">
                        <img src="src/images/techs/typescript.png" alt="Logo Typescript" title="Typescript">
                        <img src="src/images/techs/styled-components.png" alt="Logo Styled-components" title="Styled-components" id="styled">
                    </div>
                </div>                
            </div>
            <div class="portfolio-box">
                <div class="portfolio-info">
                    <div class="portfolio-info-header">
                        <div class="portfolio-info-title">
                            <h3>To do List</h3>
                        </div>
                        <div class="portfolio-image">
                            <img src="src/images/proj-todo.jpg" alt="Prancheta e lápis">
                        </div>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/www.png" alt="Imagem WWW"/>
                        <a href="https://todo-list-matheussgsilva.vercel.app/" target="_blank">Clique para ver o projeto em produção</a>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/github.png" alt="Logo GitHub"/>
                        <a href="https://github.com/Matheussgsilva/todo-list" target="_blank">Acesse o repositório no GitHub</a>
                    </div>
                    <p>Tecnologias:</p>
                    <div class="portfolio-techs">
                        <img src="src/images/techs/react.png" alt="Logo React JS" title="React JS">
                        <img src="src/images/techs/typescript.png" alt="Logo Typescript" title="Typescript">
                        <img src="src/images/techs/styled-components.png" alt="Logo Styled-components" title="Styled-components" id="styled">
                    </div>
                </div>                
            </div>
            <div class="portfolio-box">
                <div class="portfolio-info">
                    <div class="portfolio-info-header">
                        <div class="portfolio-info-title">
                            <h3>Mathflix</h3>
                        </div>
                        <div class="portfolio-image">
                            <img src="src/images/proj-mathflix.jpg" alt="Letra M">
                        </div>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/www.png" alt="Imagem WWW"/>
                        <a href="https://matheussgsilva.github.io/mathflix/" target="_blank">Clique para ver o projeto em produção</a>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/github.png" alt="Logo GitHub"/>
                        <a href="https://github.com/Matheussgsilva/mathflix" target="_blank">Acesse o repositório no GitHub</a>
                    </div>
                    <p>Tecnologias:</p>
                    <div class="portfolio-techs">
                        <img src="src/images/techs/html.png" alt="Logo HTML 5" title="HTML5">
                        <img src="src/images/techs/css.png" alt="Logo CSS 3" title="CSS3">
                        <img src="src/images/techs/js.png" alt="Logo JavaScript" title="Javascript">
                    </div>
                </div>                
            </div>
            <div class="portfolio-box">
                <div class="portfolio-info">
                    <div class="portfolio-info-header">
                        <div class="portfolio-info-title">
                            <h3>Consulta CEP</h3>
                        </div>
                        <div class="portfolio-image">
                            <img src="src/images/proj-cep.jpg" alt="Desenho Lupa">
                        </div>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/www.png" alt="Imagem WWW"/>
                        <a href="https://matheussgsilva.github.io/consulta-cep/" target="_blank">Clique para ver o projeto em produção</a>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/github.png" alt="Logo GitHub"/>
                        <a href="https://github.com/Matheussgsilva/consulta-cep" target="_blank">Acesse o repositório no GitHub</a>
                    </div>
                    <p>Tecnologias:</p>
                    <div class="portfolio-techs">
                        <img src="src/images/techs/html.png" alt="Logo HTML 5" title="HTML5">
                        <img src="src/images/techs/css.png" alt="Logo CSS 3" title="CSS3">
                        <img src="src/images/techs/js.png" alt="Logo JavaScript" title="Javascript">
                    </div>
                </div>                
            </div>
            <div class="portfolio-box">
                <div class="portfolio-info">
                    <div class="portfolio-info-header">
                        <div class="portfolio-info-title">
                            <h3>Calculadora IMC</h3>
                        </div>
                        <div class="portfolio-image">
                            <img src="src/images/proj-imc.jpg" alt="Desenho fogo">
                        </div>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/www.png" alt="Imagem WWW"/>
                        <a href="https://matheussgsilva.github.io/calculadora-imc/" target="_blank">Clique para ver o projeto em produção</a>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/github.png" alt="Logo GitHub"/>
                        <a href="https://github.com/Matheussgsilva/calculadora-imc" target="_blank">Acesse o repositório no GitHub</a>
                    </div>
                    <p>Tecnologias:</p>
                    <div class="portfolio-techs">
                        <img src="src/images/techs/html.png" alt="Logo HTML 5" title="HTML5">
                        <img src="src/images/techs/css.png" alt="Logo CSS 3" title="CSS3">
                        <img src="src/images/techs/js.png" alt="Logo JavaScript" title="Javascript">
                    </div>
                </div>                
            </div>
            <div class="portfolio-box">
                <div class="portfolio-info">
                    <div class="portfolio-info-header">
                        <div class="portfolio-info-title">
                            <h3>Gerador QR code</h3>
                        </div>
                        <div class="portfolio-image">
                            <img src="src/images/proj-qr.png" alt="QR code">
                        </div>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/www.png" alt="Imagem WWW"/>
                        <a href="https://matheussgsilva.github.io/gerador-qrcode/" target="_blank">Clique para ver o projeto em produção</a>
                    </div>
                    <div class="portfolio-link">
                        <img src="src/images/techs/github.png" alt="Logo GitHub"/>
                        <a href="https://github.com/Matheussgsilva/gerador-qrcode" target="_blank">Acesse o repositório no GitHub</a>
                    </div>
                    <p>Tecnologias:</p>
                    <div class="portfolio-techs">
                        <img src="src/images/techs/html.png" alt="Logo HTML 5" title="HTML5">
                        <img src="src/images/techs/css.png" alt="Logo CSS 3" title="CSS3">
                        <img src="src/images/techs/js.png" alt="Logo JavaScript" title="Javascript">
                    </div>
                </div>                
            </div>
    `)
})