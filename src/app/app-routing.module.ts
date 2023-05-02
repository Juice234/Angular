import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturersComponent } from './lecturers/lecturers.component';
import { StudentsComponent } from './students/students.component';
import { LecturerUpdateComponent } from './lecturer-update/lecturer-update.component';

const routes: Routes = [
  { path: 'lecturers', component: LecturersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lecturers/update/:lid', component: LecturerUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
