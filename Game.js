const GameState = Object.freeze({
    ENDOFLINE : require('os').EOL,
    WELCOMING:   Symbol("welcoming"),
    FIRSTQUESION:  Symbol("firstquestion"),
    SECONDQUESION: Symbol("secondquesion"),
    THIRDQUESION: Symbol("thirdquesion"),
    FOURQUESION: Symbol("fourquesion"),
    FIVEQUESION: Symbol("fivequesion"),
    SIXQUESION: Symbol("sixquesion"),
    SEVENQUESION: Symbol("sevenquesion"),
    EIGHTQUESION: Symbol("ninequesion"),
    NINEQUESION: Symbol("yenquesion"),
    TENQUESION: Symbol("elevenquesion"),
    ELEVENQUESION: Symbol("twelvequesion"),
    TWELVEQUESION: Symbol("thirteenquesion"),
    THIRTEENQUESION: Symbol("fourteenquesion"),
    FOURTEENQUESION: Symbol("fifteenquesion"),
    FIFTEENQUESION: Symbol("sixteenquesion"),
    SIXTEENQUESION: Symbol("seventeenquesion"),
    SEVENTEENQUESION: Symbol("eighteenquesion"),
    EIGHTTEENQUESION: Symbol("nineteenquesion"),
    NINETEENQUESION: Symbol("twentyquesion"),
    TWENTYQUESION: Symbol("twentyquesion"),
    TWENTYONEQUESION: Symbol("twentyonequesion"),
    TWENTYTWOQUESION: Symbol("twentytwoquesion"),
    TWENTYTHREEQUESION: Symbol("twentythreequesion"),
    TWENTYFOURQUESION: Symbol("twentyfourquesion"),
    TWENTYFIVEQUESION: Symbol("twentyfivequesion"),
    TWENTYSIXQUESION: Symbol("twentysixquesion"),
    TWENTYSEVENQUESION: Symbol("twentysevenquesion"),
    TWENTYEIGHTQUESION: Symbol("twentyeightquesion"),
    TWENTYNINEQUESION: Symbol("twentyninequesion"),
    THRTYQUESION: Symbol("thrtytquesion"),
    FINAL : Symbol("final"),
    
});
global.FINALMARK = 0;
export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        let finalMark = 0;
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Which number should come next in this series?"+GameState.ENDOFLINE+" 25,24,22,19,15";
                this.stateCur = GameState.FIRSTQUESION;
                break;
            case GameState.FIRSTQUESION:
                if(sInput.toLowerCase().match(10)){
                    
                    FINALMARK = FINALMARK + 1;
                    sReply = "Correct!" + GameState.ENDOFLINE +" Which number should come next in this series? "+GameState.ENDOFLINE+"3,5,8,13,21,";
                    
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +"Which number should come next in this series? "+GameState.ENDOFLINE+"3,5,8,13,21,";
                }
                this.stateCur = GameState.SECONDQUESION;
                break;
            case GameState.SECONDQUESION:
                if(sInput.toLowerCase().match(34)){
                    sReply = "Correct!" + GameState.ENDOFLINE +" Which number follows, in this series? "+GameState.ENDOFLINE+"4, 5, 8, 17, 44";
                    FINALMARK = FINALMARK + 1;
                    
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +" Which number follows, in this series? "+GameState.ENDOFLINE+"4, 5, 8, 17, 44";
                    
                }
                this.stateCur = GameState.THIRDQUESION;
                break;
            case GameState.THIRDQUESION:
                if(sInput.toLowerCase().match(125)){
                    sReply = "Correct!" + GameState.ENDOFLINE +" Which number follows, in this series? "+GameState.ENDOFLINE+"13, 57, 911, 1315, 1719";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +" Which number follows, in this series? "+GameState.ENDOFLINE+"13, 57, 911, 1315, 1719";
                    
                }
                this.stateCur = GameState.FOURQUESION;
                break;
                case GameState.FOURQUESION:
                if(sInput.toLowerCase().match(2123)){
                    sReply = "Correct!" + GameState.ENDOFLINE +" At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +" At the end of a banquet 10 people shake hands with each other. How many handshakes will there be in total?";
                    
                }
                this.stateCur = GameState.FIVEQUESION;
                break;
                case GameState.FIVEQUESION:
                if(sInput.toLowerCase().match(45)){
                    sReply = "Correct!" + GameState.ENDOFLINE +" There are 14 more cookies than biscuits in a jar of 38 cookies and biscuits. How many cookies are in the jar?";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +" There are 14 more cookies than biscuits in a jar of 38 cookies and biscuits. How many cookies are in the jar?";
                    
                }
                this.stateCur = GameState.SIXQUESION;
                break;
                case GameState.SIXQUESION:
                if(sInput.toLowerCase().match(26)){
                    sReply = "Correct!" + GameState.ENDOFLINE +"The day before the day before yesterday is three days after Saturday. What day is it today?";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +"The day before the day before yesterday is three days after Saturday. What day is it today?";
                    
                }
                this.stateCur = GameState.SEVENQUESION;
                break;
                case GameState.SEVENQUESION:
                if(sInput.toLowerCase().match("friday")){
                    sReply = "Correct!" + GameState.ENDOFLINE +" Find the missing term in the following sequence: "+GameState.ENDOFLINE+"3,8,18, __ ,78";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +" Find the missing term in the following sequence: "+GameState.ENDOFLINE+"3,8,18, __ ,78";
                    
                }
                this.stateCur = GameState.EIGHTQUESION;
                break;
                case GameState.EIGHTQUESION:
                if(sInput.toLowerCase().match(38)){
                    sReply = "Correct!" + GameState.ENDOFLINE +"Jane has 2 red marbles, 4 blue marbles, and 5 green marbles, in her pocket. How many will she have to take out of her pocket to ensure that she has taken out at least one of each color?";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +"Jane has 2 red marbles, 4 blue marbles, and 5 green marbles, in her pocket. How many will she have to take out of her pocket to ensure that she has taken out at least one of each color?";
                    
                }
                this.stateCur = GameState.NINEQUESION;
                break;
                case GameState.NINEQUESION:
                if(sInput.toLowerCase().match(10)){
                    sReply = "Correct!" + GameState.ENDOFLINE +"Four workers are able to place fourty tiles in ten minutes. How many workers are needed to place sixty tiles in twenty minutes?";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +"Four workers are able to place fourty tiles in ten minutes. How many workers are needed to place sixty tiles in twenty minutes?";
                    
                }
                this.stateCur = GameState.TENQUESION;
                break;
                case GameState.TENQUESION:
                if(sInput.toLowerCase().match("three") || sInput.toLowerCase().match(3) || sInput.toLowerCase().match("3 workers") || sInput.toLowerCase().match("three workers")){
                    sReply = sReply = "Correct!" + GameState.ENDOFLINE +"Which number should come next in this series?"+GameState.ENDOFLINE+"10, 17, 26, 37, ?";
                    FINALMARK = FINALMARK + 1;
                }else{
                    sReply = sReply = "Oops! Incorrect ! " + GameState.ENDOFLINE +"Which number should come next in this series?"+GameState.ENDOFLINE+"10, 17, 26, 37, ?";
                    
                }
                this.stateCur = GameState.FINAL;
                break;
                case GameState.FINAL:
                if(sInput.toLowerCase().match(50)){
                    sReply = "Correct!" + GameState.ENDOFLINE + "Total Mark : "+finalMark;
                    
                }else{
                    sReply = "Oops! Incorrect !" + GameState.ENDOFLINE + "Total Mark : "+FINALMARK;
                    
                }
                // this.stateCur = GameState.TWELVEQUESION;
                break;
                // case GameState.TWELVEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.THIRTEENQUESION;
                // break;
                // case GameState.THIRTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.FOURTEENQUESION;
                // break;
                // case GameState.FOURTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.FIFTEENQUESION;
                // break;
                // case GameState.FIFTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.SIXTEENQUESION;
                // break;
                // case GameState.SIXTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.SEVENTEENQUESION;
                // break;
                // case GameState.SEVENTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.EIGHTTEENQUESION;
                // break;
                // case GameState.EIGHTTEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.NINETEENQUESION;
                // break;
                // case GameState.NINETEENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYQUESION;
                // break;
                // case GameState.TWENTYQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYONEQUESION;
                // break;
                // case GameState.TWENTYONEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYTWOQUESION;
                // break;
                // case GameState.TWENTYTWOQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYTHREEQUESION;
                // break;
                // case GameState.TWENTYTHREEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYFOURQUESION;
                // break;
                // case GameState.TWENTYFOURQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYFIVEQUESION;
                // break;
                // case GameState.TWENTYFIVEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYSIXQUESION;
                // break;
                // case GameState.TWENTYSIXQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYSEVENQUESION;
                // break;
                // case GameState.TWENTYSEVENQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.TWENTYEIGHTQUESION;
                // break;
                // case GameState.TWENTYEIGHTQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
        
                // }
                // this.stateCur = GameState.TWENTYNINEQUESION;
                // break;
                // case GameState.TWENTYNINEQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.THIRTYQUESION;
                // break;
                // case GameState.THIRTYQUESION:
                // if(sInput.toLowerCase().match("three")){
                //     sReply = "question 4?";
                //     finalMark = finalMark + 1;
                // }else{
                //     sReply = "Wrong. The answer three.";
                    
                // }
                // this.stateCur = GameState.THIRTYQUESION;
                // break;
                // case GameState.FINAL:
                //     sReply = "final score "+ finalMark;
                // break;
                
        }
        return([sReply]);
    }
}