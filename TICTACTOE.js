const prompt=require("prompt-sync")();

console.log("TIC TAC TOE");
console.log("**********************");
const num=prompt("enter the board size");
let board=[];

for(var i=0;i<num;i++){
    board[i]=[];
    for(var j=0;j<num;j++){
        board[i][j]=" _ ";
    }
}


for(let turn=1;turn<=(num*num);turn++){
    // board print
    for(let i=0;i<num;i++){
        
        console.log(board[i].toString().replace( /,/g ,"|"));
    }

    let player=1;
    let char="";
    if(turn%2!=0){
        console.log("player 1 turn ");
        player=1;
        char=" X ";
    }
    else{
        console.log("player 2 turn ");
        player=2;
        char=" O ";
    }
    console.log("enter value from",0,"to",num-1);
    let row=prompt("select square row");
    let col=prompt("select square col");
    while(row<0 || row>=num || col<0 || col>=num){
        console.log("worng input");
        console.log("input again");
         row=prompt("select square row");
         col=prompt("select square col");
    }
    board[row][col]=char;
    for(let i=0;i<num;i++){
        let count_char=0;
        for(let j=0;j<num;j++){
            if(board[i][j]==char){
                count_char++;
            }
        }
        if(count_char==num){
            console.log("player ",player,  "wins ");
            return;
        }
    }

    for(let j=0;j<num;j++){
        count_char=0;
        for(let i=0;i<num;i++){
            if(board[i][j]==char){
                count_char++;
            }
        }
        if(count_char==num){
            console.log("player ",player,  "wins ");
            return;
        }
    }
    count_char=0;
    for(let i=0;i<num;i++){
        if(board[i][i]==char){
            count_char++;
        }

    }
    if(count_char==num){
        console.log("player ",player,  "wins ");
        return;
    }


    count_char=0;
     i=-1;
     j=3;
    for(let it=0;it<=2;it++){
        i=i+1;
        j=j-1;
        if(board[i][j]==char){
            count_char++;
        }
        if(count_char==num){
            console.log("player ",player,  "wins ");
            return;
        }
    }



}
