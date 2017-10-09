import { Injectable } from "@angular/core";

@Injectable()

export class ToasterService {
    message: string = '';
    type: string = '';


/**
 * @param {string} message 
 * @param {string} info.success.failure.warning 
 * @memberof ToasterService
 */

    set(message: string, type: string) {
        this.message = message;
        this.type = type;
    }

    get() {
        return {
            message: this.message,
            type: this.type
        }
    }
}