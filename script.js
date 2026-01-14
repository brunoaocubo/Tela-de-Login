let inputs = document.querySelectorAll('.inputSignup')

let validationForms = function(){
    for(let i = 0; i < inputs.length; i++)
    {
        if(!inputs[i].classList.contains('error') && inputs[i].value == '')
        {
            inputs[i].classList.add('error')   
            inputs[i].placeholder = ''
        }
        else if(inputs[i].classList.contains('error') && inputs[i].value != '')
        {
            inputs[i].classList.remove('error')
        }
    }
}

let submit = document.querySelector('#submit')
submit.addEventListener('click', validationForms)