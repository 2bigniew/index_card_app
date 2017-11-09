(function(){
    
    angular
        .module("IndexCardApp")
        .controller("indexCardCtrl", indexCardController);
    
        indexCardController.$inject = ['dataService', 'indexCenter'];
    
        function indexCardController(dataService, indexCenter){
         
            var vm = this;
            vm.data = dataService.wordsData;
            vm.indexCenter = indexCenter;
            vm.activeCard = 0;
            vm.setRandomCard = setRandomCard;
            vm.setNextCard = setNextCard;
            vm.setPreviousCard = setPreviousCard;
            vm.polishEnglish = true;
            vm.englishPolish = false;
            vm.plAndEn = plAndEn;
            vm.enAndPl = enAndPl;
            
            function setRandomCard(){
                   //wylosować 1 z 514 rekordów
                vm.activeCard = Math.floor((Math.random() * (vm.data.length-1)));
            }
            
            function setNextCard(){
                if(vm.activeCard === dataService.wordsData.length-1){
                    vm.activeCard=0;
                }else{
                    vm.activeCard = vm.activeCard+1;
                }   
            }
            
            function setPreviousCard(){
                if(vm.activeCard === 0){
                    vm.activeCard = dataService.wordsData.length-1;   
                }else{
                    vm.activeCard = vm.activeCard-1;
                }
            }
            
            function plAndEn(){
                vm.polishEnglish = true;
                vm.englishPolish = false;
            };
            
            function enAndPl(){
                vm.polishEnglish = false;
                vm.englishPolish = true; 
            }
           
        }  
})();