/**
 * Application Liste de Courses
 * Gestion des données, du rendu et des événements.
 */

// --- 1. Données Initiales (Base de connaissance) ---

const categories = [
    { id: 'fruits', nom: 'Fruits & Légumes', icon: '🍎' },
    { id: 'viandes', nom: 'Viandes & Poissons', icon: '🥩' },
    { id: 'frais', nom: 'Produits Frais', icon: '🧀' },
    { id: 'epicerie', nom: 'Épicerie', icon: '🍝' },
    { id: 'boissons', nom: 'Boissons', icon: '🧃' },
    { id: 'hygiene', nom: 'Hygiène & Beauté', icon: '🧼' },
    { id: 'entretien', nom: 'Maison & Entretien', icon: '🧹' },
    { id: 'divers', nom: 'Divers', icon: '💡' }
];

// Liste riche d'articles par défaut
const defaultItems = [
    { id: 'abricots', nom: 'Abricots', cat: 'fruits' },
    { id: 'agrumes', nom: 'Agrumes', cat: 'fruits' },
    { id: 'ail', nom: 'Ail', cat: 'fruits' },
    { id: 'ananas', nom: 'Ananas', cat: 'fruits' },
    { id: 'artichauts', nom: 'Artichauts', cat: 'fruits' },
    { id: 'aubergines', nom: 'Aubergines', cat: 'fruits' },
    { id: 'avocats', nom: 'Avocats', cat: 'fruits' },
    { id: 'bananes', nom: 'Bananes', cat: 'fruits' },
    { id: 'brocolis', nom: 'Brocolis', cat: 'fruits' },
    { id: 'brugnons', nom: 'Brugnons', cat: 'fruits' },
    { id: 'carambole', nom: 'Carambole', cat: 'fruits' },
    { id: 'carottes', nom: 'Carottes', cat: 'fruits' },
    { id: 'cerises', nom: 'Cerises', cat: 'fruits' },
    { id: 'champignons', nom: 'Champignons', cat: 'fruits' },
    { id: 'chou_fleur', nom: 'Chou-fleur', cat: 'fruits' },
    { id: 'choux', nom: 'Choux', cat: 'fruits' },
    { id: 'citrons', nom: 'Citrons', cat: 'fruits' },
    { id: 'concombres', nom: 'Concombres', cat: 'fruits' },
    { id: 'courgettes', nom: 'Courgettes', cat: 'fruits' },
    { id: 'cresson', nom: 'Cresson', cat: 'fruits' },
    { id: 'dattes', nom: 'Dattes', cat: 'fruits' },
    { id: 'endives', nom: 'Endives', cat: 'fruits' },
    { id: 'epinards', nom: 'Épinards', cat: 'fruits' },
    { id: 'fenouil', nom: 'Fenouil', cat: 'fruits' },
    { id: 'figues', nom: 'Figues', cat: 'fruits' },
    { id: 'fraises', nom: 'Fraises', cat: 'fruits' },
    { id: 'framboises', nom: 'Framboises', cat: 'fruits' },
    { id: 'gingembre', nom: 'Gingembre', cat: 'fruits' },
    { id: 'haricots', nom: 'Haricots', cat: 'fruits' },
    { id: 'haricots_verts', nom: 'Haricots verts', cat: 'fruits' },
    { id: 'herbe', nom: 'Herbe', cat: 'fruits' },
    { id: 'kiwis', nom: 'Kiwis', cat: 'fruits' },
    { id: 'kumquats', nom: 'Kumquats', cat: 'fruits' },
    { id: 'mandarines', nom: 'Mandarines', cat: 'fruits' },
    { id: 'mangues', nom: 'Mangues', cat: 'fruits' },
    { id: 'marrons', nom: 'Marrons', cat: 'fruits' },
    { id: 'melon', nom: 'Melon', cat: 'fruits' },
    { id: 'menthe', nom: 'Menthe', cat: 'fruits' },
    { id: 'myrtilles', nom: 'Myrtilles', cat: 'fruits' },
    { id: 'navets', nom: 'Navets', cat: 'fruits' },
    { id: 'oignons', nom: 'Oignons', cat: 'fruits' },
    { id: 'oranges', nom: 'Oranges', cat: 'fruits' },
    { id: 'oseille', nom: 'Oseille', cat: 'fruits' },
    { id: 'pachino', nom: 'Pachino', cat: 'fruits' },
    { id: 'papaye', nom: 'Papaye', cat: 'fruits' },
    { id: 'patate', nom: 'Patate', cat: 'fruits' },
    { id: 'poireaux', nom: 'Poireaux', cat: 'fruits' },
    { id: 'poires', nom: 'Poires', cat: 'fruits' },
    { id: 'poivrons', nom: 'Poivrons', cat: 'fruits' },
    { id: 'pommes', nom: 'Pommes', cat: 'fruits' },
    { id: 'pommes_de_terre', nom: 'Pommes de terre', cat: 'fruits' },
    { id: 'prune', nom: 'Prune', cat: 'fruits' },
    { id: 'radis', nom: 'Radis', cat: 'fruits' },
    { id: 'raisin', nom: 'Raisin', cat: 'fruits' },
    { id: 'raisins', nom: 'Raisins', cat: 'fruits' },
    { id: 'romarin', nom: 'Romarin', cat: 'fruits' },
    { id: 'salade', nom: 'Salade', cat: 'fruits' },
    { id: 'tomates', nom: 'Tomates', cat: 'fruits' },
    { id: 'truffe', nom: 'Truffe', cat: 'fruits' },
    { id: 'abats', nom: 'Abats', cat: 'viandes' },
    { id: 'anchois', nom: 'Anchois', cat: 'viandes' },
    { id: 'beaujolaise', nom: 'Beaujolaise', cat: 'viandes' },
    { id: 'brochettes', nom: 'Brochettes', cat: 'viandes' },
    { id: 'cabillaud', nom: 'Cabillaud', cat: 'viandes' },
    { id: 'canard', nom: 'Canard', cat: 'viandes' },
    { id: 'caviar', nom: 'Caviar', cat: 'viandes' },
    { id: 'crabe', nom: 'Crabe', cat: 'viandes' },
    { id: 'crevettes', nom: 'Crevettes', cat: 'viandes' },
    { id: 'deconfite', nom: 'Déconfite', cat: 'viandes' },
    { id: 'dinde', nom: 'Dinde', cat: 'viandes' },
    { id: 'effiloche', nom: 'Effiloché', cat: 'viandes' },
    { id: 'foie', nom: 'Foie', cat: 'viandes' },
    { id: 'harengs', nom: 'Harengs', cat: 'viandes' },
    { id: 'huitres', nom: 'Huitres', cat: 'viandes' },
    { id: 'jambon', nom: 'Jambon', cat: 'viandes' },
    { id: 'lardons', nom: 'Lardons', cat: 'viandes' },
    { id: 'morue', nom: 'Morue', cat: 'viandes' },
    { id: 'moules', nom: 'Moules', cat: 'viandes' },
    { id: 'poisson', nom: 'Poisson', cat: 'viandes' },
    { id: 'porc', nom: 'Porc', cat: 'viandes' },
    { id: 'poulet', nom: 'Poulet', cat: 'viandes' },
    { id: 'salami', nom: 'Salami', cat: 'viandes' },
    { id: 'sardines', nom: 'Sardines', cat: 'viandes' },
    { id: 'saucisses', nom: 'Saucisses', cat: 'viandes' },
    { id: 'saumon', nom: 'Saumon', cat: 'viandes' },
    { id: 'thon', nom: 'Thon', cat: 'viandes' },
    { id: 'tomawak', nom: 'Tomawak', cat: 'viandes' },
    { id: 'veau', nom: 'Veau', cat: 'viandes' },
    { id: 'viande', nom: 'Viande', cat: 'viandes' },
    { id: 'viande_hachee', nom: 'Viande hachée', cat: 'viandes' },
    { id: 'affinois', nom: 'Affinois', cat: 'frais' },
    { id: 'baguette', nom: 'Baguette', cat: 'frais' },
    { id: 'beurre', nom: 'Beurre', cat: 'frais' },
    { id: 'chantilly', nom: 'Chantilly', cat: 'frais' },
    { id: 'creme', nom: 'Creme', cat: 'frais' },
    { id: 'creme_fraiche', nom: 'Crème fraîche', cat: 'frais' },
    { id: 'creme_liquide', nom: 'Crème liquide', cat: 'frais' },
    { id: 'crepes', nom: 'Crepes', cat: 'frais' },
    { id: 'croissants', nom: 'Croissants', cat: 'frais' },
    { id: 'flan', nom: 'Flan', cat: 'frais' },
    { id: 'fromage', nom: 'Fromage', cat: 'frais' },
    { id: 'fromage_blanc', nom: 'Fromage blanc', cat: 'frais' },
    { id: 'fromage_rape', nom: 'Fromage râpé', cat: 'frais' },
    { id: 'glace', nom: 'Glace', cat: 'frais' },
    { id: 'gnocchis', nom: 'Gnocchis', cat: 'frais' },
    { id: 'lait', nom: 'Lait', cat: 'frais' },
    { id: 'margarine', nom: 'Margarine', cat: 'frais' },
    { id: 'mozzarella', nom: 'Mozzarella', cat: 'frais' },
    { id: 'oeufs', nom: 'Oeufs', cat: 'frais' },
    { id: 'pain', nom: 'Pain', cat: 'frais' },
    { id: 'parmesan', nom: 'Parmesan', cat: 'frais' },
    { id: 'pizza', nom: 'Pizza', cat: 'frais' },
    { id: 'quiche', nom: 'Quiche', cat: 'frais' },
    { id: 'raclette', nom: 'Raclette', cat: 'frais' },
    { id: 'reblochon', nom: 'Reblochon', cat: 'frais' },
    { id: 'sandwich', nom: 'Sandwich', cat: 'frais' },
    { id: 'sorbet', nom: 'Sorbet', cat: 'frais' },
    { id: 'yaourt', nom: 'Yaourt', cat: 'frais' },
    { id: 'yaourts', nom: 'Yaourts', cat: 'frais' },
    { id: 'additifs', nom: 'Additifs', cat: 'epicerie' },
    { id: 'adobo', nom: 'Adobo', cat: 'epicerie' },
    { id: 'ajvar', nom: 'Ajvar', cat: 'epicerie' },
    { id: 'amandes', nom: 'Amandes', cat: 'epicerie' },
    { id: 'avoine', nom: 'Avoine', cat: 'epicerie' },
    { id: 'beijinho', nom: 'Beijinho', cat: 'epicerie' },
    { id: 'bicarbonate', nom: 'Bicarbonate', cat: 'epicerie' },
    { id: 'biscuits', nom: 'Biscuits', cat: 'epicerie' },
    { id: 'bonbons', nom: 'Bonbons', cat: 'epicerie' },
    { id: 'bouillon', nom: 'Bouillon', cat: 'epicerie' },
    { id: 'brioches', nom: 'Brioches', cat: 'epicerie' },
    { id: 'brownie', nom: 'Brownie', cat: 'epicerie' },
    { id: 'cacahuetes', nom: 'Cacahuetes', cat: 'epicerie' },
    { id: 'cacao', nom: 'Cacao', cat: 'epicerie' },
    { id: 'cafe', nom: 'Café', cat: 'epicerie' },
    { id: 'cajou', nom: 'Cajou', cat: 'epicerie' },
    { id: 'camomille', nom: 'Camomille', cat: 'epicerie' },
    { id: 'cannelle', nom: 'Cannelle', cat: 'epicerie' },
    { id: 'carambars', nom: 'Carambars', cat: 'epicerie' },
    { id: 'caramel', nom: 'Caramel', cat: 'epicerie' },
    { id: 'cereales', nom: 'Céréales', cat: 'epicerie' },
    { id: 'chips', nom: 'Chips', cat: 'epicerie' },
    { id: 'chocolat', nom: 'Chocolat', cat: 'epicerie' },
    { id: 'clou_de_girofle', nom: 'Clou de girofle', cat: 'epicerie' },
    { id: 'colorants', nom: 'Colorants', cat: 'epicerie' },
    { id: 'compotes', nom: 'Compotes', cat: 'epicerie' },
    { id: 'confiture', nom: 'Confiture', cat: 'epicerie' },
    { id: 'conserves', nom: 'Conserves', cat: 'epicerie' },
    { id: 'couscous', nom: 'Couscous', cat: 'epicerie' },
    { id: 'crackers', nom: 'Crackers', cat: 'epicerie' },
    { id: 'cumin', nom: 'Cumin', cat: 'epicerie' },
    { id: 'curry', nom: 'Curry', cat: 'epicerie' },
    { id: 'epices', nom: 'Épices', cat: 'epicerie' },
    { id: 'fajitas', nom: 'Fajitas', cat: 'epicerie' },
    { id: 'farine', nom: 'Farine', cat: 'epicerie' },
    { id: 'galettes', nom: 'Galettes', cat: 'epicerie' },
    { id: 'gaufres', nom: 'Gaufres', cat: 'epicerie' },
    { id: 'gelatine', nom: 'Gelatine', cat: 'epicerie' },
    { id: 'gelee', nom: 'Gelee', cat: 'epicerie' },
    { id: 'genoise', nom: 'Genoise', cat: 'epicerie' },
    { id: 'glucose', nom: 'Glucose', cat: 'epicerie' },
    { id: 'graines', nom: 'Graines', cat: 'epicerie' },
    { id: 'guimauves', nom: 'Guimauves', cat: 'epicerie' },
    { id: 'huile', nom: 'Huile', cat: 'epicerie' },
    { id: 'huile_d_olive', nom: "Huile d'olive", cat: 'epicerie' },
    { id: 'infusion', nom: 'Infusion', cat: 'epicerie' },
    { id: 'ketchup', nom: 'Ketchup', cat: 'epicerie' },
    { id: 'lasagnes', nom: 'Lasagnes', cat: 'epicerie' },
    { id: 'laurier', nom: 'Laurier', cat: 'epicerie' },
    { id: 'lentilles', nom: 'Lentilles', cat: 'epicerie' },
    { id: 'levure', nom: 'Levure', cat: 'epicerie' },
    { id: 'mayonnaise', nom: 'Mayonnaise', cat: 'epicerie' },
    { id: 'miel', nom: 'Miel', cat: 'epicerie' },
    { id: 'mikados', nom: 'Mikados', cat: 'epicerie' },
    { id: 'moutarde', nom: 'Moutarde', cat: 'epicerie' },
    { id: 'muesli', nom: 'Muesli', cat: 'epicerie' },
    { id: 'muffins', nom: 'Muffins', cat: 'epicerie' },
    { id: 'muscade', nom: 'Muscade', cat: 'epicerie' },
    { id: 'noisettes', nom: 'Noisettes', cat: 'epicerie' },
    { id: 'noix', nom: 'Noix', cat: 'epicerie' },
    { id: 'nouilles', nom: 'Nouilles', cat: 'epicerie' },
    { id: 'nutella', nom: 'Nutella', cat: 'epicerie' },
    { id: 'olives', nom: 'Olives', cat: 'epicerie' },
    { id: 'paprika', nom: 'Paprika', cat: 'epicerie' },
    { id: 'pates', nom: 'Pâtes', cat: 'epicerie' },
    { id: 'picholine', nom: 'Picholine', cat: 'epicerie' },
    { id: 'pignons', nom: 'Pignons', cat: 'epicerie' },
    { id: 'pistaches', nom: 'Pistaches', cat: 'epicerie' },
    { id: 'poivre', nom: 'Poivre', cat: 'epicerie' },
    { id: 'quinoa', nom: 'Quinoa', cat: 'epicerie' },
    { id: 'raviolis', nom: 'Raviolis', cat: 'epicerie' },
    { id: 'riz', nom: 'Riz', cat: 'epicerie' },
    { id: 'safran', nom: 'Safran', cat: 'epicerie' },
    { id: 'sauce_tomate', nom: 'Sauce tomate', cat: 'epicerie' },
    { id: 'sel', nom: 'Sel', cat: 'epicerie' },
    { id: 'semoule', nom: 'Semoule', cat: 'epicerie' },
    { id: 'soupe', nom: 'Soupe', cat: 'epicerie' },
    { id: 'spaghettis', nom: 'Spaghettis', cat: 'epicerie' },
    { id: 'sucre', nom: 'Sucre', cat: 'epicerie' },
    { id: 'the', nom: 'Thé', cat: 'epicerie' },
    { id: 'tisane', nom: 'Tisane', cat: 'epicerie' },
    { id: 'tortillas', nom: 'Tortillas', cat: 'epicerie' },
    { id: 'vanille', nom: 'Vanille', cat: 'epicerie' },
    { id: 'vinaigre', nom: 'Vinaigre', cat: 'epicerie' },
    { id: 'affligem', nom: 'Affligem', cat: 'boissons' },
    { id: 'beaujolais', nom: 'Beaujolais', cat: 'boissons' },
    { id: 'biere', nom: 'Bière', cat: 'boissons' },
    { id: 'bieres', nom: 'Bieres', cat: 'boissons' },
    { id: 'champagne', nom: 'Champagne', cat: 'boissons' },
    { id: 'cidre', nom: 'Cidre', cat: 'boissons' },
    { id: 'cognac', nom: 'Cognac', cat: 'boissons' },
    { id: 'eau', nom: 'Eau', cat: 'boissons' },
    { id: 'gewurztraminer', nom: 'Gewurztraminer', cat: 'boissons' },
    { id: 'isotonique', nom: 'Isotonique', cat: 'boissons' },
    { id: 'jus_de_fruits', nom: 'Jus de fruits', cat: 'boissons' },
    { id: 'limonade', nom: 'Limonade', cat: 'boissons' },
    { id: 'liqueur', nom: 'Liqueur', cat: 'boissons' },
    { id: 'pinard', nom: 'Pinard', cat: 'boissons' },
    { id: 'rhum', nom: 'Rhum', cat: 'boissons' },
    { id: 'schweppes', nom: 'Schweppes', cat: 'boissons' },
    { id: 'sirop', nom: 'Sirop', cat: 'boissons' },
    { id: 'soda', nom: 'Soda', cat: 'boissons' },
    { id: 'sprite', nom: 'Sprite', cat: 'boissons' },
    { id: 'vin', nom: 'Vin', cat: 'boissons' },
    { id: 'vodka', nom: 'Vodka', cat: 'boissons' },
    { id: 'whisky', nom: 'Whisky', cat: 'boissons' },
    { id: 'aspirine', nom: 'Aspirine', cat: 'hygiene' },
    { id: 'brosse', nom: 'Brosse', cat: 'hygiene' },
    { id: 'coton', nom: 'Coton', cat: 'hygiene' },
    { id: 'coton_tiges', nom: 'Coton-tiges', cat: 'hygiene' },
    { id: 'couches', nom: 'Couches', cat: 'hygiene' },
    { id: 'dentifrice', nom: 'Dentifrice', cat: 'hygiene' },
    { id: 'deodorant', nom: 'Déodorant', cat: 'hygiene' },
    { id: 'eucalyptus', nom: 'Eucalyptus', cat: 'hygiene' },
    { id: 'exfoliant', nom: 'Exfoliant', cat: 'hygiene' },
    { id: 'gel_douche', nom: 'Gel douche', cat: 'hygiene' },
    { id: 'laque', nom: 'Laque', cat: 'hygiene' },
    { id: 'lingettes', nom: 'Lingettes', cat: 'hygiene' },
    { id: 'lotion', nom: 'Lotion', cat: 'hygiene' },
    { id: 'mascara', nom: 'Mascara', cat: 'hygiene' },
    { id: 'mouchoirs', nom: 'Mouchoirs', cat: 'hygiene' },
    { id: 'peigne', nom: 'Peigne', cat: 'hygiene' },
    { id: 'rasoir', nom: 'Rasoir', cat: 'hygiene' },
    { id: 'rasoirs', nom: 'Rasoirs', cat: 'hygiene' },
    { id: 'savon', nom: 'Savon', cat: 'hygiene' },
    { id: 'schwarzkopf', nom: 'Schwarzkopf', cat: 'hygiene' },
    { id: 'shampoing', nom: 'Shampoing', cat: 'hygiene' },
    { id: 'talc', nom: 'Talc', cat: 'hygiene' },
    { id: 'tampons', nom: 'Tampons', cat: 'hygiene' },
    { id: 'vaseline', nom: 'Vaseline', cat: 'hygiene' },
    { id: 'vernis', nom: 'Vernis', cat: 'hygiene' },
    { id: 'vitamines', nom: 'Vitamines', cat: 'hygiene' },
    { id: 'adoucissant', nom: 'Adoucissant', cat: 'entretien' },
    { id: 'ajax', nom: 'Ajax', cat: 'entretien' },
    { id: 'aluminium', nom: 'Aluminium', cat: 'entretien' },
    { id: 'ampoules', nom: 'Ampoules', cat: 'entretien' },
    { id: 'assouplissant', nom: 'Assouplissant', cat: 'entretien' },
    { id: 'balai', nom: 'Balai', cat: 'entretien' },
    { id: 'cirage', nom: 'Cirage', cat: 'entretien' },
    { id: 'eponges', nom: 'Éponges', cat: 'entretien' },
    { id: 'essuie_tout', nom: 'Essuie-tout', cat: 'entretien' },
    { id: 'film_alimentaire', nom: 'Film alimentaire', cat: 'entretien' },
    { id: 'javel', nom: 'Javel', cat: 'entretien' },
    { id: 'lessive', nom: 'Lessive', cat: 'entretien' },
    { id: 'liquide_vaisselle', nom: 'Liquide vaisselle', cat: 'entretien' },
    { id: 'papier_aluminium', nom: 'Papier aluminium', cat: 'entretien' },
    { id: 'papier_toilette', nom: 'Papier toilette', cat: 'entretien' },
    { id: 'piles', nom: 'Piles', cat: 'entretien' },
    { id: 'sacs_poubelle', nom: 'Sacs poubelle', cat: 'entretien' },
    { id: 'spray', nom: 'Spray', cat: 'entretien' },
    { id: 'agenda', nom: 'Agenda', cat: 'divers' },
    { id: 'agrafeuse', nom: 'Agrafeuse', cat: 'divers' },
    { id: 'aiguille', nom: 'Aiguille', cat: 'divers' },
    { id: 'aimants', nom: 'Aimants', cat: 'divers' },
    { id: 'allumettes', nom: 'Allumettes', cat: 'divers' },
    { id: 'anorak', nom: 'Anorak', cat: 'divers' },
    { id: 'applique', nom: 'Applique', cat: 'divers' },
    { id: 'ardoise', nom: 'Ardoise', cat: 'divers' },
    { id: 'aspirateur', nom: 'Aspirateur', cat: 'divers' },
    { id: 'assiettes', nom: 'Assiettes', cat: 'divers' },
    { id: 'azote', nom: 'Azote', cat: 'divers' },
    { id: 'balance', nom: 'Balance', cat: 'divers' },
    { id: 'ballon', nom: 'Ballon', cat: 'divers' },
    { id: 'banjo', nom: 'Banjo', cat: 'divers' },
    { id: 'barbie', nom: 'Barbie', cat: 'divers' },
    { id: 'besace', nom: 'Besace', cat: 'divers' },
    { id: 'bidon', nom: 'Bidon', cat: 'divers' },
    { id: 'bijou', nom: 'Bijou', cat: 'divers' },
    { id: 'blackjack', nom: 'Blackjack', cat: 'divers' },
    { id: 'bocaux', nom: 'Bocaux', cat: 'divers' },
    { id: 'bouee', nom: 'Bouee', cat: 'divers' },
    { id: 'bougeoir', nom: 'Bougeoir', cat: 'divers' },
    { id: 'bougies', nom: 'Bougies', cat: 'divers' },
    { id: 'briquet', nom: 'Briquet', cat: 'divers' },
    { id: 'cadenas', nom: 'Cadenas', cat: 'divers' },
    { id: 'cadre', nom: 'Cadre', cat: 'divers' },
    { id: 'cahier', nom: 'Cahier', cat: 'divers' },
    { id: 'calculette', nom: 'Calculette', cat: 'divers' },
    { id: 'camera', nom: 'Camera', cat: 'divers' },
    { id: 'carnet', nom: 'Carnet', cat: 'divers' },
    { id: 'cartes', nom: 'Cartes', cat: 'divers' },
    { id: 'cartouches', nom: 'Cartouches', cat: 'divers' },
    { id: 'casquette', nom: 'Casquette', cat: 'divers' },
    { id: 'casserole', nom: 'Casserole', cat: 'divers' },
    { id: 'ceinture', nom: 'Ceinture', cat: 'divers' },
    { id: 'chalumeau', nom: 'Chalumeau', cat: 'divers' },
    { id: 'chapeau', nom: 'Chapeau', cat: 'divers' },
    { id: 'charbon', nom: 'Charbon', cat: 'divers' },
    { id: 'chargeur', nom: 'Chargeur', cat: 'divers' },
    { id: 'chaussettes', nom: 'Chaussettes', cat: 'divers' },
    { id: 'chronometre', nom: 'Chronometre', cat: 'divers' },
    { id: 'cintres', nom: 'Cintres', cat: 'divers' },
    { id: 'cisaille', nom: 'Cisaille', cat: 'divers' },
    { id: 'ciseaux', nom: 'Ciseaux', cat: 'divers' },
    { id: 'clous', nom: 'Clous', cat: 'divers' },
    { id: 'colle', nom: 'Colle', cat: 'divers' },
    { id: 'confettis', nom: 'Confettis', cat: 'divers' },
    { id: 'coquetier', nom: 'Coquetier', cat: 'divers' },
    { id: 'corde', nom: 'Corde', cat: 'divers' },
    { id: 'couette', nom: 'Couette', cat: 'divers' },
    { id: 'coussin', nom: 'Coussin', cat: 'divers' },
    { id: 'couteau', nom: 'Couteau', cat: 'divers' },
    { id: 'couverts', nom: 'Couverts', cat: 'divers' },
    { id: 'crampons', nom: 'Crampons', cat: 'divers' },
    { id: 'crayons', nom: 'Crayons', cat: 'divers' },
    { id: 'croquettes', nom: 'Croquettes', cat: 'divers' },
    { id: 'cuilleres', nom: 'Cuilleres', cat: 'divers' },
    { id: 'culottes', nom: 'Culottes', cat: 'divers' },
    { id: 'deguisement', nom: 'Deguisement', cat: 'divers' },
    { id: 'dictionnaire', nom: 'Dictionnaire', cat: 'divers' },
    { id: 'drapeau', nom: 'Drapeau', cat: 'divers' },
    { id: 'duvet', nom: 'Duvet', cat: 'divers' },
    { id: 'echelle', nom: 'Echelle', cat: 'divers' },
    { id: 'eclairage', nom: 'Eclairage', cat: 'divers' },
    { id: 'ecran', nom: 'Écran', cat: 'divers' },
    { id: 'ecrous', nom: 'Écrous', cat: 'divers' },
    { id: 'elastiques', nom: 'Élastiques', cat: 'divers' },
    { id: 'encens', nom: 'Encens', cat: 'divers' },
    { id: 'encre', nom: 'Encre', cat: 'divers' },
    { id: 'enveloppes', nom: 'Enveloppes', cat: 'divers' },
    { id: 'equerre', nom: 'Equerre', cat: 'divers' },
    { id: 'fenetre', nom: 'Fenetre', cat: 'divers' },
    { id: 'feutres', nom: 'Feutres', cat: 'divers' },
    { id: 'fixations', nom: 'Fixations', cat: 'divers' },
    { id: 'fleurs', nom: 'Fleurs', cat: 'divers' },
    { id: 'flute', nom: 'Flute', cat: 'divers' },
    { id: 'fourchettes', nom: 'Fourchettes', cat: 'divers' },
    { id: 'gants', nom: 'Gants', cat: 'divers' },
    { id: 'gobelets', nom: 'Gobelets', cat: 'divers' },
    { id: 'gomme', nom: 'Gomme', cat: 'divers' },
    { id: 'guirlande', nom: 'Guirlande', cat: 'divers' },
    { id: 'horloge', nom: 'Horloge', cat: 'divers' },
    { id: 'icewatch', nom: 'Icewatch', cat: 'divers' },
    { id: 'journal', nom: 'Journal', cat: 'divers' },
    { id: 'lame', nom: 'Lame', cat: 'divers' },
    { id: 'livre', nom: 'Livre', cat: 'divers' },
    { id: 'louche', nom: 'Louche', cat: 'divers' },
    { id: 'magazines', nom: 'Magazines', cat: 'divers' },
    { id: 'magnets', nom: 'Magnets', cat: 'divers' },
    { id: 'maillot', nom: 'Maillot', cat: 'divers' },
    { id: 'manette', nom: 'Manette', cat: 'divers' },
    { id: 'maniques', nom: 'Maniques', cat: 'divers' },
    { id: 'marmite', nom: 'Marmite', cat: 'divers' },
    { id: 'marteau', nom: 'Marteau', cat: 'divers' },
    { id: 'martinet', nom: 'Martinet', cat: 'divers' },
    { id: 'metre', nom: 'Metre', cat: 'divers' },
    { id: 'nappe', nom: 'Nappe', cat: 'divers' },
    { id: 'oreiller', nom: 'Oreiller', cat: 'divers' },
    { id: 'pailles', nom: 'Pailles', cat: 'divers' },
    { id: 'panier', nom: 'Panier', cat: 'divers' },
    { id: 'pantalon', nom: 'Pantalon', cat: 'divers' },
    { id: 'pantoufles', nom: 'Pantoufles', cat: 'divers' },
    { id: 'passoire', nom: 'Passoire', cat: 'divers' },
    { id: 'patchwork', nom: 'Patchwork', cat: 'divers' },
    { id: 'peinture', nom: 'Peinture', cat: 'divers' },
    { id: 'peluche', nom: 'Peluche', cat: 'divers' },
    { id: 'perruque', nom: 'Perruque', cat: 'divers' },
    { id: 'pinceaux', nom: 'Pinceaux', cat: 'divers' },
    { id: 'projecteur', nom: 'Projecteur', cat: 'divers' },
    { id: 'puzzle', nom: 'Puzzle', cat: 'divers' },
    { id: 'radiateur', nom: 'Radiateur', cat: 'divers' },
    { id: 'radio', nom: 'Radio', cat: 'divers' },
    { id: 'rateau', nom: 'Rateau', cat: 'divers' },
    { id: 'scanner', nom: 'Scanner', cat: 'divers' },
    { id: 'scie', nom: 'Scie', cat: 'divers' },
    { id: 'scotch', nom: 'Scotch', cat: 'divers' },
    { id: 'seau', nom: 'Seau', cat: 'divers' },
    { id: 'semelle', nom: 'Semelle', cat: 'divers' },
    { id: 'serviettes', nom: 'Serviettes', cat: 'divers' },
    { id: 'short', nom: 'Short', cat: 'divers' },
    { id: 'skate', nom: 'Skate', cat: 'divers' },
    { id: 'snowboard', nom: 'Snowboard', cat: 'divers' },
    { id: 'souris', nom: 'Souris', cat: 'divers' },
    { id: 'stylos', nom: 'Stylos', cat: 'divers' },
    { id: 'swatch', nom: 'Swatch', cat: 'divers' },
    { id: 'tapis', nom: 'Tapis', cat: 'divers' },
    { id: 'tasse', nom: 'Tasse', cat: 'divers' },
    { id: 'tissu', nom: 'Tissu', cat: 'divers' },
    { id: 'tongs', nom: 'Tongs', cat: 'divers' },
    { id: 'torchon', nom: 'Torchon', cat: 'divers' },
    { id: 'trombonnes', nom: 'Trombonnes', cat: 'divers' },
    { id: 'trousse', nom: 'Trousse', cat: 'divers' },
    { id: 'tshirt', nom: 'Tshirt', cat: 'divers' },
    { id: 'tuyau', nom: 'Tuyau', cat: 'divers' },
    { id: 'twister', nom: 'Twister', cat: 'divers' },
    { id: 'ukulele', nom: 'Ukulele', cat: 'divers' },
    { id: 'uniforme', nom: 'Uniforme', cat: 'divers' },
    { id: 'ustensile', nom: 'Ustensile', cat: 'divers' },
    { id: 'vaisselle', nom: 'Vaisselle', cat: 'divers' },
    { id: 'valise', nom: 'Valise', cat: 'divers' },
    { id: 'vaporisateur', nom: 'Vaporisateur', cat: 'divers' },
    { id: 'vase', nom: 'Vase', cat: 'divers' },
    { id: 'ventilateur', nom: 'Ventilateur', cat: 'divers' },
    { id: 'verres', nom: 'Verres', cat: 'divers' },
    { id: 'veste', nom: 'Veste', cat: 'divers' },
    { id: 'walkman', nom: 'Walkman', cat: 'divers' },
    { id: 'webcam', nom: 'Webcam', cat: 'divers' },
    { id: 'xbox', nom: 'Xbox', cat: 'divers' },
    { id: 'yoyo', nom: 'Yoyo', cat: 'divers' },
    { id: 'zinc', nom: 'Zinc', cat: 'divers' }
];

// --- 2. État de l'application (State) ---

let appState = {
    items: [], // Sera une fusion de defaultItems et de l'état utilisateur
    hideBought: false,
    theme: 'light'
};

// --- 3. Initialisation & LocalStorage ---

function init() {
    loadState();
    renderCategories();
    renderList();
    applyTheme();

    // Écouteurs d'événements globaux
    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('toggle-bought-btn').addEventListener('click', toggleHideBought);
    document.getElementById('reset-btn').addEventListener('click', resetList);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Fermer l'autocomplete si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            document.getElementById('autocomplete-list').classList.add('hidden');
        }
    });
}

function loadState() {
    const saved = localStorage.getItem('shopping_app_state');

    // Préparer les items : on prend la liste par défaut et on ajoute les propriétés d'état
    // Cela permet d'avoir toujours les items de base même si on vide le cache,
    // tout en gardant les sélections de l'utilisateur.

    let savedItemsState = {};
    let savedCustomItems = []; // [ {id, nom, cat, ...} ]
    let savedSettings = {};

    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            savedItemsState = parsed.itemsState || {}; // { 'pommes': { selected: true, bought: false } }
            savedCustomItems = parsed.customItems || [];
            savedSettings = parsed.settings || {};
        } catch (e) {
            console.error("Erreur lors du chargement de l'état :", e);
            // On pourrait effacer le localStorage corrompu ici si nécessaire
            // localStorage.removeItem('shopping_app_state');
        }
    }

    // Fusionner les items par défaut et les items personnalisés
    const allBaseItems = [...defaultItems, ...savedCustomItems];

    appState.items = allBaseItems.map(item => {
        const state = savedItemsState[item.id] || { selected: false, bought: false, quantity: '' };
        // Ensure quantity exists in state even if loading old data
        if (state.quantity === undefined) state.quantity = '';
        return { ...item, ...state };
    });

    // On garde une référence aux custom items pour pouvoir les sauvegarder à part
    appState.customItems = savedCustomItems;

    appState.hideBought = savedSettings.hideBought || false;
    appState.theme = savedSettings.theme || 'light';
}

function saveState() {
    // On ne sauvegarde que ce qui change (l'état des items et les réglages)
    const itemsState = {};
    appState.items.forEach(item => {
        if (item.selected || item.bought || item.quantity) {
            itemsState[item.id] = {
                selected: item.selected,
                bought: item.bought,
                quantity: item.quantity
            };
        }
    });

    const dataToSave = {
        itemsState: itemsState,
        customItems: appState.customItems,
        settings: {
            hideBought: appState.hideBought,
            theme: appState.theme
        }
    };

    localStorage.setItem('shopping_app_state', JSON.stringify(dataToSave));
    renderList(); // Re-rendu pour mettre à jour les compteurs
}

// --- 4. Rendu (View) ---

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';

    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'category-card';
        div.innerHTML = `
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${cat.nom}</span>
        `;
        div.onclick = (e) => {
            e.stopPropagation();
            showCategoryItems(cat.id);
        };
        grid.appendChild(div);
    });
}

function renderList() {
    const listToBuy = document.getElementById('list-to-buy');
    const listBought = document.getElementById('list-bought');
    const countToBuy = document.getElementById('count-to-buy');
    const countBought = document.getElementById('count-bought');
    const toggleBtn = document.getElementById('toggle-bought-btn');

    listToBuy.innerHTML = '';
    listBought.innerHTML = '';

    const itemsToBuy = appState.items.filter(i => i.selected && !i.bought);
    const itemsBought = appState.items.filter(i => i.selected && i.bought);

    // Mise à jour des compteurs
    countToBuy.textContent = `(${itemsToBuy.length})`;
    countBought.textContent = `(${itemsBought.length})`;

    // Rendu "À acheter"
    if (itemsToBuy.length === 0) {
        listToBuy.innerHTML = '<div class="empty-state">Ta liste est vide. Ajoute des articles !</div>';
    } else {
        itemsToBuy.forEach(item => listToBuy.appendChild(createItemElement(item)));
    }

    // Rendu "Acheté"
    if (appState.hideBought) {
        listBought.classList.add('hidden-visually');
        toggleBtn.textContent = 'Afficher';
    } else {
        listBought.classList.remove('hidden-visually');
        toggleBtn.textContent = 'Masquer';
        itemsBought.forEach(item => listBought.appendChild(createItemElement(item)));
    }
}

function createItemElement(item) {
    const div = document.createElement('div');
    div.className = `shopping-item ${item.bought ? 'bought' : ''}`;
    // On click of the main div, toggle status (unless clicking input)
    div.onclick = (e) => {
        if (e.target.tagName !== 'INPUT') {
            toggleItemStatus(item.id);
        }
    };

    const catName = categories.find(c => c.id === item.cat)?.nom || '';

    div.innerHTML = `
        <div class="checkbox"></div>
        <div class="item-info">
            <div class="item-name">${item.nom}</div>
            <div class="item-cat">${catName}</div>
        </div>
        <input type="text" 
               class="item-quantity" 
               placeholder="Qte" 
               value="${item.quantity || ''}" 
               aria-label="Quantité pour ${item.nom}"
               enterkeyhint="done"
        >
    `;

    // Add event listener for quantity
    const input = div.querySelector('.item-quantity');
    input.addEventListener('input', (e) => {
        updateItemQuantity(item.id, e.target.value);
    });
    // Prevent toggling when clicking input (handled by e.target check above too, but good practice)
    input.addEventListener('click', (e) => e.stopPropagation());

    return div;
}

function updateItemQuantity(id, val) {
    const item = appState.items.find(i => i.id === id);
    if (item) {
        item.quantity = val;
        saveState();
    }
}

// --- 5. Actions & Événements ---

function handleSearch(e) {
    const val = e.target.value.toLowerCase();
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = '';

    if (!val) {
        list.classList.add('hidden');
        return;
    }

    // Filtre les items qui contiennent la recherche
    const matches = appState.items.filter(item => item.nom.toLowerCase().includes(val));

    if (matches.length > 0) {
        list.classList.remove('hidden');
        matches.forEach(item => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';
            // Met en gras la partie correspondante (simple)
            div.innerHTML = `<strong>${item.nom}</strong> <small>(${categories.find(c => c.id === item.cat)?.nom || 'Divers'})</small>`;
            div.onclick = () => {
                selectItem(item.id);
                document.getElementById('search-input').value = '';
                list.classList.add('hidden');
            };
            list.appendChild(div);
        });
    } else {
        // Aucun résultat : proposer d'ajouter
        list.classList.remove('hidden');
        const div = document.createElement('div');
        div.className = 'autocomplete-item add-custom-item';
        div.innerHTML = `➕ Ajouter "<strong>${val}</strong>"`;
        div.onclick = () => {
            addCustomItem(val);
        };
        list.appendChild(div);
    }
}

function selectItem(id) {
    const item = appState.items.find(i => i.id === id);
    if (item) {
        item.selected = true;
        item.bought = false; // Si on le rajoute, on considère qu'il est à acheter
        saveState();
    }
}

function addCustomItem(name) {
    // Capitaliser la première lettre
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    const newItem = {
        id: 'custom_' + Date.now(),
        nom: formattedName,
        cat: 'divers', // Catégorie par défaut
        selected: true,
        bought: false
    };

    // Ajouter aux listes
    appState.customItems.push(newItem);
    appState.items.push(newItem);

    saveState();

    // Nettoyer la recherche
    document.getElementById('search-input').value = '';
    document.getElementById('autocomplete-list').classList.add('hidden');
}

function toggleItemStatus(id) {
    const item = appState.items.find(i => i.id === id);
    if (item) {
        item.bought = !item.bought;
        saveState();
    }
}

function showCategoryItems(catId) {
    // Pour simplifier, on affiche une "fausse" recherche avec tous les items de la catégorie
    // Ou on pourrait ouvrir une modale. Ici, on va filtrer l'autocomplete pour montrer les items.
    const catItems = appState.items.filter(i => i.cat === catId);
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    list.classList.remove('hidden');

    // Ajout d'un titre
    const title = document.createElement('div');
    title.style.padding = '10px';
    title.style.fontWeight = 'bold';
    title.style.backgroundColor = '#eee';
    title.textContent = categories.find(c => c.id === catId).nom;
    list.appendChild(title);

    catItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'autocomplete-item';
        // Indiquer si déjà dans la liste
        const status = item.selected ? (item.bought ? '✅' : '🛒') : '➕';
        div.innerHTML = `${status} <strong>${item.nom}</strong>`;
        div.onclick = () => {
            if (!item.selected) selectItem(item.id);
            // On laisse la liste ouverte pour en ajouter d'autres
            div.innerHTML = `🛒 <strong>${item.nom}</strong>`;
        };
        list.appendChild(div);
    });
}

function toggleHideBought() {
    appState.hideBought = !appState.hideBought;
    saveState();
}

function resetList() {
    if (confirm('Veux-tu vraiment vider toute ta liste ?')) {
        appState.items.forEach(i => {
            i.selected = false;
            i.bought = false;
        });
        saveState();
    }
}

function toggleTheme() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    saveState();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', appState.theme);
    document.getElementById('theme-toggle').textContent = appState.theme === 'light' ? '🌙' : '☀️';
}

// Lancement
init();
