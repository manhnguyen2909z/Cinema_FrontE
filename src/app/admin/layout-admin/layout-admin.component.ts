import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/services/model/userdto';
import { AuthService } from '../../services/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  user!: UserDto;

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
    this.user = new UserDto();
    if(localStorage.getItem('authToken')){
      this.getuser();
    }
  }
  getuser(){
    this.authservice.getUserInfo().subscribe( (res:any) =>{
      this.user = res;
      console.log(this.user);
    })
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/signIn'])
  }

}
