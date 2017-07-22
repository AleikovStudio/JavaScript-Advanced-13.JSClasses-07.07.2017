let result = (function () {

    let Suits = {
        SPADES: '\u2660',//(?)
        HEARTS: '\u2665',//(?)
        DIAMONDS: '\u2666',// (?)
        CLUBS: '\u2663'//(?)
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        toString() {
            return this.face + this.suit;
        }

        set face(value) {
            const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (validFaces.includes(value)) {
                this._face = value;
            } else {
                throw new Error('invalid face');
            }
        }

        get face() {
            return this._face;
        }

        set suit(value) {
            let validSuits = Object.keys(Suits).map(k=>Suits[k]);
            //console.log(validSuits);
            if (validSuits.includes(value)) {
                this._suit = value;
            } else {
                throw new Error('invalid suit');
            }
        }

        get suit() {
            return this._suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    };

})();

let Suits = result.Suits;
let Card = result.Card;

let c1 = new Card('10', Suits.DIAMONDS);
//let c1 = new Card("1",Suits.CLUBS);
//let c1 = new Card("2",Suits.Pesho);
//let c1 = new Card("3",'hearts');

console.log('' + c1);