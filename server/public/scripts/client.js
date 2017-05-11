var myApp = angular.module('myApp',[]);
 myApp.controller('HighFives', function(GetHighFives){
   var vm = this;
   vm.skillLevel = GetHighFives.getSkillLevel();
   vm.successful = GetHighFives.getSuccessful();
   vm.highFiveMe = function(){
     vm.checkSuccess = vm.successful;
     vm.quality = GetHighFives.randomNumber();
     GetHighFives.highFives(vm.skillLevel, vm.quality);
     vm.successful = GetHighFives.getSuccessful();
     if(vm.successful>vm.checkSuccess){
       vm.response = 'You did it!';
     }
     else{
       vm.response = 'So close!';
     }
   };
 });
