import { Inject, Injectable } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { BehaviorSubject, delay, map, Observable, of, throwError } from "rxjs";

export interface User {
  username: string;
  password: string;
}

const USER_STORAGE_KEY = "app-user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    const appUser = this.storage.get(USER_STORAGE_KEY);
    this.userSubject = new BehaviorSubject(appUser);
    this.user$ = this.userSubject.asObservable();
    this.user$.subscribe((data) => {
      this.storage.set(USER_STORAGE_KEY, data);
    });
  }

  public get user() {
    return this.userSubject.value;
  }

  login(params: { username: string; password: string }) {
    if (params.username === "admin" && params.password === "admin") {
      return of({ ...params }).pipe(
        delay(2000),
        map((user: User) => {
          this.userSubject.next(user);
          return user;
        })
      );
    }
    return throwError(() => {
      return new Error(`wrong credentials`);
    });
  }

  logout() {
    this.userSubject.next(null);
  }
}
