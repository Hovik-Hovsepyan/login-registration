export const emailChecker = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

   if(!email) {
    return "Email is required field";
   } else if(!reg.test(email)) {
    return "Email is not correct";
   } else {
     return true;
   }
};

export const passwordChecker = (password,password_confirm) => {
   if(password_confirm) {
     if(password_confirm != password) {
      return "Password and Confirm Password must be matched";
     } else {
       return true;
     }
   } else {
    if(!password) {
      return "Password is required field";
      } else if(password.length < 8) {
      return "Password should be min 8 char";
      }else {
        return true;
      }
   }
};
