import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import{Subject} from 'rxjs'
import{HttpClient} from '@angular/common/http'
import { User } from '../model/user';


const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class UserService {
  private url = `${base_url}/Users`;
  private listaCambio = new Subject<User[]>();
  constructor(private http: HttpClient) {}
  
  list() {
    return this.http.get<User[]>(this.url);
  }
  insert(user: User) {
    return this.http.post(this.url, user);
  }
  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}

