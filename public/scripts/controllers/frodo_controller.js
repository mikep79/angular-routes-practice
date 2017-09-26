myApp.controller('FrodoController', function(HighfiveService){
    var vm = this;
    vm.message = false;
    vm.showMessage = function(){
        vm.message = !vm.message;
    };
    
    HighfiveService.quality();
    
});