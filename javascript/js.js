var btn   = document.querySelectorAll('.btn'),
    
    result=document.querySelector('.result'),

    clear =document.querySelector('.clear'),

    equal =document.querySelector('.equal'),

    clearEnd = document.querySelector('.clear-end'),

    btnColor = document.querySelectorAll('.b-color'),

    container = document.querySelector('.container')

   
    btnColor.forEach((button)=>{

        button.addEventListener('click',(atrr)=>{

            container.style.backgroundColor = atrr.target.dataset.color;
        }

        )} );


    btn.forEach((button)=>{

        button.addEventListener('click',()=>{
        //    console.log(button.value)
        
        result.value += button.value
    
        })
    })
    
    clear.addEventListener('click', ()=> {
    
        
    })


    equal.addEventListener('click',()=>{

        
        if (result.value != "") {
            result.value = eval(result.value)
        }else{
            result.value = null
        }


    })


    clearEnd.addEventListener('click',()=>{

        result.value =  result.value.slice(0 , -1)

    })
        

  

    


 










