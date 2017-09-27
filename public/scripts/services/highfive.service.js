myApp.service('HighfiveService', function(){
    var self = this;

    // call twice per character, store as two variables
    self.setNumber = function(){
        return Math.ceil(Math.random()*10);
    };
});