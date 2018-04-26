import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators'
import 'rxjs/add/operator/map';

import { Product } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'assets/products/mobiles.json';
    selectedProducts: any = [];
    products: any = [];
    producttype = 'tablet';
    username: string;
    constructor(private http: HttpClient) {
        if (sessionStorage.getItem('selectedProducts')) {
            this.selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts'));
        }
    }

    getProducts(): Observable<Product[]> {
        if (this.producttype === 'tablet') {
            
            return this.http.get<Product[]>('assets/products/tablets.json').pipe(
                catchError(this.handleError));
        } else if (this.producttype === 'mobile') {
            return this.http.get('assets/products/mobiles.json').pipe(
                catchError(this.handleError));
        }
    }

    getProduct(id: number): Observable<Product> {
        return this.getProducts()
            .map(products => products.filter(product => product.productId === id)[0]);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
