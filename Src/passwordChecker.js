export class Main {
    has8Characters(password) {
        return password.length >= 8;
    }

    has1SpecialCharacter(password) {
        const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '='];

        for (let i = 0; i < password.length; i++) {
            if (specialCharacters.includes(password[i])) {
                return true;
            }
        }
        return false;
    }

    has1Number(password) {
        const number = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

        for(let i = 0; i < password.length; i++){
            if(number.includes(password[i])){
                return true;
            }
        }
        return false;
    }
}