myApp.service('GetHighFives', function(){
  //global service vars
  var skillLevel = 0;
  var successfulHighFives = 0;
  var total = 0;

  //returns the skill level so we can access it in the controller
  this.getSkillLevel = function(){
    return skillLevel;
  };

  //sets a new skill level
  //takes in a max and a min so different animals can have different skill levels
  this.setSkillLevel = function(max, min){
    skillLevel = this.randomNumber(max,min);
  };

  //this returns the number of successful high fives
  this.getSuccessful = function(){
    return successfulHighFives;
  };

  this.resetAll = function(){
    total = 0;
    successfulHighFives = 0;
  };

  //this returns the total number of high fives attempted
  this.getTotal = function(){
    return total;
  };

  //random number function found on the internet
  //used in the controller to get a random quality
  //could have a getQuality function
  this.randomNumber = function(max,min){
    return Math.floor(Math.random() * (max - min)) + min;
  };

  //this function tests the high five to see if is successful or not
  //takes in a skill level and a quality of high five
  this.highFives = function(skill,qualityOfHighFive){
    total++; //total is incremented regardless of if the high five is successful
    //if the quality of the high five is greater than or equal to the skill then it is a successful high five
    if(qualityOfHighFive>=skill){
      successfulHighFives++;
    }
  };
});
