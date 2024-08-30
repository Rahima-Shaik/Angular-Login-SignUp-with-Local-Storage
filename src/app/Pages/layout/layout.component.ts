import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUser : any;

  constructor(private route:Router)
  {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null)
    {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  onLogout()
  {
    localStorage.removeItem('loggedUser');
    this.route.navigate(['/']);
  }

}
