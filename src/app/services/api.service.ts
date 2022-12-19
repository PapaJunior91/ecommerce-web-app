import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  root_url = environment.root_url

  opts={
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':'application/json'
    })
  }

  opts_2={
    headers: new HttpHeaders({
      'Accept': 'application/json',
    })
  }

  
  opt={
    headers: new HttpHeaders({
      'Accept': 'application/json',
    })
  }

  test(url){
    return this.http.post(this.root_url + url, this.opt);
  }

  create(url, data) {
    return this.http.post(this.root_url + url, data, this.opts);
  }

  read(url) {
    return this.http.get(this.root_url + url, this.opts);
  }

  readById(url, id) {
    return this.http.get(this.root_url + url+ '/' +id, this.opts);
  }

  search(url, key){
    return this.http.get(this.root_url + url + '/' +key, this.opts);
  }

  searchByMultipleKeys(url, key){
    return this.http.get(this.root_url + url + key, this.opts)
  }

  uploadFile(url, data){
    return this.http.post(this.root_url + url, data, this.opts_2)
  }

  login(url, data){
    return this.http.post(this.root_url + url,data,this.opts)
  }

  update(url, data, id){
      return this.http.put(`${this.root_url + url + '/' + id}`, data, this.opts);
  }  

  delete(url, id){
    return this.http.delete(`${this.root_url + url + '/' + id}`, this.opts);

  }


}
