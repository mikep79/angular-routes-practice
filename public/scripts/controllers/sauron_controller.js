myApp.controller('SauronController', function(){
    var vm = this;
    
    vm.playSound = function(){
        var sound = new Audio('sounds/work.wav');
        sound.play();
    };
});