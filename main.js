//Conditionals: if Statements 

let playerOne = "rock";
let computer = "";//computer selection will be determind from the three options in future project;

if (playerOne === computer ) {
    //console.log("tie game!")
}else if (playerOne === "rock"){
    if (computer === "paper"){
        //console.log('computer wins')
    } else {
        //console.log ("playerOne wins")
    }
}else if (playerOne == "paper"){
    if (computer === "scissors"){
        //console.log("computer wins")
    }else {
        //console.log("playerOne wins")
    }
}else {
    if (computer == "rock"){
        //console.log("computer wins")
    } else {
        //console.log("playerOne wins")
    }
}
