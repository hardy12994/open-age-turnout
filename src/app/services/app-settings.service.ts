import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingsService {

  isLoading: boolean;

  constructor() {
    console.log('app setting service is called');
    this.isLoading = false;
  }

  setLoading(tobeload: boolean) {
    this.isLoading = tobeload;
  }

  getLoading(): boolean {
    return this.isLoading;
  }

}
