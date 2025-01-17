import {Main} from '../Src/passwordChecker.js';

describe('Password Checker', () => {
    
    const result = new Main();

    // Step 1

    it('should return false if password is less than 8 characters', () => {
        

        expect(result.has8Caracters('8573249')).toBe(false);
    });

    it('should return true if password is 8 characters', () => {
        

        expect(result.has8Caracters('85732495')).toBe(true);
    });

});