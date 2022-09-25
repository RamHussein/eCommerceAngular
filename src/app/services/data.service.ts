import { Data } from './../models/Data';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Data[]>{
  return  this.http.get<Data[]>('../assets/data.json')
  }

  getDataDetail(id:number): Observable<Data[]>{

    return this.http.get<Data[]>('../assets/data.json').pipe(map((response:any[])=>{
      return response.find((data:any)=>data.id==id)
    }))
  }
}
