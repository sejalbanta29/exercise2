import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
 
@Injectable({
    providedIn:'root'
})
export class ResolveService implements Resolve<any>{
  loadingposts:any = [];
 
    constructor(private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      let newsUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';
      this.http.get(newsUrl).subscribe(console.log);
      return of(true);
     
    }
}