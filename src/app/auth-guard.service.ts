import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
declare var $: any;

@Injectable({
    providedIn: "root",
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
        // localStorage.setItem('username',');
        console.log($('#username'));
        // debugger;
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if ($('#username').val() =="Sejal" && $('#password').val()=='123') {
            return true;
        } else {
            this.router.navigate(['/404']);

            return false;
        }
    }
}

