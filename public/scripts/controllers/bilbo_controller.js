myApp.controller('BilboController', function(HighfiveService){
    var vm = this;
    vm.sayHello = function(){
        alert('Hey there, I\'m Bilbo Baggins!');
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