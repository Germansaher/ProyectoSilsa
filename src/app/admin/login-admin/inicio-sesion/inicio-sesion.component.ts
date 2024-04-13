import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  constructor(
    private loginService:LoginService,
    private fb:FormBuilder,
  ) { }
  formLogin:FormGroup = this.fb.group(
    {
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    }
  )
  loginAdmin(){
    if(this.formLogin.invalid)return console.log("ola")
    this.loginService.loginAdmin(this.formLogin.value).subscribe(data =>{
      if(data.status === 200){
        alert("login correcto")
        if(data.id)
        localStorage.setItem('token',data.id.toString());
      }
      else if(data.status === 400){
        alert(data.message)
      }
    });
  }
}
