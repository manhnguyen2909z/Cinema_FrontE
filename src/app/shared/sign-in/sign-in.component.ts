import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userdto!: UserDto;
  messageError!: string;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.userdto = new UserDto();
    this.messageError = '';
  }

  signin() {
    this.authService.signin(this.userdto).subscribe( (token: string) =>{
      localStorage.setItem('authToken', token);
      this.messageError = '';
      if(token === "failed"){
        this.messageError = "Email hoặc mật khẩu không chính xác";
        return;
      }
      this.router.navigate(['/'])
    });
  }

}
