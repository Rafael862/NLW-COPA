

function createGame(player1, hour, player2){

    return `
                    <li class="partidas">
                        <img src="assets/icon-${player1}.svg" alt="Bandeira do Brasil">
                        
                        <strong>${hour}</strong>
                        <img src="assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
                        <li><p class="nomedospaises">${player1}</p><p class="nomedospaises">${player2}</p></li>
                    </li>
                    
    `

}

function createCard(date, day, games){
    return `
    <div class="card">
                <h2>${date} <span>${day}</span></h2>
            
                <ul>
                     ${games}
                </ul>
            </div>
`
}

function start(){

    document.querySelector('.start').innerHTML = `<button id="jogosHoje">Jogos de hoje</button>
    <button id="todosJogos">Todos os jogos</button>`

}

function voltar(){

    document.querySelector('.voltar').innerHTML = `<button id="voltar">Voltar</button>`

}

start();

document.querySelector('#app').innerHTML = `
<header>
            <img src="assets/logo.svg" alt="">
        </header>
        <main id="cards">
        <div id="cardHide">
            ${createCard("20/11/2022","domingo",createGame('Catar', '13:00', 'Equador'))}
            <br>
            ${createCard("21/11/2022", "segunda",createGame('Inglaterra', '10:00', 'Irã') + createGame('Senegal', '13:00', 'Holanda')+ createGame('Estados-Unidos', '16:00', 'Gales'))}
            <br>
            ${createCard("22/11/2022", "terça",createGame('Argentina', '07:00', 'Arábia-Saudita')
             + createGame('Dinamarca', '10:00', 'Tunísia')+ createGame('México', '13:00', 'Polônia')
             + createGame('França', '16:00', 'Austrália'))}
             <br>
             ${createCard("23/11/2022", "quarta",createGame('Marrocos', '07:00', 'Croácia')
             + createGame('Alemanha', '10:00', 'Japão')+ createGame('Espanha', '13:00', 'Costa-Rica')
             + createGame('Bélgica', '16:00', 'Canadá'))}
             <br>
             ${createCard("24/11/2022", "quinta",createGame('Suíça', '07:00', 'Camarões')
             + createGame('Uruguai', '10:00', 'Coreia-do-Sul')+ createGame('Portugal', '13:00', 'Gana')
             + createGame('Brasil', '16:00', 'Sérvia'))}
             <br>
             ${createCard("25/11/2022", "sexta",createGame('Gales', '07:00', 'Irã')
             + createGame('Catar', '10:00', 'Senegal')+ createGame('Holanda', '13:00', 'Equador')
             + createGame('Inglaterra', '16:00', 'Estados-Unidos'))}
             <br>
             ${createCard("26/11/2022", "sabado",createGame('Tunísia', '07:00', 'Austrália')
             + createGame('Polônia', '10:00', 'Arábia-saudita')+ createGame('França', '13:00', 'Dinamarca')
             + createGame('Argentina', '16:00', 'México'))}
             <br>
             ${createCard("27/11/2022", "domingo",createGame('Japão', '07:00', 'Costa-Rica')
             + createGame('Bélgica', '10:00', 'Marrocos')+ createGame('Croácia', '13:00', 'Canadá')
             + createGame('Espanha', '16:00', 'Alemanha'))}
             <br>
             ${createCard("28/11/2022", "segunda",createGame('Camarões', '07:00', 'Sérvia')
             + createGame('Coreia-do-Sul', '10:00', 'Gana')+ createGame('Brasil', '13:00', 'Suíça')
             + createGame('Portugal', '16:00', 'Uruguai'))}
             <br>
             ${createCard("29/11/2022", "terca",createGame('Equador', '07:00', 'Senegal')
             + createGame('Holanda', '10:00', 'Catar')+ createGame('Irã', '13:00', 'Estados-Unidos')
             + createGame('Gales', '16:00', 'Inglaterra'))}
             <br>
             ${createCard("30/11/2022", "quarta",createGame('Tunísia', '07:00', 'França')
             + createGame('Austrália', '10:00', 'Dinamarca')+ createGame('Polônia', '13:00', 'Argentina')
             + createGame('Arábia-saudita', '16:00', 'México'))}
             <br>
             ${createCard("01/12/2022", "quinta",createGame('Croácia', '07:00', 'Bélgica')
             + createGame('Canadá', '10:00', 'Marrocos')+ createGame('Japão', '13:00', 'Espanha')
             + createGame('Costa-Rica', '16:00', 'Alemanha'))}
             <br>
             ${createCard("02/12/2022", "sexta",createGame('Coreia-do-Sul', '07:00', 'Portugal')
             + createGame('Gana', '10:00', 'Uruguai')+ createGame('Sérvia', '13:00', 'Suíça')
             + createGame('Camarões', '16:00', 'Brasil'))}
        </div>    
        </main>
`
let bnttodosJogos = document.getElementById('todosJogos');

let bntJogosHoje = document.getElementById('jogosHoje');

let cards = document.querySelector('#cardHide');

let dataAtual = moment().format('DD/MM/YYYY');
 
document.querySelector('.data').innerHTML = `Hoje é ${dataAtual}`;

bnttodosJogos.addEventListener("click", function(){
    let voltar = document.querySelector(".voltar");
    document.querySelector(".start").setAttribute("class", "hide");
    cards.removeAttribute("class", "cardHide");
    cards.removeAttribute("id", "cardHide");
    document.querySelector(".data").setAttribute("class", "hide");
    voltar.removeAttribute("id", "cardHide");
    
});

btnVoltar = document.querySelector('#voltarH');

btnVoltar.addEventListener("click", () => {

     let voltar = document.querySelector("#voltarH");
     let voltar2 = document.querySelector(".voltar");

     let start = document.querySelector("#start");
     let data = document.querySelector("#data");

     data.removeAttribute("class", "hide");
     data.setAttribute("class", "data");
     start.removeAttribute("class", "hide");
     start.setAttribute("class", "start");
     document.querySelector(".cardHides").setAttribute("id", "cardHide");
     voltar.setAttribute("id", "cardHide");
     voltar2.setAttribute("id", "cardHide");


});

bntJogosHoje.addEventListener("click", () =>{
    
    let dataAtual = moment().format('DD/MM/YYYY');
        
        document.querySelector(".start").setAttribute("class", "hide");

        document.querySelector(".data").setAttribute("class", "hide");

        voltar();

        alert("Me ajuda compartilhando aí");

      switch (dataAtual){

             case '15/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div class="cardHides">
                        ${createCard("15/11/2022","",createGame('Brasil', '7 X 0', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '16/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div >
                        ${createCard("16/11/2022","",createGame('Brasil', '14 X 0', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '17/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                        ${createCard("17/11/2022","",createGame('Brasil', '21 X 0', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '18/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                        ${createCard("18/11/2022","",createGame('Brasil', '28 X 0', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '19/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                        ${createCard("19/11/2022","",createGame('Brasil', '35 X 0', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '20/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                        ${createCard("15/11/2022","",createGame('Catar', '13:00', 'Equador'))}
                    </div>    
                    </main>
            `
             break;
             case '21/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("21/11/2022", "segunda",createGame('Inglaterra', '10:00', 'Irã') + createGame('Senegal', '13:00', 'Holanda')+ createGame('Estados-Unidos', '16:00', 'Gales'))}

                    </div>    
                    </main>
            `
             break;
             case '22/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("22/11/2022", "terça",createGame('Argentina', '07:00', 'Arábia-Saudita')
                    + createGame('Dinamarca', '10:00', 'Tunísia')+ createGame('México', '13:00', 'Polônia')
                    + createGame('França', '16:00', 'Austrália'))}
                    </div>    
                    </main>
            `
             break;
             case '23/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("23/11/2022", "quarta",createGame('Marrocos', '07:00', 'Croácia')
                    + createGame('Alemanha', '10:00', 'Japão')+ createGame('Espanha', '13:00', 'Costa-Rica')
                    + createGame('Bélgica', '16:00', 'Canadá'))}
                    </div>    
                    </main>
            `
             break;
             case '24/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("24/11/2022", "quinta",createGame('Suíça', '07:00', 'Camarões')
                    + createGame('Uruguai', '10:00', 'Coreia-do-Sul')+ createGame('Portugal', '13:00', 'Gana')
                    + createGame('Brasil', '16:00', 'Sérvia'))}
                    </div>    
                    </main>
            `
             break;
             case '25/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("25/11/2022", "sexta",createGame('Gales', '07:00', 'Irã')
                    + createGame('Catar', '10:00', 'Senegal')+ createGame('Holanda', '13:00', 'Equador')
                    + createGame('Inglaterra', '16:00', 'Estados-Unidos'))}
                    </div>    
                    </main>
            `
             break;
             case '26/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("26/11/2022", "sabado",createGame('Tunísia', '07:00', 'Austrália')
                    + createGame('Polônia', '10:00', 'Arábia-saudita')+ createGame('França', '13:00', 'Dinamarca')
                    + createGame('Argentina', '16:00', 'México'))}
                    </div>    
                    </main>
            `
             break;
             case '27/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("27/11/2022", "domingo",createGame('Japão', '07:00', 'Costa-Rica')
                    + createGame('Bélgica', '10:00', 'Marrocos')+ createGame('Croácia', '13:00', 'Canadá')
                    + createGame('Espanha', '16:00', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '28/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("28/11/2022", "segunda",createGame('Camarões', '07:00', 'Sérvia')
                    + createGame('Coreia-do-Sul', '10:00', 'Gana')+ createGame('Brasil', '13:00', 'Suíça')
                    + createGame('Portugal', '16:00', 'Uruguai'))}
                    </div>    
                    </main>
            `
             break;
             case '29/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("29/11/2022", "terca",createGame('Equador', '07:00', 'Senegal')
                    + createGame('Holanda', '10:00', 'Catar')+ createGame('Irã', '13:00', 'Estados-Unidos')
                    + createGame('Gales', '16:00', 'Inglaterra'))}
                    </div>    
                    </main>
            `
             break;
             case '30/11/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("30/11/2022", "quarta",createGame('Tunísia', '07:00', 'França')
                    + createGame('Austrália', '10:00', 'Dinamarca')+ createGame('Polônia', '13:00', 'Argentina')
                    + createGame('Arábia-saudita', '16:00', 'México'))}
                    </div>    
                    </main>
            `
             break;
             case '01/12/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("01/12/2022", "quinta",createGame('Croácia', '07:00', 'Bélgica')
                    + createGame('Canadá', '10:00', 'Marrocos')+ createGame('Japão', '13:00', 'Espanha')
                    + createGame('Costa-Rica', '16:00', 'Alemanha'))}
                    </div>    
                    </main>
            `
             break;
             case '02/12/2022':
            document.querySelector('#app').innerHTML = `
            <header>
                        <img src="assets/logo.svg" alt="">
                    </header>
                    <main id="cards">
                    <div>
                    ${createCard("02/12/2022", "sexta",createGame('Coreia-do-Sul', '07:00', 'Portugal')
                    + createGame('Gana', '10:00', 'Uruguai')+ createGame('Sérvia', '13:00', 'Suíça')
                    + createGame('Camarões', '16:00', 'Brasil'))}
                    </div>    
                    </main>
            `
             break;
  
         default:
             alert("OPS, algo deu errado");
             
      }
 });

