(function(){
    
    angular
        .module("IndexCardApp")
        .controller("navCtrl", navController);
    
        navController.$inject = ["indexCenter"];
    
        function navController(indexCenter){
            var vm = this;
            vm.indexCenter = indexCenter;
            
        }
    
})();