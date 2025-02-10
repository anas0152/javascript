/*class Animal {

    constructor(nom) {
        this.nom = nom;
    }

    NbPattes(n) {
        this.NbPattes = n;
    }

    parler() {
        console.log(this.nom + ' fait du bruit.');
    }

    afficher() {
        console.log('Nom : ', this.nom);
        console.log('Nombre de pattes : ', this.NbPattes);
    }
}

// Possibilité de créer des classes qui héritent une classe existante tout en redefinissant ses méthodes.

class Chien extends Animal {
    NbPattes = 3;
    parler() {
        console.log(this.nom + ' fait woof woof.');
    }
}

class Chat extends Animal {
    constructor(nom) {
        super(nom);
        this.NbPattes = 4;
    }
    parler() {
        console.log(this.nom + ' fait miaou.');
    }
}

let medor = new Animal('Medor');
medor.NbPattes(4);
medor.afficher();
medor.parler();

let rex = new Chien('Rex');
rex.afficher();
rex.parler();

let felix = new Chat('Felix');
felix.afficher();
felix.parler();*/

class Contact {
    constructor(Nom, Prenom, DateDeNaissance) {
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.DateDeNaissance = DateDeNaissance;
    }
    afficher() {
        console.log(`Nom: ${this.Nom}, Prenom: ${this.Prenom}, Date de naissance: ${this.DateDeNaissance}`);
    }
}

class Employe extends Contact {
    constructor(Nom, Prenom, DateDeNaissance, Salaire, Anciennete) {
        super(Nom, Prenom, DateDeNaissance);
        this.Salaire = Salaire;
        this.Anciennete = Anciennete;
    }
    augmenterSalaire() {
        console.log(`Salaire mis à jour: ${(this.Salaire *= this.Anciennete > 10 ? 1.1 : 1.05).toFixed(2)}, Ancienneté: ${++this.Anciennete} ans`);
    }
    afficher() {
        super.afficher();
        console.log(`Salaire: ${this.Salaire}, Anciennete: ${this.Anciennete}`);
    }
}

let employe1 = new Employe("John", "Doe", "2005/07/31", 5000, 15);
employe1.afficher();
employe1.augmenterSalaire();