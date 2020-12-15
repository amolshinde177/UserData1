import { Component, OnInit } from '@angular/core';
import {Album} from './user.model';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  album!: Album[];

  constructor(private dataService: DataService) {}
  
  ngOnInit(){
     return this.dataService.getUsers()
     .subscribe(data => this.album = data);
  }
}
