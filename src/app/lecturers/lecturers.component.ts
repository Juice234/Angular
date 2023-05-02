import { Component, OnInit } from '@angular/core';
import { LecturersService } from '../lecturers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css'],
})
export class LecturersComponent implements OnInit {
  lecturers: any[] = [];

  constructor(private lecturersService: LecturersService, private router: Router) {}

  ngOnInit(): void {
    this.getLecturers();
  }
  // Get all lecturers
  getLecturers() {
    this.lecturersService.getLecturers().subscribe((data) => {
      this.lecturers = data;
    });
  }

  //When update is clicked navigate to update page
  onUpdate(lecturer: any) {
    this.router.navigate(['/lecturers/update', lecturer.lid]);
  }
}
