import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CONST_TOKEN } from '../constants';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService:SessionStorageService, private router: Router) { }

  public endSession(): void {
    this.storageService.clear(CONST_TOKEN.TOKEN);
    this.router.navigate(['/login']);
  }

  public isAuthenticate(): boolean {
    return this.storageService.get(CONST_TOKEN.TOKEN) ? true : false;
  }
}
