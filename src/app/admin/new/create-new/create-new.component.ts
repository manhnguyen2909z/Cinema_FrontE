import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/api/auth.service';
import { UserDto } from '../../../services/model/userdto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
})
export class CreateNewComponent implements OnInit {
  roleDto: any;
  userdto !: UserDto;
  fullNamme!: string;
  userEmail!: string;
  phoneNumber!: string;
  password!: string;
  conFirmPassword!: string;
  roleId!: string;
  role: any;

  constructor(private router: Router, private user: AuthService) {
  }

  ngOnInit(): void {
    this.user.getAllRole().subscribe(res => {
      this.roleDto = res;
    });
  }

  signUp() {
    const userSignUp = {
      fullNamme: this.fullNamme,
      email: this.userEmail,
      phoneNumber: this.phoneNumber,
      password: this.password,
      conFirmPassword: this.conFirmPassword,
      roleName:
        [
          this.role,
        ],
    };
    this.user.signup(userSignUp).subscribe(
      () => {
        alert('đăng ký thành công');
        this.router.navigate(['/admin/list-acc']);
      },
      () => {
        alert('đăng ký thất bại');
        this.router.navigate(['/admin/list-acc']);
      });
  }
}
