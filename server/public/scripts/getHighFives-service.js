myApp.service('GetHighFives', function(){
  var skillLevel = Math.floor(Math.random() * 10 )+ 1;
  var successfulHighFives = 0;

  this.getSkillLevel = function(){
    return skillLevel;
  };

  this.getSuccessful = function(){
    return successfulHighFives;
  };

  this.randomNumber = function(){
    return Math.floor(Math.random() * 10 )+ 1;
  };

  this.highFives = function(skill,qualityOfHighFive){
    if(qualityOfHighFive>=skill){
      successfulHighFives++;
    }
  };
});
