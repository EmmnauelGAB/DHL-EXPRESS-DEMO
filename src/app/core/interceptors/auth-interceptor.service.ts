import { HttpResponse } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { CONST_TOKEN, headers } from 'src/app/core/constants';
import { LogService } from '../service/log.service';
import { SessionStorageService } from '../service/session-storage.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private logService:LogService, private storage:SessionStorageService,
    private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.logService.info("Se intercepto la url " + req.url)
    let requestClone = null
    let headersRequest = new HttpHeaders(headers);
    
    //Se anexa token a los headers
    if(this.storage.get(CONST_TOKEN.TOKEN)) {
      headersRequest = headersRequest.set( CONST_TOKEN.HEADER, `${CONST_TOKEN.PREFIX} ${this.storage.get(CONST_TOKEN.TOKEN)}`)
    }

    requestClone = req.clone({
      headers: headersRequest
    })

    return next.handle(requestClone).pipe(
      tap( evt => {
        if (evt instanceof HttpResponse) {
            if(evt.status === 200 && req.url.includes(CONST_TOKEN.END_POINT)){
              this.storage.save(CONST_TOKEN.TOKEN, evt.headers.get(CONST_TOKEN.HEADER)?.replace(CONST_TOKEN.PREFIX,'')?.trim())
            }
        }
      }),
      catchError(err => {
        this.logService.info(JSON.stringify(err,null,2))
  
        if ([401, 403].indexOf(err.status) !== -1) {
          this.authService.endSession();
        }

        return throwError(() => err );
      }))
  }
}

