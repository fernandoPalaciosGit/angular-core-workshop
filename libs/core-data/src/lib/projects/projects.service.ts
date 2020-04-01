import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  readonly BASE_URL: string = 'http://localhost:3000';
  private model: string = 'projects';

  constructor(private httpClient: HttpClient) {
  }

  all(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/${this.model}`);
  }
}
