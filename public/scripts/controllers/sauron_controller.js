myApp.controller('SauronController', function(){
    var vm = this;
    vm.message = true;

    vm.playSound = function(){
        var sound = new Audio('sounds/work.wav');
        sound.play();
    };
    
    vm.showMessage = function(){
        vm.message = !vm.message;
    };
});