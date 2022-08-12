var btn   = document.querySelectorAll('.btn'),
    
    result=document.querySelector('.result'),

    clear =document.querySelector('.clear'),

    equal =document.querySelector('.equal'),

    clearEnd = document.querySelector('.clear-end'),

    btnColor = document.querySelectorAll('.b-color'),

    container = document.querySelector('.container')

    result.value = '0'
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
    
        result.value = "0"
    })


    equal.addEventListener('click',()=>{

        result.value = eval(result.value)


    })


    clearEnd.addEventListener('click',()=>{

        result.value =  result.value.slice(0 , -1)

    })
        

  

    


 










