(function(){
    
    angular
        .module("IndexCardApp")
        .controller("welcomeCtrl", welcomeController);
    
    welcomeController.$inject = ['indexCenter'];
    
    
    function welcomeController(indexCenter){
        var vm = this;
        vm.indexCenter=indexCenter;
        
    }
    
    
})();