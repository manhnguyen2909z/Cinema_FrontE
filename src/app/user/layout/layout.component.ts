import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { UserDto } from 'src/app/services/model/userdto';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) {
    this.getuser()
   }
  user!: UserDto;
  ngOnInit(): void {
    this.user = new UserDto();
    if(localStorage.length !== 0){
      this.isLogin = true;
      this.getuser();
    }else{
      this.isLogin= false
    }
  }
  @Input()
  isLogin= false
  logout(){
    this.isLogin = false
    localStorage.clear();
    this.router.navigate(['/signIn'])
  }

  getuser(){
    this.authservice.getUserInfo().subscribe( (res) =>{
      this.isLogin = true;
      this.user = res;
    })
  }

}
