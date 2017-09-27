myApp.controller('SauronController', function(HighfiveService){
    var vm = this;
    vm.message = true;

    vm.playSound = function(){
        var sound = new Audio('sounds/work.wav');
        sound.play();
    };    
    vm.showMessage = function(){
        vm.message = !vm.message;
    };

    // game code
    vm.successCount = 0;
    vm.totalCount = 0;
    vm.skillLevel = HighfiveService.setNumber();
    console.log('Skill level: ', vm.skillLevel);
    vm.highFive = function(){
        var quality = HighfiveService.setNumber();
        console.log('quality: ', quality);
        if (quality >= vm.skillLevel){
            vm.successCount++;
        }
        vm.totalCount++;
    };
});