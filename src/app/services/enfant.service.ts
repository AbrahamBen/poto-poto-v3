import { Injectable } from '@angular/core';
import {Enfant} from "../models/enfant";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  public host = "http://localhost:9090/api/mairie";

  constructor(private httpClient:HttpClient) { }

  public getRessources():Observable<Enfant[]>{
    return this.httpClient.get<GetResponseEnfant>(this.host+'/enfant').pipe(
      map(response=>response._embedded.enfants)
    );
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


