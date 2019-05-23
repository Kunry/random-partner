class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Alessio (que se escuche esa risa!)', img: './img/alessio.jpg' },
            { name: 'Toto (picaderos de lujo para asiáticos, menos Noah)', img: './img/anthony.jpeg' },
            { name: 'Ben (nada bajo la gabardina)', img: './img/ben.jpg' },
            { name: 'Cris (cambio boli y entradas por 600 euros)', img: './img/cris.jpg' },
            { name: 'Jorge R. (Satán quemando iglesias, pero shhhhh)', img: './img/jorgeR.jpg' },
            { name: 'Jorge L.H. (alguien tiene guiso en su chorizo?)', img: './img/jorgeLH.jpeg' },
            { name: 'Juan (blackout guy)', img: './img/juan.jpg' },
            { name: 'Juanma (miércoles negro)', img: './img/juanma.jpg' },
            { name: 'Leti (cuando tú vas, ella viene)', img: './img/leti.jpg' },
            { name: 'Lula (te raja con la sexnavaja)', img: './img/lucia.jpg' },
            { name: 'María (es tan cuqui...)', img: './img/maria.jpg' },
            { name: 'Noah (el chino racista)', img: './img/noah.jpg' },
            { name: 'Paula (se puede comer un elefante)', img: './img/paula.jpg' },
            { name: 'Sachín (It\'s something)', img: './img/sachin.jpg' },
            { name: 'Teo (empresario de la noche)', img: './img/teo.jpg' },
            { name: 'Constan (Luke, soy tu padre)', img: './img/tino.jpg' },
        ]);
        this.students.forEach(e => {
            this.addCard(e);
        });

        this.finalPairs = [];

        $(".card").on('click', e => {
            let total =  $(".card.clicked").length;
            if(!$(e.currentTarget).hasClass('clicked')){
                $(e.currentTarget).addClass('clicked');
                let name = $(e.currentTarget).attr('attr-name');
                console.log(`Added to pairs ${name}`);
                this.addPaired(name);
            }
        });
    }

    addCard(card){
        let card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
        $("#board").append(card_el)
    }

    addPaired(name){
        this.finalPairs.push(name);
        let chunks = _.chunk(this.finalPairs, 2);
        let pairs = $("#pairs");
        pairs.empty();
        console.log("Rewriting pairs");
        console.log(chunks);
        chunks.forEach(ch => {
            console.log("add pair")
            let pair = $(`
                <div class="pair">
                  <span>${ch[0]}</span>
                   - 
                  <span>${ch[1] ? ch[1] : '....'}</span>
                </div>
            `);
            pairs.append(pair);
        })
    }
}