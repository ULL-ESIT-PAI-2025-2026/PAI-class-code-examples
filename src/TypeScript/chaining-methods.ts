/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. 
  *       Chaining methods
  */

class Supporter {    
  team: Team;     
  cheer(name: string): string {        
    return 'go ' + name + '!!!';    
  }
} 

class Team {    
  teamFirst: string = '';    
  teamLast: string = '';     
  makeName(): string {        
    return this.teamFirst + ' ' + this.teamLast;    
  }
} 

const main = (): void => {
  let canarias: Team = new Team();
  canarias.teamFirst = 'C. B.';
  canarias.teamLast = 'Canarias';
  let hincha: Supporter = new Supporter();
  hincha.team = canarias;
  console.log(hincha.cheer(hincha.team.makeName()).toUpperCase());
};

main();
