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
  return `
    <div class="carte">
      <div class="carte-header">
        <img src="./img/${objet.image}" alt="${objet.nom}">
        <h2>${objet.nom}</h2>
      </div>
      <div class="carte-body">
        <p>${objet.description}</p>
        <p>Prix : ${objet.prix} pièces d'or</p>
        <p>Rareté : ${objet.rarete ? "Oui" : "Non"}</p>
        <p>Découverte : ${objet.dateDecouverte}</p>
        <p>Propriétaire : ${objet.proprietaireActuel.nom}</p>
        <h3>Pouvoirs :</h3>
        <ul>
          ${objet.pouvoirs.map(pouvoir => `<li>${pouvoir}</li>`).join('')}
        </ul>
        <button class="btn-plus-photos">Voir plus de photos</button>
        <div class="galerie-photos" style="display: none;">
          ${objet.imagesSupp.map(img => `<img src="./img/${img}" alt="Photo supplémentaire">`).join('')}
        </div>
      </div>
    </div>
  `;
}

let conteneur = document.getElementById("conteneur-carte");
conteneur.innerHTML = amulettes.map(creerCarte).join('');

document.querySelectorAll(".btn-plus-photos").forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let galerie = btn.nextElementSibling;
    if (galerie.style.display === "none") {
      galerie.style.display = "flex";
      btn.textContent = "Masquer les photos";
    } else {
      galerie.style.display = "none";
      btn.textContent = "Voir plus de photos";
    }
  });
});

document.getElementById("toggle-view").addEventListener("click", function () {
  conteneur.classList.toggle("carrousel");
});
