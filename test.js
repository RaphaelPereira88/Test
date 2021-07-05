const numbers = 101;
const numberList = document.getElementById('listNumber')
const button = document.getElementById('button')

button.addEventListener("click", ()=>{;
    event.preventDefault
    for (let i = 1; i < numbers; i++){
        const liElement = document.createElement('li')
        liElement.style.setProperty('cursor', 'pointer');
        if (i % 3 === 0) {
            if(i % 5 === 0){
                liElement.innerHTML = `${i} fizz Buzz`;
                console.log(`${i} fizz Buzz`)
            }else{
                liElement.innerHTML = `${i} fizz `;
                console.log(`${i} fizz`)
            }
        }else if (i % 5 === 0){
            liElement.innerHTML = `${i}   Buzz`;
            console.log(`${i} Buzz`)
        }else{
            liElement.innerHTML = (i);
            console.log(i)
        };
    numberList.appendChild(liElement);
    }
});

// I could also write    }else if (i % 15 === 0){....}   instead of nesting the conditional statement.   
 

