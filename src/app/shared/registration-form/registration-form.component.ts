import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
    userdto!: UserDto;
    notName!: boolean;
    notEmail!: boolean;
    notPhoneNumber!: boolean;
    wrongPass!: boolean;
    expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.userdto = new UserDto();
    }

    register() {
        this.validate();
    }
    validate() {
        // check name
        if (this.userdto.fullNamme == '') {
            this.notName = true;
        } else {
            this.notName = false;
        }
        // check mail
        if (this.expression.test(this.userdto.email)) {
            this.notEmail = false;
        } else {
            this.notEmail = true;
        }
        // check phone
        if (this.userdto.phoneNumber.length < 10) {
            this.notPhoneNumber = true;
        } else {
            this.notPhoneNumber = false;
        }
        //check pass
        if (this.userdto.password != this.userdto.conFirmPassword) {
            this.wrongPass = true;
        } else {
            this.wrongPass = false;
        }
        if (!this.notName && !this.notEmail && !this.notPhoneNumber && !this.wrongPass) {
            console.log('Đăng ký thành công');
            this.authService.signup(this.userdto).subscribe(
              res =>{
                console.log(res)
              }
            );
        }
    }
}
