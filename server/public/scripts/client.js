var myApp = angular.module('myApp',[]);
 myApp.controller('HighFives', function(GetHighFives){
   var vm = this;
   vm.skillLevel = GetHighFives.getSkillLevel();
   vm.successful = GetHighFives.getSuccessful();
   vm.total = GetHighFives.getTotal();
   vm.highFiveMe = function(){
     vm.checkSuccess = vm.successful;
     vm.quality = GetHighFives.randomNumber(1,10);
     GetHighFives.highFives(vm.skillLevel, vm.quality);
     vm.successful = GetHighFives.getSuccessful();
     vm.total = GetHighFives.getTotal();
   };
 });
