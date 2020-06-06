import { Injectable } from '@angular/core';
import {Enfant} from "../models/enfant";
import {Nationalite} from "../models/nationalite";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NationaliteService {
  public host = "http://localhost:9090/api/mairie";

  constructor(private httpClient:HttpClient) { }

  public getRessources():Observable<Nationalite[]>{
    return this.httpClient.get<GetResponseNationalites>(this.host+'/nationalites').pipe(
      map(response=>response._embedded.nationalites)
    );
  }

  public getNationalitesByKeyword(mc:any):Observable<Nationalite>{
    return this.httpClient.get<Nationalite>(this.host+'/nationalites/search/byName?mc='+mc);
  }

  public deleteRessource(url):Observable<Nationalite>{
    return this.httpClient.delete<Nationalite>(url);
  }

  public saveRessource(url,data):Observable<Nationalite>{
    return this.httpClient.post<Nationalite>(url,data);
  }
}

interface GetResponseNationalites{
  _embedded:{
    nationalites: Nationalite[];
  }
}


