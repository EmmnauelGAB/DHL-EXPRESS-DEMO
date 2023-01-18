import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public save(key: string, value: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): any {
    return window.sessionStorage.getItem(key);
  }

  public clear(key: string) {
    window.localStorage.removeItem(key);
  }

}
