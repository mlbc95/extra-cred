import { TestBed, inject } from '@angular/core/testing';

import { SidebarBridgeService } from './sidebar-bridge.service';

describe('SidebarBridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarBridgeService]
    });
  });

  it('should be created', inject([SidebarBridgeService], (service: SidebarBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
