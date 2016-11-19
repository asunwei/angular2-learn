import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKS } from './books-data';

@Injectable()
export class BookService {

    getBooks() {
       // return BOOKS;
        return Promise.resolve(BOOKS);
    }
 
}
