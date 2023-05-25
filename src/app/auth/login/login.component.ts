import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  form!: UntypedFormGroup;

  loading = false;
  hasError = false;

  // @ts-ignore
  constructor(private router: Router, private fb: UntypedFormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    this.hasError = false;
    Object.values(this.form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    if (!this.form.valid) return;
    this.loading = true;
    this.authService
      .login(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: () => {
          console.log("success");
          this.router.navigate([""]);
        },
        error: () => (this.hasError = true),
      });
  }
}
