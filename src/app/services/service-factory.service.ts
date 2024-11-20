import { Injectable } from '@angular/core';
import { ServiceAService } from './service-a.service';
import { ServiceBService } from './service-b.service';
import { ServiceCService } from './service-c.service';
import { ServiceDService } from './service-d.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceFactoryService {
  private serviceMap = new Map<string, any>();

  constructor(
    private serviceA: ServiceAService,
    private serviceB: ServiceBService,
    private serviceC: ServiceCService,
    private serviceD: ServiceDService
  ) {
    this.serviceMap.set('serviceA', this.serviceA);
    this.serviceMap.set('serviceB', this.serviceB);
    this.serviceMap.set('serviceC', this.serviceC);
    this.serviceMap.set('serviceD', this.serviceD);
  }

  getService(serviceName: string): any {
    return this.serviceMap.get(serviceName);
  }
}
