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
    name: 'Test User1',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User2',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User3',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User4',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User5',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User6',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User7',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User8',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User9',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User10',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User11',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    name: 'Test User12',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
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
    img: 'http://www.corporatetraveller.ca/assets/images/profile-placeholder.gif'
  }, function() {
      console.log('finished populating users');
    }
  );
});