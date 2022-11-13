import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  userdto!: UserDto;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userdto = new UserDto();
  }

  register() {
    console.log(this.userdto);
    this.authService.signup(this.userdto).subscribe();
  }
}
