import {Main} from '../Src/passwordChecker.js';

describe('Password Checker', () => {
    
    const result = new Main();

    // Step 1

    it('should return false if password is less than 8 characters', () => {
        

        expect(result.has8Characters('8573249')).toBe(false);
    });

    it('should return true if password is 8 characters', () => {
        

        expect(result.has8Characters('85732495')).toBe(true);
    });

    // Step 2

    it('should return false if password does not have a special character', () => {
        

        expect(result.has1SpecialCharacter('84621325')).toBe(false);
    });

    it('should return true if password has a special character', () => {
        

        expect(result.has1SpecialCharacter('dd44@d4e')).toBe(true);
    });
    
});