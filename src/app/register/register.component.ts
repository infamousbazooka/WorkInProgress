import {Component, OnInit, Inject} from '@angular/core';
import {TdLoadingService} from "@covalent/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, Form} from "@angular/forms";
import {FirebaseApp} from "angularfire2";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted


  constructor(private _fb: FormBuilder, private _router: Router,
              private _loadingService: TdLoadingService, private _authService : AuthService) {


  }


  ngOnInit() {

    this.myForm = this._fb.group({
      login_email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      login_password_a: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      login_password_b: ['', [<any>Validators.required, <any>Validators.minLength(5)]],

    });

  }


  save(myForm:Form) {

    console.log(myForm);
    const val=this.myForm.value;

    //TODO: Password matching and redo forms.

    this._authService.register(val.login_email, val.login_password_a).subscribe(
      () => this._router.navigate(['/dashboard']),
      alert
    );


  }



}
