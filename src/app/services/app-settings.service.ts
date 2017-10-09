import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingsService {

  isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  setLoading(tobeload: boolean) {
    this.isLoading = tobeload;
  }

  getLoading(): boolean {
    return this.isLoading;
  }

}
