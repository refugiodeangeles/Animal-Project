window.addEventListener('DOMContentLoaded',()=>{
    // Const
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const ccInput = document.querySelector('#cc');
    const commentText = document.querySelector('#comments');
    const sendButton = document.querySelector('.disableButton');
    const blurDiv = document.querySelector('.blurBody');
    const divLoader = document.querySelector('.divLoader');
    const sendDiv = document.querySelector('.sendSucefully');
    const regEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validationObject = {
        email: "",
        name: "",
        cc: "",
    };
    // -----
    // Variables
    let validation;
    let inputValue = () =>{
        if(nameInput.value != '' && emailInput.value != '' && ccInput.value != '' && regEx.test(emailInput.value) && regEx.test(ccInput.value)){
            sendButton.classList.remove('disableButton');
            sendButton.removeAttribute('disabled');
            validationObject.name = nameInput.value;
            validationObject.email = emailInput.value;
            validationObject.cc = ccInput.value;
        }
    };
    let validateInput = inputName =>{
        inputName.addEventListener('input',e => {
            if(e.target.value == ''){
                e.target.placeholder = `The ${e.target.id} are required`;
                inputName.classList.add('required');
            }
            if (regEx.test(e.target.value)) {
                if(e.target.parentElement.querySelector(".wrongValue")){
                    e.target.parentElement.querySelector(".wrongValue").remove();
                }
            } else {
                if(!e.target.parentElement.querySelector(".wrongValue") && e.target.type == "email"){
                    const divElement = document.createElement("div");
                    divElement.classList.add('wrongValue');
                    divElement.textContent = "Please, enter a valid email";
                    e.target.parentElement.appendChild(divElement);
                    return;
                } 
            }
            inputValue();
            let arrayOfValues = Object.values(validationObject);
            validation = arrayOfValues.some(element=>{element == ''})
          })
    };
    // -----
    // Events
    sendButton.addEventListener('click',(e)=>{
        e.preventDefault();
        if(validation == false){
            blurDiv.style.filter = "blur(5px)";
            divLoader.style.display = "flex";
            setTimeout(()=> {
                blurDiv.style.filter = "blur(0px)";
                divLoader.style.display = "none";
                nameInput.value = "";
                emailInput.value = "";
                ccInput.value = "";
                commentText.value = "";
                sendButton.classList.add('disableButton');
                sendButton.setAttribute('disabled','true');
                setTimeout(()=>{
                    sendDiv.style.display = "flex";
                    setTimeout(()=>{
                        sendDiv.style.display = "none";
                    },3500)
                })
            },3000)
        }
        /* if(validationObject == ) */
    });
    // -----
    // Fuctions
   
    // -----
    // Call Fuctions
    validateInput(nameInput);
    validateInput(emailInput);
    validateInput(ccInput);
    // -----
})