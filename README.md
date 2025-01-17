# IPL-social

## Auteur
**Nom**: [Diallo]  
**Prénom**: [Ibrahima]  
**Email Vinci**: [ibrahima.k.diallo@student.vinci.be]

## URL GitHub
[URL projet](https://github.com/ibrahima-diallo-vinci/IPL-social.git)

## Description
Ce projet contient une classe `Main` qui fournit des méthodes pour vérifier la validité des mots de passe. Les critères de validation incluent :
- Le mot de passe doit contenir au moins 8 caractères.
- Le mot de passe doit contenir au moins un caractère spécial.
- Le mot de passe doit contenir au moins un chiffre.

### Methods
- `has8Characters(password)`: Vérifie si le mot de passe contient au moins 8 caractères.
- `has1SpecialCharacter(password)`: Vérifie si le mot de passe contient au moins un caractère spécial.
- `has1Number(password)`: Vérifie si le mot de passe contient au moins un chiffre.

## Explanation of the code
Le fichier `passwordChecker.js` contient une classe `Main` qui fournit des méthodes pour vérifier la validité des mots de passe selon plusieurs critères. La méthode `has8Characters` vérifie si le mot de passe contient au moins 8 caractères. La méthode `has1SpecialCharacter` vérifie si le mot de passe contient au moins un caractère spécial parmi une liste prédéfinie. La méthode `has1Number` vérifie si le mot de passe contient au moins un chiffre. Ces méthodes sont testées à l'aide de Jasmine dans le fichier `passwordChecker.test.js` pour s'assurer qu'elles fonctionnent correctement et répondent aux exigences spécifiées.

## How to Run the Project

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Run `npm test` to execute the Jasmine tests.