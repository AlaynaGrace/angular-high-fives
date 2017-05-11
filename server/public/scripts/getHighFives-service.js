myApp.service('GetHighFives', function(){
  var skillLevel = Math.floor(Math.random() * 10 )+ 1;
  var successfulHighFives = 0;
  var total = 0;

  this.getSkillLevel = function(){
    return skillLevel;
  };

  this.getSuccessful = function(){
    return successfulHighFives;
  };

  this.getTotal = function(){
    return total;
  };

  this.randomNumber = function(max,min){
    return Math.floor(Math.random() * (max - min)) + min;
  };

  this.highFives = function(skill,qualityOfHighFive){
    total++;
    if(qualityOfHighFive>=skill){
      successfulHighFives++;
    }
  };
});
