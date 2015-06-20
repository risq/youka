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
    name: 'Mathieu',
    email: 'test1@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h1.jpg'
  }, {
    provider: 'local',
    name: 'Océanne',
    email: 'test2@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/f1.jpg'
  }, {
    provider: 'local',
    name: 'Antoine',
    email: 'test3@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h2.jpg'
  }, {
    provider: 'local',
    name: 'Alex',
    email: 'test4@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h3.jpg'
  }, {
    provider: 'local',
    name: 'Clara',
    email: 'test5@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
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
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/f3.jpg'
  }, {
    provider: 'local',
    name: 'Nathan',
    email: 'test7@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h4.jpg'
  }, {
    provider: 'local',
    name: 'Aurélie',
    email: 'test8@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/f4.jpg'
  }, {
    provider: 'local',
    name: 'Emilie',
    email: 'test9@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/f5.jpg'
  }, {
    provider: 'local',
    name: 'Samuel',
    email: 'test10@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h5.jpg'
  }, {
    provider: 'local',
    name: 'Emma',
    email: 'test11@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/f6.jpg'
  }, {
    provider: 'local',
    name: 'Victor',
    email: 'test12@test.com',
    password: 'test',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h6.jpg'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Jérémy',
    email: 'admin@admin.com',
    password: 'admin',
    age: 28,
    experience: 3,
    position: 'Business Analyst',
    specialities: 'Informatique - Gestion des ressources humaines - Planification - Finance - Marketing',
    birthDate: '18 Mars 1987',
    address: '11 Avenue des Tulipes, 74000 Annecy',
    telephone: '0684503920',
    description: 'Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.',
    img: '/assets/images/users/h7.jpg'
  }, function() {
      console.log('finished populating users');
    }
  );
});