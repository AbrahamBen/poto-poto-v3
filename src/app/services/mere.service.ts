import { Injectable } from '@angular/core';
import {Mere} from "../models/mere";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MereService {

  public host = "http://localhost:9090/api/mairie";

  constructor(private httpClient:HttpClient) { }

  public getRessources():Observable<Mere[]>{
    return this.httpClient.get<GetResponseMeres>(this.host+'/meres').pipe(
      map(response=>response._embedded.meres)
    );
  }

  public saveRessources(url,data):Observable<Mere>{
    return this.httpClient.post<Mere>(url,data);
  }
}

interface GetResponseMeres {
  _embedded:{
    meres: Mere[];
  }
}

