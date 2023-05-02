import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class LecturersService {
  private apiUrl = 'http://localhost:8080/lecturers'; // endpoint for the lecturers
  
  constructor(private http: HttpClient) {}

  // Get all lecturers from the API
  getLecturers(): Observable<any> {
    return this.http.get(this.apiUrl); // Send a GET request to the API and retrieve the lecturers
  }
  
  // Find a lecturer by their ID
  findByLid(lid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${lid}`); // Send a GET request to the API  with the lecturer ID and retrieve the id
  }
  
  // Update a lecturer's details
  updateLecturer(lid: string, lecturer: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${lid}`, lecturer); // Send a PUT request to the API  with the lecturer ID and the new details 
  }
}
