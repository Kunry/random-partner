class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Alfonso', img: './img/alfonso.png' },
            { name: 'Álvaro Bonilla', img: './img/bonilla.png' },
            { name: 'Zenchy', img: './img/zenchy.png' },
            { name: 'Carlos Alberto', img: './img/carlos-alberto.png' },
            { name: 'Carlos Iglesias', img: './img/iglesias.png' },
            { name: 'Dani', img: './img/dani.png' },
            { name: 'David', img: './img/david.png' },
            { name: 'Uge', img: './img/uge.png' },
            { name: 'Gonzalo', img: './img/gonzalo.png' },
            { name: 'Inés', img: './img/ines.png' },
            { name: 'Javi', img: './img/javi.png' },
            { name: 'Jesús', img: './img/jesus.png' },
            { name: 'Jorge', img: './img/jorge.png' },
            { name: 'Isa', img: './img/isa.png' },
            { name: 'Mileydis', img: './img/mileydis.png' },
            { name: 'Nira', img: './img/nira.png' },
            { name: 'Patricia', img: './img/patricia.png' },
            { name: 'Roberto', img: './img/roberto.png' },
            { name: 'Rubén', img: './img/ruben.png' },
            { name: 'Sofía', img: './img/sofia.png' },
            { name: 'Thilo', img: './img/thilo.png' },
            { name: 'Víctor', img: './img/victor.png' }
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