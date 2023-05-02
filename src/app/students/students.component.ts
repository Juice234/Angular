import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchStudents();
  }
  // Get student data from api
  fetchStudents() {
    this.http.get<any[]>('http://localhost:8080/students').subscribe(data => {
      this.students = data;
    });
  }
  // Delete a student by id
  deleteStudent(sid: string) {
    this.http.delete(`http://localhost:8080/students/${sid}`).subscribe(() => {
      this.fetchStudents();
    });
  }
}
