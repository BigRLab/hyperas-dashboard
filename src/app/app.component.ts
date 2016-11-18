import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hyperas Dashboard';
  todos = [
    { name: 'Server with mock for real time data' },
    { name: 'GraphQL Server' },
    { name: 'Add Appolo Client' },
    { name: 'Subscribe to Appolo client' },
    { name: 'Add chart', completed: true },
    { name: 'Connect chart to real time data', completed: false }
  ];
}
