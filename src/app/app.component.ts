import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('childComponent') childComponent!: ChildComponent;

  title = 'dynamic-service';
  selectedService: any;
  serviceList: any = [
    { id: 1, serviceName: 'serviceA' },
    { id: 2, serviceName: 'serviceB' },
    { id: 3, serviceName: 'serviceC' },
    { id: 4, serviceName: 'serviceD' },
  ];

  ngOnInit(): void {
    this.selectedService = this.serviceList[0].serviceName;
  }

  callChildComp() {
    this.childComponent.getChildServiceName();
  }
}
