import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;

  isLoading = signal(false);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  errorMessage: string | null = null;

  submitForm() {
    this.submitted = true;
    if (this.myForm.valid) {
      console.log('Form Submitted!');
      this.isLoading.set(true);
      this.authService
        .login(this.myForm.value.email, this.myForm.value.password)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe(
          (response) => {
            console.log(response);
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
          },
          (error) => {
            console.log(error);
            this.errorMessage = error.error.message;
          }
        );
    }
  }
}
