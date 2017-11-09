(function(){
    
    angular
        .module("IndexCardApp")
        .controller("gameCtrl", gameController);
    
        gameController.$inject = ['dataService', 'indexCenter'];
    
        function gameController(dataService, indexCenter){
            var vm = this;
            
            vm.data = dataService.wordsData;
            vm.indexCenter = indexCenter;
            vm.activeCard = Math.floor((Math.random() * vm.data.length)+1);
            vm.setRandomPlayCard = setRandomPlayCard;
            vm.points = 0;
            vm.answer = document.getElementById('user-answer');
            vm.playCardGame = playCardGame;
            vm.correctAnswer = false;
            vm.incorrectAnswer = false;
            vm.gameError = false;
            vm.wynik = document.getElementById('wynik');
            
            function setRandomPlayCard(){
                vm.activeCard = Math.floor(Math.random() * (vm.data.length-1));
                vm.correctAnswer = false;
                vm.incorrectAnswer = false;
                vm.answer.value = "";
                console.log(vm.activeCard);
            }
            
            
            function playCardGame(index){
                if (vm.answer.value == ""){
                    vm.gameError='true';
                }else if(vm.answer.value === vm.data[index].englishWord){
                    vm.points ++;
                    vm.correctAnswer = true;
                }else{
                    vm.points --;
                    vm.incorrectAnswer = true;
                }
            }
            
            function showPoints(){
                if(vm.points<10 && vm.points>0){
                    vm.wynik.textContent = "0"+vm.points;   
                }else{
                   vm.wynik.textContent = vm.points;
                   }
                setTimeout(showPoints,10);
            }
            
            window.onload= showPoints();
            //dopisać niepowtarzające się pytania - indexy wpychac pushem do tablicy
        }
})();