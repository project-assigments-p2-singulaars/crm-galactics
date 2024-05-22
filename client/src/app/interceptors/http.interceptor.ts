import {HttpEvent,HttpInterceptorFn,HttpResponse,} from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { HttpService } from '../services/http.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const httpService= inject(HttpService)

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        httpService.setItem('token', event.body.accessToken);
      }
      return event;
    }))
};