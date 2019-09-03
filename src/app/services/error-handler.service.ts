import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler{
    constructor() {}

    handleError(error: any) {
        // Implement your own way of handling errors
    }
}