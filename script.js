const text = [
"Software Tester",
"QA Engineer",
"Automation Tester",
"API Tester"
];


let index = 0;

let char = 0;


function typing(){


if(char < text[index].length){

document.getElementById("typing").innerHTML += text[index].charAt(char);

char++;

setTimeout(typing,100);


}

else{


setTimeout(erase,1500);


}

}



function erase(){


if(char > 0){

document.getElementById("typing").innerHTML =
text[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{


index++;

if(index >= text.length){

index=0;

}


setTimeout(typing,500);


}

}



typing();