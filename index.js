const p1button=document.querySelector('#p1button')
const p2button=document.querySelector('#p2button')
const p1display=document.querySelector('#p1display')
const p2display=document.querySelector('#p2display')
const resetButton=document.querySelector('#resetButton')
const selectdata=document.querySelector('#selectdata')
const jsConfetti = new JSConfetti()
let p1score=0;
let p2score=0;
let isgameover=false;
let winscore=2;

p1button.addEventListener('click',function(){
    if(!isgameover){
        p1score+=1;
    
        if(p1score===winscore){
            isgameover=true;
            p1display.classList.add("winner")
            p2display.classList.add("looser")
            p1button.disabled=true;
            p2button.disabled=true;
            jsConfetti.addConfetti()
            

            
        }
        p1display.textContent=p1score
    }


})

p2button.addEventListener('click',function(){
    if(!isgameover){
        p2score+=1;
    
        if(p2score===winscore){
            isgameover=true;
            p2display.classList.add("winner")
            p1display.classList.add("looser")
            p1button.disabled=true;
            p2button.disabled=true;
            jsConfetti.addConfetti()
        }
        p2display.textContent=p2score
    }
})

selectdata.addEventListener('change',function(){
    winscore=parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset)
function reset(){
    isgameover=false;
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('winner','looser');
    p2display.classList.remove('looser','winner');
    p1button.disabled=false;
    p2button.disabled=false;



}

