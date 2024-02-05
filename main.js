function validate(){

const form =document.querySelector('form'),
 mail = form.querySelector('.genesis'),
 invalid = form.querySelector('.invalid');




    
     let regx =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
     form.classList.add('err');
     if(mail.value ==''){
      invalid.innerText='Valid email required';
      return false
      
     }else if(!mail.value.match(regx)){
        invalid.innerText='Valid email required';
        return false
        
        
     }
     else{
      return true;
     }
     
}


     
          
     



