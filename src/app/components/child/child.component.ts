import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceFactoryService } from '../../services/service-factory.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnChanges {
  @Input() serviceName!: string;
  activeService: any;
  receivedData: any;

  constructor(private serviceFactory: ServiceFactoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.serviceName) {
      this.activeService = this.serviceFactory.getService(this.serviceName);
      console.log(this.activeService);
    }
  }

  getChildServiceName() {
    this.activeService?.getServiceName();
    this.activeService?.getData().subscribe((res: any) => {
      console.log(res);
      this.receivedData = res;
    });
  }
}
