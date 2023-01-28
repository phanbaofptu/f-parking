import { Component } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  data = [
    {id:1, time:"17:29, 27/01/2023", studentId:"DE170027", name:"Phan Gia Bảo", bienSoXe:38178, khuVuc: "NX001", user: "BaoPG", type:"Check-in"},
    {id:2, time:"17:49, 29/01/2023", studentId:"DE170028", name:"Phan Hoàng Nhật", bienSoXe:38323, khuVuc: "NX001", user: "BaoPG", type:"Check-in"},
  ]
searchText = '';

}
