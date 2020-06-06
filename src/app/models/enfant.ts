import {Mere} from "./mere";
import {Pere} from "./pere";

export class Enfant {

  public  id:number;
  public  nom:string;
  public  prenom:string;
  public  sexe:string;
  public  dateNaiss:Date;
  public  lieuxNaiss:string;
  public heureNaiss:string;
  public  situationMatriParent:string;
  public pere:Pere;
  public mere:Mere;
  public  dateDeclaration:Date;
  //public Usager declarant;

}
