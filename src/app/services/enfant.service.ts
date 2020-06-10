import { Injectable } from '@angular/core';
import {Enfant} from "../models/enfant";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Mere} from "../models/mere";

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  public host = "http://localhost:9090/api/mairie";

  constructor(private httpClient:HttpClient) { }

  public getRessources():Observable<Enfant[]>{
    return this.httpClient.get<GetResponseEnfant>(this.host+'/enfants').pipe(
      map(response=>response._embedded.enfants)
    );
  }

  public getRessourceById(id):Observable<Enfant>{
    const EnfantDetailUrl = `${this.host}/enfant/${id}`;
    return this.httpClient.get<Enfant>(EnfantDetailUrl);
  }


  public saveRessources(url,data):Observable<Enfant>{
    return this.httpClient.post<Enfant>(url,data);
  }
}

interface GetResponseEnfant{
  _embedded:{
    enfants: Enfant[];
  }
}


