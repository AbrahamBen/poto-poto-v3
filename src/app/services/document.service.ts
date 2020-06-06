import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/document";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  public host = "http://localhost:9090/api/mairie";

  constructor(private httpClient:HttpClient) { }

  public getRessources():Observable<Document[]>{
    return this.httpClient.get<GetResponseDocuments>(this.host+'/documents').pipe(
      map(response=>response._embedded.documents)
    );
  }

  public getRessourceById(id):Observable<Document>{
    const documentDetailUrl = `${this.host}/documents/${id}`;
    return this.httpClient.get<Document>(documentDetailUrl);
  }

  public deleteResources(url):Observable<Document>{
    return this.httpClient.delete<Document>(url);
  }

  public updateRessources(url,data):Observable<Document>{
    return this.httpClient.put<Document>(url,data);
  }

  public saveRessources(url,data):Observable<Document>{
    return this.httpClient.post<Document>(url,data);
  }
}



interface GetResponseDocuments {
  _embedded:{
    documents: Document[];
  }
}
