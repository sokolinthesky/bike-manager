///<reference path="../../../node_modules/@angular/core/src/di/injectable.d.ts"/>
import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService){}

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
    }
  }
}
