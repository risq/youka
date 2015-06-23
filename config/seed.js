/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Valentin',
    email: 'test1@test.com',
    password: 'test',
    age: 24,
    experience: 3,
    position: 'Développeur',
    specialities: 'Informatique - Programmation - Javascript - PHP- Angular',
    birthDate: '18 Mars 1991',
    address: '25 Rue Président Favre, 74000 Annecy',
    telephone: '0673886411',
    description: 'Je m\'apelle Valentin et je suis passionné par mon travail. J\'aime également la musique que je pratique depuis que je suis petit. J\'adore la soul et le funk. Pendant mon temps libre, je pratique les jeux vidéos avec certains amis et je passe du temps avec ma copine. Plus tard, je souhaite m\'installer aux Pays-Bas, pays que j\'affectionne tout particulièrement.',
    img: '/assets/images/users/h1.jpg'
  }, {
    provider: 'local',
    name: 'Julia',
    email: 'test2@test.com',
    password: 'test',
    age: 23,
    experience: 2,
    position: 'Graphiste',
    specialities: 'Graphisme - Edition - Publicité',
    birthDate: '7 Août 1992',
    address: '29 Avenue Montaigne, 74600 Seynod',
    telephone: '0685392710',
    description: 'Je suis passionnée de graphisme et de typographie. Je m\'intéresse aussi à la mode : j\'aime beaucoup m\'en inspirer dans mes créations, surtout en créant des patterns et des motifs. J\'adore voyager à travers le monde et découvrir de novueaux endroits. L\'année dernière, je suis tombée amoureuse de la thailande : j\'ai pu nager avec des requins et des tortues, c\'était dingue !',
    img: '/assets/images/users/f1.jpg'
  }, {
    provider: 'local',
    name: 'Hugo',
    email: 'test3@test.com',
    password: 'test',
    age: 24,
    experience: 3,
    position: 'CEO',
    specialities: 'Management - Finance - Relation client',
    birthDate: '6 Mai 1974',
    address: '33 Allée du Parmelan, 74000 Annecy',
    telephone: '0687492215',
    description: 'J\'ai monté ma société à l\'âge de 24ans. J\'ai beaucoup appris par moi-même et j\'ai obtenu la confiance de mes clients au fur et à mesure des années. Je suis ravie d\'être arrivé là où j\'en suis actuellement. Je gère une société qui est en pleine expansion et j\'espère sous peu pouvoir nous exposer un peu plus à l\'étranger.',
    img: '/assets/images/users/h2.jpg'
  }, {
    provider: 'local',
    name: 'Alex',
    email: 'test4@test.com',
    password: 'test',
    age: 48,
    experience: 3,
    position: 'Manager',
    specialities: 'Informatique - Planification - Webdesign - Programmation',
    birthDate: '28 Octobre 1967',
    address: '34 Route du Soleil, 74245 Sillingy',
    telephone: '0684503920',
    description: 'Je pratique la peinture et le yoga pendant mon temps libre. Je suis aussi grand amateur de photographie que je pratique lors de mes sorties ou vacances. Papa depuis peu, je passe beaucoup de temps avec ma famille et mon fils.',
    img: '/assets/images/users/h3.jpg'
  }, {
    provider: 'local',
    name: 'Clara',
    email: 'test5@test.com',
    password: 'test',
    age: 20,
    experience: 1,
    position: 'Graphiste',
    specialities: 'Graphisme - Edition - Publicité - Multimédia',
    birthDate: '4 Décembre 1995',
    address: '43 Rue du Lac, 74000 Annecy',
    telephone: '0663774311',
    description: 'Grande passionnée de design et de graphisme, je vais souvent au musée pour trouver mon inspiration et admirer de nouveaux artistes. Je suis très intéressée par le Japon, je suis en ce moment même entrain de me spécialiser dans la calligraphie japonaise. Je pratique aussi les jeux vidéos et plus particulièrement les jeux mangas.',
    img: '/assets/images/users/f2.jpg'
  }, {
    provider: 'local',
    name: 'Chloé',
    email: 'test6@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Je me décris comme sympathique, avenante et souriante :) Je mets tout mon savoir-faire et ma joie dans mon travail, que je réalise avec plaisir. Mon seul souhait est de satisfaire les clients.',
    img: '/assets/images/users/f3.jpg'
  }, {
    provider: 'local',
    name: 'Nathan',
    email: 'test7@test.com',
    password: 'test',
    age: 32,
    experience: 5,
    position: 'CFO',
    specialities: 'Finance - Marketing',
    birthDate: '19 Mai 1983',
    address: '55 Route des Creuses, 74000 Annecy',
    telephone: '0684503920',
    description: 'Je suis intéressée par les belles voitures et les montres de luxe. Je pars souvent en vacances dans mon chalet à Megève et dans le sud dans ma villa secondaire. Je suis père de trois enfants et marié depuis 4ans.',
    img: '/assets/images/users/h4.jpg'
  }, {
    provider: 'local',
    name: 'Aurélie',
    email: 'test8@test.com',
    password: 'test',
    age: 24,
    experience: 3,
    position: 'Motion Designer',
    specialities: 'Motion - Post-production - Création - Animation 3D',
    birthDate: '6 Novembre 1991',
    address: '36 Avenue de la Jonquille, 74000 Annecy',
    telephone: '0698372910',
    description: 'Je suis fan de dessins animés et je participe chaque année au Festival d\'Animation d\'Annecy. J\'ai déjà remporté plusieurs prix pour mes créations. Mon film préféré est Shrek et Monstres & Cie. Je collectionne les peluches de ces films :)',
    img: '/assets/images/users/f4.jpg'
  }, {
    provider: 'local',
    name: 'Emilie',
    email: 'test9@test.com',
    password: 'test',
    age: 22,
    experience: 1,
    position: 'Illustratrice',
    specialities: 'Illustration - Typographie- Graphisme - Layout',
    birthDate: '18 Avril 1993',
    address: '6 Rue des Lilas, 74600 Quintal',
    telephone: '0687493020',
    description: 'Je pratique la randonnée et le sport en compétition : j\'aime le challenge et les défis. Je dessine beaucoup compte tenu de mon travail, et m\'inpire en allant visiter des expositions dans la région. J\'aime beaucoup Kanako, l\'illustratrice de MyLittleParis.',
    img: '/assets/images/users/f5.jpg'
  }, {
    provider: 'local',
    name: 'Samuel',
    email: 'test10@test.com',
    password: 'test',
    age: 32,
    experience: 6,
    position: 'Responsable',
    specialities: 'Management - Planification - Contrôle qualité',
    birthDate: '2 Février 1983',
    address: '38 Avenue de Genève, 74000 Annecy',
    telephone: '0683228176',
    description: 'Je suis Samuel, et je me décris comme un mec normal, bien dans sa peau et dans ses baskets. Je me prends pas la tête et je me détends en pratiquant du parapente le weekend chez mon frère qui habite dans la montagne. Je ne peux me passer de cette sensation de liberté et de légèreté dans les airs. A terme je souhaiterais enseigner ce sport aux plus jeunes, et pourquoi pas un jour participer à des compétitions si je deviens bon qui sait haha.',
    img: '/assets/images/users/h5.jpg'
  }, {
    provider: 'local',
    name: 'Emma',
    email: 'test11@test.com',
    password: 'test',
    age: 35,
    experience: 2,
    position: 'Web Designer',
    specialities: 'Webdesign - Graphisme - Typographie - Motion Design',
    birthDate: '11 Août 1980',
    address: '28 Faubourg Ste Claire, 74000 Annecy',
    telephone: '0684201833',
    description: 'Je n\'ai pas beaucoup de temps libre, par conséquent mes activités sont plutôt simples : dessiner, peindre, et écouter de la musique. Le soir je regarde la télé ou des films avec mon chat Pinpon. ',
    img: '/assets/images/users/f6.jpg'
  }, {
    provider: 'local',
    name: 'Victor',
    email: 'test12@test.com',
    password: 'test',
    age: 26,
    experience: 1,
    position: 'Digital Manager',
    specialities: 'Management- Digital - Multimédia - Marketing',
    birthDate: '28 Avril 1989',
    address: '73 Avenue des Ronces, 74600 Seynod',
    telephone: '0694382910',
    description: 'Je fais du piano et de la basse depuis que je suis petit : vous ne le savez peut être pas mais j\'ai mon propre groupe de musique. On fait souvent des petites tournées le weekend dans des bars locaux. D\'ailleurs, je suis à la recherche d\'une chanteuse : si l\'une d\'entre vous est intéressée mesdames ou mesdemoiselles faites-le savoir ^^.',
    img: '/assets/images/users/h7.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Jérémy',
    email: 'admin@admin.com',
    password: 'admin',
    age: 38,
    experience: 4,
    position: 'Développeur',
    specialities: 'Informatique - Code - Php MySqL - Javascript - Wordpress',
    birthDate: '2 Janvier 1977',
    address: '1 Rue du Pont, 74000 Annecy',
    telephone: '0674392027',
    description: 'Je suis Jérémy et j\'adore le code. J\'aime bien regarder des tutos sur Youtube et les reproduire après chez moi, dans mes projets et mes réalisations. Sinon j\'adore préparer des bons petits plats à ma copine Vathana : on aime beaucoup les plats mexicains et cubains. On fait aussi de la salsa ensemble au Barco Latino, un bar qui propose des musiques latines où on peut danser toute la nuit.',
    img: '/assets/images/users/h8.jpg'
  }, function() {
      console.log('finished populating users');
    }
  );
});
