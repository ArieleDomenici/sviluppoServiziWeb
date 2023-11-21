import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true
})
export class RootComponent implements OnInit {
  title: string = 'Angular ' + VERSION.major;
  constructor() { }

  ngOnInit() {
  }

}