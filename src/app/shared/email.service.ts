import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Email } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  serverUrl = environment.baseUrl;

  sendMessage(message: Email) {
    return this.http.post(`${this.serverUrl}/email`, message);
  }
}
