var myApp = angular.module('myApp',['ngRoute']);
 myApp.controller('HighFives', function(GetHighFives){
   //this controller is no longer used
   var vm = this;

  //  vm.skillLevel = GetHighFives.getSkillLevel();
   vm.successful = GetHighFives.getSuccessful();
   vm.total = GetHighFives.getTotal();
  //  vm.highFiveMe = function(){
  //    vm.quality = GetHighFives.randomNumber(1,10);
  //    GetHighFives.highFives(vm.skillLevel, vm.quality);
  //    vm.successful = GetHighFives.getSuccessful();
  //    vm.total = GetHighFives.getTotal();
  //  };
 });


myApp.config(function($routeProvider, $locationProvider){

   $routeProvider.when('/',{
     templateUrl: 'views/pages/mainTemplate.html',
     controller: 'HighFives'
   }).when('/barry',{
     templateUrl: 'views/pages/template.html',
     controller: 'Barry'
   }).when('/lauren',{
     templateUrl: 'views/pages/template.html',
     controller: 'Lauren'
   }).when('/olly',{
     templateUrl: 'views/pages/template.html',
     controller: 'Olly'
   }).otherwise('/');

   $locationProvider.html5Mode(true);
 });

 myApp.controller('Barry', function($scope, $route, GetHighFives){

   $scope.highFiveBuddy = {
     imageLink: 'http://images1.fanpop.com/images/photos/2500000/hi-5-high-five-2524598-1600-1200.jpg',
     description: 'This is Barry, the high fiving bear! He loves to give high fives!',
     name: 'Barry'
   };

   var vm = $scope;

   GetHighFives.setSkillLevel(1,10);
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

 myApp.controller('Lauren', function($scope, $route, GetHighFives){
   $scope.highFiveBuddy = {
     imageLink: 'https://s-media-cache-ak0.pinimg.com/originals/69/98/1d/69981d5d61448c208fbad3b8c86c7499.jpg',
     description: 'Lauren the lioness loves laying around! She also loves high fives!',
     name: 'Lauren'
   };
   var vm = $scope;

   GetHighFives.setSkillLevel(4,10);
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

 myApp.controller('Olly', function($scope, $route, GetHighFives){
   $scope.highFiveBuddy = {
     imageLink: 'https://gladallover.files.wordpress.com/2013/01/sea_otter1.jpg?w=646',
     description: 'Olly the otter is the master of swimming and high fives!',
     name: 'Olly'
   };
   var vm = $scope;

   GetHighFives.setSkillLevel(6,10);
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
