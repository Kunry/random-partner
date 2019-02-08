class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Alfonso (The Stranger Developer)', img: './img/alfonso.png' },
            { name: 'Álvaro Bonilla (Bonilla Night)', img: './img/bonilla.png' },
            { name: 'Zenchy (Yisus was here)', img: './img/zenchy.jpg' },
            { name: 'Carlos Alberto (El amante de JS)', img: './img/carlos-alberto.png' },
            { name: 'Carlos Iglesias (VAMOS CHARLIE!!!)', img: './img/iglesias.png' },
            { name: 'Dani (Dan Böhler VS Canvas Hero)', img: './img/dani.png' },
            { name: 'David (El Tete SUUUUU)', img: './img/david.png' },
            { name: 'Uge (Gnome Killer)', img: './img/uge.png' },
            { name: 'Gonzalo (The collisions (and errors) ninja)', img: './img/gonzalo.png' },
            { name: 'Inés (Fan #1 David Bisbal)', img: './img/ines.png' },
            { name: 'Javi (Wikiaceña)', img: './img/javi.png' },
            { name: 'Jesús (The commits master because yes)', img: './img/jesus.jpg' },
            { name: 'Jorge (The Doctor)', img: './img/jorge.png' },
            { name: 'Isa (Educando por programación)', img: './img/isa.png' },
            { name: 'Mileydis (PHP Survivor)', img: './img/mileydis.png' },
            { name: 'Nira (Del gofio al node)', img: './img/nira.jpg' },
            { name: 'Patricia (entrepreneur.js)', img: './img/patricia.png' },
            { name: 'Roberto (NANANANANA Batman!!!)', img: './img/roberto.png' },
            { name: 'Rubén (Sin mote por no seguir a Ironhack en Instragram)', img: './img/ruben.png' },
            { name: 'Sofía (La linda)', img: './img/sofia.png' },
            { name: 'Thilo (El germano que quería ver el mar)', img: './img/thilo.png' },
            { name: 'Víctor (Puños de hierro)', img: './img/victor.jpg' }
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