//Creat angular app
var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

//config is used to config the app
//in this case, I am using it to config the routes
myApp.config(function($routeProvider, $locationProvider){

   $routeProvider.when('/',{
     templateUrl: 'views/pages/mainTemplate.html',
     controller: 'MainCtrl as mc'
   }).when('/barry',{
     templateUrl: 'views/pages/template.html',
     controller: 'BarryCtrl as bc'
   }).when('/lauren',{
     templateUrl: 'views/pages/template.html',
     controller: 'LaurenCtrl as lc'
   }).when('/olly',{
     templateUrl: 'views/pages/template.html',
     controller: 'OllyCtrl as oc'
   }).otherwise('/');

   $locationProvider.html5Mode(true); //makes it so we don't need '#!' in the urls
 });

 //all animal controllers look the same besides skill of animal
 myApp.controller('BarryCtrl', function($scope, GetHighFives){
   var vm = $scope;
   //This is where the template gets all the info
   //each animal has this object
   vm.highFiveBuddy = {
     imageLink: 'http://images1.fanpop.com/images/photos/2500000/hi-5-high-five-2524598-1600-1200.jpg',
     description: 'This is Barry, the high fiving bear! He loves to give high fives!',
     name: 'Barry'
   };

   GetHighFives.setSkillLevel(1,10); //sets the skill level of the animal
   vm.skillLevel = GetHighFives.getSkillLevel(); //binds that skill level with a variable and shows it on the dom
   vm.successful = GetHighFives.getSuccessful(); //shows the # of total successful high fives
   vm.total = GetHighFives.getTotal(); //shows total # of high fives
   //function to "run" the high five and see if its successful
   vm.highFiveMe = function(){
     vm.quality = GetHighFives.randomNumber(1,10); //gets the quality of the high five
     GetHighFives.highFives(vm.skillLevel, vm.quality); //tests the high five to see if its good
     //next two update the # of successful high fives and the total # of high fives
     //this way we know immediately if the high five was successful or not
     vm.successful = GetHighFives.getSuccessful();
     vm.total = GetHighFives.getTotal();
   };

 });

 myApp.controller('LaurenCtrl', function($scope, GetHighFives){
   var vm = $scope;

   vm.highFiveBuddy = {
     imageLink: 'https://s-media-cache-ak0.pinimg.com/originals/69/98/1d/69981d5d61448c208fbad3b8c86c7499.jpg',
     description: 'Lauren the lioness loves laying around! She also loves high fives!',
     name: 'Lauren'
   };

   GetHighFives.setSkillLevel(4,10); //higher skill level
   vm.skillLevel = GetHighFives.getSkillLevel();
   vm.successful = GetHighFives.getSuccessful();
   vm.total = GetHighFives.getTotal();
   vm.highFiveMe = function(){
     vm.quality = GetHighFives.randomNumber(1,10);
     GetHighFives.highFives(vm.skillLevel, vm.quality);
     vm.successful = GetHighFives.getSuccessful();
     vm.total = GetHighFives.getTotal();
   };
 });

 myApp.controller('OllyCtrl', function($scope, GetHighFives){
   var vm = $scope;

   vm.highFiveBuddy = {
     imageLink: 'https://gladallover.files.wordpress.com/2013/01/sea_otter1.jpg?w=646',
     description: 'Olly the otter is the master of swimming and high fives!',
     name: 'Olly'
   };

   GetHighFives.setSkillLevel(6,10); //higher skill level
   vm.successful = GetHighFives.getSuccessful();
   vm.skillLevel = GetHighFives.getSkillLevel();
   vm.total = GetHighFives.getTotal();
   vm.highFiveMe = function(){
     vm.quality = GetHighFives.randomNumber(1,10);
     GetHighFives.highFives(vm.skillLevel, vm.quality);
     vm.successful = GetHighFives.getSuccessful();
     vm.total = GetHighFives.getTotal();
   };
 });

myApp.controller('MainCtrl',function(GetHighFives){
  var vm = this;

  vm.reset = GetHighFives.resetAll;
});
