myApp.service('HighfiveService', function(){
    var self = this;

    self.skillLevelFrodo = Math.ceil(Math.random()*10);
    self.skillLevelBilbo = Math.ceil(Math.random()*10);
    self.skillLevelSauron = Math.ceil(Math.random()*10);
    
    self.frodoCounter = 0;

    self.quality = function(){
        var qualityNumber = Math.ceil(Math.random()*10);
        if (self.skillLevelBilbo <= qualityNumber){
            self.frodoCounter++;
        }
        return self.frodoCounter;
    };
});