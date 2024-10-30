let nameInput = document.getElementById("nameInput");
let priceIn = document.getElementById("priceInput");
let urlIn = document.getElementById("urlInput");
let main = document.querySelector(".addContan");



let priceText = document.querySelector(".priceText");
let productNum = document.querySelector(".productNum");
let img = document.querySelector(".img");


let AdBtn = document.querySelector(".AdBtn");
AdBtn.addEventListener('click', ()=>{
main.classList.toggle('block')

})


function Add(){
   
    let sum = document.querySelector(".sum");
   let main =  document.createElement('div');
   main.className = "main";
   main.innerHTML = `<img src="${urlIn.value}"/> 
   <p>${nameInput.value}</p>
   <p>$ ${priceIn.value}</p>
   <button>Add to Cart </button>`;

   sum.appendChild(main);
   
}




let noti = document.querySelector("#cart");
let select = document.querySelector('.select');
let button = document.getElementsByTagName("button");
// console.log(noti)


   
for(but of button){
    but.addEventListener('click', (e)=>{
        let add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');

       
        //copy and paste element
        let parent = e.target.parentNode;
        let clone  = parent.cloneNode(true);
        
        select.appendChild(clone);
        clone.lastElementChild.innerText = "close";
        if(clone){
            noti.onclick = ()=>{
                select.classList.toggle('display');
            }
        }
    })
}

