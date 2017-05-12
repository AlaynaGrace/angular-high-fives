var myApp = angular.module('myApp',['ngRoute']);
 myApp.controller('HighFives', function(GetHighFives){
   //this controller is no longer used
   var vm = this;

  //  vm.skillLevel = GetHighFives.getSkillLevel();
   vm.successful = GetHighFives.getSuccessful();
   vm.total = GetHighFives.getTotal();
   vm.highFiveMe = function(){
     vm.quality = GetHighFives.randomNumber(1,10);
     GetHighFives.highFives(vm.skillLevel, vm.quality);
     vm.successful = GetHighFives.getSuccessful();
     vm.total = GetHighFives.getTotal();
   };
 });


myApp.config(function($routeProvider){
  var templateToUse = "<img ng-src='{{highFiveBuddy.imageLink}}'>"+
   "<p>{{highFiveBuddy.description}}</p>"+
   "<p>{{highFiveBuddy.name}}'s high five skill level: {{skillLevel}}</p>" +
   "<p>Click the button below to {{highFiveBuddy.name}} high five!</p>" +
   "<button class='btn' ng-click='highFiveMe()'><img src='https://www.spreadshirt.com/image-server/v1/designs/12910541,width=178,height=178/high-five-hand-sign-high-5-hand-gesture-sign-langu.png'></button>" +
   "<h3>You've made {{successful}} out of {{total}} high fives</h3>";

  var mainTemplate = "<h2> Welcome! </h2>";

   $routeProvider.when('/',{
     template: mainTemplate,
     controller: 'HighFives'
   }).when('/barry',{
     template: templateToUse,
     controller: 'Barry'
   }).when('/lauren',{
     template: templateToUse,
     controller: 'Lauren'
   }).when('/olly',{
     template: templateToUse,
     controller: 'Olly'
   });
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
