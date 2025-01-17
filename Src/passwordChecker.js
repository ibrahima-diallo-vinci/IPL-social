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
}