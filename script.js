let contexts = document.querySelectorAll('.contexts')
let inputs = document.querySelectorAll('.inputSignup')
let submit = document.querySelector('#submit')
let placeholders = [['firstName', 'First Name'], ['lastName', 'Last Name'], ['email', 'Email Address'], ['password', 'Password']]

let validationForms = function(){
    for(let c = 0; c < contexts.length; c++)
    {
        let child = contexts[c].lastElementChild

        for(let i = 0; i < inputs.length; i++)
        {
            if(!inputs[i].classList.contains('error') && inputs[i].value === '')
            {
        
                inputs[i].classList.remove('spacing-bottom')

                if(contexts[c].contains(inputs[i]))
                {
                    if(child.className == 'context-error')
                    {
                        child.style.display = 'block'   
                    }
    
                    inputs[i].classList.add('error');

                    if(inputs[i].id === 'email')
                    {
                        inputs[i].placeholder = 'email@example/com'
                    }
                    else
                    {
                        inputs[i].placeholder = '';
                    }
                }
            }   
        }
    }
}

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('mouseout', function()
    {
        for(let p = 0; p < placeholders.length; p++)
        {
            if(inputs[i].id === placeholders[p][0] && !inputs[i].classList.contains('error'))
            {
                inputs[i].placeholder = placeholders[p][1]
            }
        }
    })

    inputs[i].addEventListener('keydown', function()
    {
        let contextError = document.querySelectorAll('.contexts')
        contextError = contextError[i].lastElementChild

        if(inputs[i].classList.contains('error'))
        {   
            contextError.style.display = 'none'
            inputs[i].classList.remove('error')
            inputs[i].classList.add('spacing-bottom')
        }
    })   
}

submit.addEventListener('click', validationForms)