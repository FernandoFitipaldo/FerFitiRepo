function validateEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let resultado = false;
    if (regex.test(email)) {
        resultado = true;
    }
    return resultado; 
}

   let isValid = validateEmail('example123@example.com');
   console.log(isValid); // true

   isValid = validateEmail('example@');
 console.log(isValid); // false