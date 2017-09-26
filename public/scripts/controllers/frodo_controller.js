myApp.controller('FrodoController', function(){
    var vm = this;
    vm.message = false;
    vm.showMessage = function(){
        vm.message = !vm.message;
    };
});