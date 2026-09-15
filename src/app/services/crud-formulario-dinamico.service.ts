import { Injectable } from '@angular/core';
import { RequestManager } from '../managers/request-manager';

@Injectable()
export class CrudFormularioDinamicoService {

    constructor(private requestManager: RequestManager) {
        this.requestManager.setPath('CRUD_FORMULARIO_DINAMICO_SERVICE');
    }
    get(endpoint: string) {
        this.requestManager.setPath('CRUD_FORMULARIO_DINAMICO_SERVICE');
        return this.requestManager.get(endpoint);
    }

    post(endpoint: string, element: any) {
        this.requestManager.setPath('CRUD_FORMULARIO_DINAMICO_SERVICE');
        return this.requestManager.post(endpoint, element);
    }

    put(endpoint: string, element: any) {
        this.requestManager.setPath('CRUD_FORMULARIO_DINAMICO_SERVICE');
        return this.requestManager.put(endpoint, element);
    }

    delete(endpoint: string, element: any) {
        this.requestManager.setPath('CRUD_FORMULARIO_DINAMICO_SERVICE');
        return this.requestManager.delete(endpoint, element.Id);
    }
}