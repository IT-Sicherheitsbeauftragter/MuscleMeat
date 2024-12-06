let protein = 0;

let täglichesziel = 0;


function proteinzielberechnen() {

    const gewichtzähler = document.getElementById('gewichteingabe').value;

    const gewicht = parseFloat(gewichtzähler) || 0;

    if (gewicht > 0) {

        täglichesziel = gewicht * 2;

        document.getElementById('zielanzeige').innerText = `${täglichesziel} Gramm`;

        document.getElementById('proteinhinweis').style.display = 'block';

        document.getElementById('gewichteingabe').style.display = 'none';

        document.getElementById('zielberechnen').style.display = 'none';

        document.getElementById('gewichteingabewrapper').style.display = 'none';

    } else {

        document.getElementById('zielanzeige').innerText = 'Nicht festgelegt';

        document.getElementById('proteinhinweis').style.display = 'none';

    }

}


function proteinhinzufügen() {

    const proteinzähler = document.getElementById('proteineingabe').value;

    protein += parseInt(proteinzähler) || 0;

    document.getElementById('proteingesamt').innerText = protein;

    if (täglichesziel > 0 && protein >= täglichesziel) {

        document.getElementById('zielerreichthinweis').style.display = 'block';

    } else {

        document.getElementById('zielerreichthinweis').style.display = 'none';

    }

}


function fleischempfehlen() {

    const fleisch = [

        "Hähnchenbrust",

        "Hähnchenkeule",

        "Hähnchenflügel",

        "Ribeye-Steak",

        "Rinderfilet",

        "Rinderhackfleisch",

        "Lammkotelett",

        "Lachs",

        "Thunfisch"

    ];

    const zufallsfleisch = fleisch[Math.floor(Math.random() * fleisch.length)];

    document.getElementById('fleischanzeige').innerText = zufallsfleisch;

}
