myApp.controller('FrodoController', function(HighfiveService){
    // view code
    var vm = this;
    vm.message = false;
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
        // game: to 10
        // if (vm.totalCount === 10) {
        //     if (vm.successCount >= 7) {
        //         alert('you won!');
        //     } else {
        //         alert('you lost :(');
        //     }
        // }
    };
});