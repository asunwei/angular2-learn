import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Book } from './book';
@Injectable()
export class BookService {
  private booksUrl = 'app/books.json';  
  constructor(private http: Http) { }
  getBooks() {
    return this.http.get(this.booksUrl)
               .toPromise()
               .then(response => response.json() as Book[])
               .catch(this.handleError);
  }
  getBook(id: number) {
    return this.getBooks()
               .then(books => books.find(book => book.id === id));
  }
  save(book: Book): Promise<Book>  {
    if (book.id) {
      return this.put(book);
    }
    return this.post(book);
  }
  delete(book: Book) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.booksUrl}/${book.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }
  // Add new Book
  private post(book: Book): Promise<Book> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.booksUrl, JSON.stringify(book), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }
  // Update existing Book
  private put(book: Book) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.booksUrl}/${book.id}`;
    return this.http
               .put(url, JSON.stringify(book), {headers: headers})
               .toPromise()
               .then(() => book)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
