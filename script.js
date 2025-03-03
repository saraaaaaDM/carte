// Tableau contenant plusieurs amulettes
let amulettes = [
  {
    id: 1,
    nom: "Amulette de l'Esprit d'Éther",
    description: "Une amulette imprégnée de pouvoirs mystérieux qui permet d'entendre les murmures du vent.",
    prix: 499,
    rarete: false,
    image: "amulette1.png",
    pouvoirs: ["Vision de l'invisible", "Communication avec les esprits", "Protection contre les maléfices"],
    dateDecouverte: "14-07-1329",
    proprietaireActuel: { nom: "Alaric le Sage", statut: "Magicien légendaire", age: 352 },
    imagesSupp: ["amulette1_1.png", "amulette1_2.png", "amulette1_3.png"]
  },
  {
    id: 2,
    nom: "Amulette du Feu Sacré",
    description: "Un bijou mystique capable d'allumer les flammes éternelles et de résister à toute chaleur.",
    prix: 750,
    rarete: true,
    image: "amulette2.png",
    pouvoirs: ["Résistance au feu", "Invocation de flammes", "Guérison par la chaleur"],
    dateDecouverte: "22-05-1200",
    proprietaireActuel: { nom: "Eldrin le Pyromancien", statut: "Gardien du Feu", age: 214 },
    imagesSupp: ["amulette2_1.png", "amulette2_2.png", "amulette2_3.png"]
  },
  {
    id: 3,
    nom: "Amulette des Marées",
    description: "Une amulette forgée dans les profondeurs de l'océan, permettant de manipuler l'eau et de respirer sous l'eau.",
    prix: 620,
    rarete: false,
    image: "amulette3.png",
    pouvoirs: ["Respiration aquatique", "Maîtrise des marées", "Communication avec les créatures marines"],
    dateDecouverte: "10-09-1435",
    proprietaireActuel: { nom: "Nerida la Sirène", statut: "Reine des Profondeurs", age: 444 },
    imagesSupp: ["amulette3_1.png", "amulette3_2.png", "amulette3_3.png"]
  },
  {
    id: 4,
    nom: "Amulette de la Nuit Obscure",
    description: "Une amulette qui accorde à son porteur la capacité de se fondre dans l'ombre et de se déplacer sans être vu.",
    prix: 999,
    rarete: true,
    image: "amulette4.png",
    pouvoirs: ["Invisibilité dans l'ombre", "Téléportation nocturne", "Vision nocturne"],
    dateDecouverte: "05-11-1623",
    proprietaireActuel: { nom: "Vespera la Maîtresse des Ombres", statut: "Assassin légendaire", age: 295 },
    imagesSupp: ["amulette4_1.png", "amulette4_2.png", "amulette4_3.png"]
  }
];

function creerCarte(objet) {
  let carte = document.createElement("div");
  carte.classList.add("carte");

  let header = document.createElement("div");
  header.classList.add("carte-header");

  let image = document.createElement("img");
  image.src = `./img/${objet.image}`;
  image.alt = objet.nom;

  let titre = document.createElement("h2");
  titre.textContent = objet.nom;

  header.appendChild(image);
  header.appendChild(titre);

  let body = document.createElement("div");
  body.classList.add("carte-body");

  let description = document.createElement("p");
  description.textContent = objet.description;

  let prix = document.createElement("p");
  prix.textContent = `Prix : ${objet.prix} pièces d'or`;

  let rarete = document.createElement("p");
  rarete.textContent = `Rareté : ${objet.rarete ? "Oui" : "Non"}`;

  let date = document.createElement("p");
  date.textContent = `Découverte : ${objet.dateDecouverte}`;

  let proprietaire = document.createElement("p");
  proprietaire.textContent = `Propriétaire : ${objet.proprietaireActuel.nom}`;

  let pouvoirs = document.createElement("div");
  pouvoirs.classList.add("carte-pouvoirs");
  let titrePouvoirs = document.createElement("h3");
  titrePouvoirs.textContent = "Pouvoirs :";
  pouvoirs.appendChild(titrePouvoirs);

  objet.pouvoirs.forEach(pouvoir => {
    let span = document.createElement("span");
    span.textContent = pouvoir;
    pouvoirs.appendChild(span);
  });

  body.appendChild(description);
  body.appendChild(prix);
  body.appendChild(rarete);
  body.appendChild(date);
  body.appendChild(proprietaire);
  body.appendChild(pouvoirs);

  let bouton = document.createElement("button");
  bouton.textContent = "Voir plus de photos";
  bouton.classList.add("btn-plus-photos");

  let galerie = document.createElement("div");
  galerie.classList.add("galerie-photos");
  galerie.style.display = "none";

  objet.imagesSupp.forEach(img => {
    let imgElement = document.createElement("img");
    imgElement.src = `./img/${img}`;
    imgElement.alt = "Photo supplémentaire";
    galerie.appendChild(imgElement);
  });

  bouton.addEventListener("click", function () {
    if (galerie.style.display === "none") {
      galerie.style.display = "flex";
      bouton.textContent = "Masquer les photos";
    } else {
      galerie.style.display = "none";
      bouton.textContent = "Voir plus de photos";
    }
  });

  carte.appendChild(header);
  carte.appendChild(body);
  carte.appendChild(bouton);
  carte.appendChild(galerie);

  return carte;
}

// Génération des cartes
let conteneur = document.getElementById("conteneur-carte");
amulettes.forEach(amulette => {
  let carte = creerCarte(amulette);
  conteneur.appendChild(carte);
});

// Gestion du mode d'affichage (mosaïque <-> carrousel)
document.getElementById("toggle-view").addEventListener("click", function () {
  conteneur.classList.toggle("carrousel");
});