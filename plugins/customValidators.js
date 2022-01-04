export default (context, inject) => {
  const  customValidators= {
    studentNumberValidator(number) {
        if(number!==undefined){
          if(number>=100000 && number<=999999){
            return true;
          } else return false;
        } return false;
    },
    requiderValidator(text){
      if(text!=='' && text!=="" && text!==0){
        return true;
      } else return false;
    },
    phoneNumberValidator(number){
      if(number!==''){
        if(number.startsWith('+993')){
          return true;
        } return false;
      } return  false;
    },
    klassValidator(klass){
      if(klass!==undefined){
        if(klass>=1000 && klass<=9999){
          return true;
        } return false;
      } return false;
    }
  }
  inject('customValidators', customValidators)
  context.$customValidators = customValidators;
}
