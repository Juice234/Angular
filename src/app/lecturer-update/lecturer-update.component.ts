import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturersService } from '../lecturers.service';

@Component({
  templateUrl: './lecturer-update.component.html',
  styleUrls: ['./lecturer-update.component.css'], 
})
export class LecturerUpdateComponent implements OnInit {
  lecturer: any; 
  lid!: string;

  constructor(
    private route: ActivatedRoute, 
    private lecturersService: LecturersService, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.lid = this.route.snapshot.params['lid']; // Get lid from url
    this.getLecturer(); // Get all lecturere data
  }
  
  getLecturer() {
    this.lecturersService.findByLid(this.lid).subscribe((data) => { // Retrieve lecturer data by lid
      this.lecturer = data; // Set details to chosen lecturer
    });
  }
  
  onSubmit(updatedLecturer: any) { // This method is called when the form is submitted
    const updatedData = { // // What data should be sent, it can only be this data or the server will causes issues even if some data remains the same
      name: updatedLecturer.name,
      taxBand: updatedLecturer.taxBand,
      salaryScale: updatedLecturer.salaryScale,
    };
  
    this.lecturersService.updateLecturer(this.lid, updatedData).subscribe(() => { //Update the lectuerer
      this.router.navigate(['/lecturers']); // Go back to the lecturers page
    });
  }
}
