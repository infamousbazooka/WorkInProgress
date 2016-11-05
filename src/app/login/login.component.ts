import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TdLoadingService} from '@covalent/core';
import {FormGroup, Validators, FormBuilder, Form} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'qs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {

  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted


  constructor(private _fb: FormBuilder, private _router: Router,
              private _loadingService: TdLoadingService, private authService : AuthService) {
  }


  ngOnInit() {

    this.myForm = this._fb.group({
      login_email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      login_password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],

    });

  }


  save(myForm:Form) {

    console.log(myForm);
    const val=this.myForm.value;

    this.authService.login(val.login_email, val.login_password).subscribe(
      () => this._router.navigate(['/']),
      alert
    );

  }



  }
