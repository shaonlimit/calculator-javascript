let btn = document.getElementsByClassName('button');
for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener('click',function(event){
       let btnText = event.target.innerText;
      
    let outputText =   document.getElementById('output').innerText;
    if (outputText == 0){
        document.getElementById('output').innerText = btnText;
    }
    else {
        document.getElementById('output').innerText += btnText;
    }
    })
}

document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('output').innerText = 0;
})

document.getElementById('equal').addEventListener('click',function(){
   let outputText =  document.getElementById('output').innerText;
  
   
   let output = eval(outputText);
  
  
   document.getElementById('output').innerText = output;
  
})

