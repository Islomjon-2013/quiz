let quizs = [
    [`1-savol: dunyo so'zining englizcha nomi`,`World`],
    [`2-savol: rang so'zining englizcha nomi`,`Color`],
    [`3-savol: raqam so'zining englizcha nomi`,`Number`],
    [`4-savol: ism so'zining englizcha nomi`,`Name`],
    [`5-savol: bolalar so'zining englizcha nomi`,`Children`],
    [`6-savol: qizil so'zining englizcha nomi`,`Red`],
];


let result = document.getElementById(`result`);
let k=1
for(let quiz of quizs){
    let card= document.createElement(`div`);
    let savol =document.createElement(`p`)
    let input = document.createElement(`input`);
    savol.innerHTML = quiz[0];
    input.setAttribute(`type`,'text');
    input.setAttribute('placeholder',k+'-savolga javob yozing');
    card.append(savol,input);
    result.append(card);
    k++;
}
function res(){
    let answer = document.querySelectorAll(`input`);
    for (i=0; i<answer.length; i++){
        if(answer[i].value == quizs[i][1]){
            answer[i].classList.add(`true`);
          

        }else{
            answer[i].classList.add(`false`);
          
        }
    }
    function reload (){
        location.reload();
    }
setTimeout(reload,5000)
}
