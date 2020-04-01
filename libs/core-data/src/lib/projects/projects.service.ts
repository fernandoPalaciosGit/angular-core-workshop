import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  readonly BASE_URL: string = 'http://localhost:4000';
  private model: string = 'projects';

  constructor(private httpClient: HttpClient) {
  }

  getUrl() {
    return `${this.BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<any> {
    return this.httpClient.get(this.getUrl());
  }

  create(project): Observable<any> {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project): Observable<any> {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(project): Observable<any> {
    return this.httpClient.delete(this.getUrlForId(project.id));
  }
}
