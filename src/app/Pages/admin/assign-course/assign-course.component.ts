import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../Service/course.service';
import { AssignmentService } from '../../Service/assignment.service';

@Component({
  selector: 'app-assign-course',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './assign-course.component.html',
  styleUrl: './assign-course.component.css'
})
export class AssignCourseComponent implements OnInit {
  courses = [];
  employees = [];
  selectedCourseId: number | undefined;
  selectedEmployeeId: string | undefined;

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadEmployees();
  }

  loadCourses(): void {
    this.assignmentService.getCourses().subscribe((data) => {
      this.courses = data; // Store the courses in the component
    });
  }

  loadEmployees(): void {
    this.assignmentService.getEmployees().subscribe((data) => {
      this.employees = data; // Store the employees in the component
    });
  }

  assignCourse(): void {
    if (this.selectedCourseId && this.selectedEmployeeId) {
      this.assignmentService
        .assignCourse(this.selectedEmployeeId, this.selectedCourseId)
        .subscribe(
          (response) => {
            console.log('Course assigned successfully:', response);
            // Add your success logic here
          },
          (error) => {
            console.error('Error assigning course:', error);
            // Add your error handling logic here
          }
        );
    } else {
      alert('Please select both a course and an employee.');
    }
  }
}
