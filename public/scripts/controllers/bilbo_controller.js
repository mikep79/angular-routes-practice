myApp.controller('BilboController', function(HighfiveService){
    var vm = this;
    vm.sayHello = function(){
        alert('Hey there, I\'m Bilbo Baggins!');
    };
    console.log(HighfiveService.skillLevelBilbo);
});