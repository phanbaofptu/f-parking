import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  notification = [
    {
      content:'Hệ thống đang trong quá trình thử nghiệm. Nếu có bất kì vấn đề gì vui lòng liên hệ với nhóm dự án.',
  
    }
  ]
}
