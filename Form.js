
class FormValidation {
    formElement = null;
    options = null;
  
    constructor(form, options) {
      if (!form || !options) {
        console.error("Invalid parameter");
      }
      this.formElement = form;
      this.options = options;
      console.log(options)
  
      
  
      this.formElement.addEventListener("submit", (e) => this.validateForm(e));
    }
  
    validateForm(e) {
      e.preventDefault();
      // console.log(this.formElement);
      // console.log(this.options);
      this.validate();
      // this.validateInputs();
    }
  
    validate() {

      // this variable are catching input value form input field
      const inputValue = this.formElement.name.value;
      const passValue = this.formElement.password.value;
      const emailValue = this.formElement.email.value;
      const urlValue = this.formElement.url.value;
      const textAreaValue = this.formElement.textarea.value;

      
      
      // this variable are catching obj value form obj item
      const inputFld = this.options.name;
      const passwordFld = this.options.password;
      const emailFld = this.options.email.minLength;
      const urlFld = this.options.url.hasHttps;
      const textFld = this.options.amount;

      
     // this condition for input name field
      if (inputValue.length > inputFld.minLength && 
        /[0-9]/.test(inputValue) !== inputFld.nonNumeric) {
          
        setSuccess ("user","its valid");
        
      } else{
        setError("user", "invalid!! name field isn't emtpy and numeric value ")
      }


    
      // this condition for password field
      if(/[A-Z]/.test(passValue) == passwordFld.hasUpperCase && 
      /[a-z]/.test(passValue) == passwordFld.hasLowerCase &&
      /[~_!@#$%^&*(),.?":;{}]/.test(passValue) == passwordFld.hasSpecialSymbol &&
      /[0-9]/.test(passValue) == passwordFld.hasNumeric
      ){
        setSuccess ("pass","its valid");
      }
      else{
        setError("pass", "invalid!! this is empty plese enter your strong password");
      }


      // this condition for email field
      if(emailValue.length > emailFld){
        setError("emailFld", "its valid")
      }else{
        setError("emailFld", "invalid!! this is empty.Enter your correct email ")
      }


      // this condition for url field
      if (/https/.test(urlValue) == urlFld ) {
        
        setSuccess ("urlFld","its valid");
      }
      else{
        setError("urlFld", "invalid!! this is not correct..type https and give the correct url");
      }


      // this condition for textarea-->
      if(textAreaValue.length > textFld.min && textAreaValue.length < textFld.max){
        setSuccess ("textFld", "its fill the condition");
      }
      else{
        setError("textFld","invaild!! please give the value minmum 100 words and remember don cross the 500 words");
        
      }

   
    }
  }
  
  // this is for error message 
    const setError = (element, message) => {
    const errorDisplay = document.getElementById(`${element}`);
    
    errorDisplay.innerText = message;
  
   
  };
   
  // that is for success messsage
    const setSuccess = (element,message) => {
    const successDisply = document.getElementById(`${element}`)
    
  
    successDisply.innerText = message;
  
  };


 // this code for show password
   const checkBox = document.getElementById('inputPass');
   document.getElementById('showPass').addEventListener('click',function(){
    if(checkBox.type === "password"){
      checkBox.type = "text"
    }
    else{
      checkBox.type = "password";
    }

  })
  
  
  


