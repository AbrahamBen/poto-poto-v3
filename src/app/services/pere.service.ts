import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/document";
import {map} from "rxjs/operators";
import {Pere} from "../models/pere";

@Injectable({
  providedIn: 'root'
})
export class PereService {
  public host = "http://localhost:9090/api/mairie";

  constructor(private httpClient:HttpClient) { }

  public getRessources():Observable<Pere[]>{
    return this.httpClient.get<GetResponsePeres>(this.host+'/peres').pipe(
      map(response=>response._embedded.peres)
    );
  }

  public saveRessources(url,data):Observable<Pere>{
    return this.httpClient.post<Pere>(url,data);
  }
}

interface GetResponsePeres {
  _embedded:{
    peres: Pere[];
  }
}
