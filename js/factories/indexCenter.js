(function(){
    
    angular
        .module("IndexCardApp")
        .factory("indexCenter", indexCenter);
    
    function indexCenter(){
        var quizObj = {
            welcomeActive: false,
            cardsActive: false,
            wordBaseActive: false,
            gameActive: false,
            activateCards: activateCards,
            activateWordBase: activateWordBase,
            activateGame: activateGame,
            home: home
        };  
        
        return quizObj;
        
        function activateCards(){
            quizObj.welcomeActive = true; 
            quizObj.cardsActive = true;
            quizObj.wordBaseActive = false;
            quizObj.gameActive = false;
        }
        
        function activateWordBase(){
            quizObj.welcomeActive = true;
            quizObj.wordBaseActive = true;
            quizObj.cardsActive = false;
            quizObj.gameActive = false;
        }
        
        function activateGame(){
            quizObj.welcomeActive = true;
            quizObj.gameActive = true;
            quizObj.cardsActive = false;
            quizObj.wordBaseActive = false;
        }
        
        function home(){
            quizObj.welcomeActive = false;
            quizObj.gameActive = false;
            quizObj.cardsActive = false;
            quizObj.wordBaseActive = false;   
        }
    }
    
})();