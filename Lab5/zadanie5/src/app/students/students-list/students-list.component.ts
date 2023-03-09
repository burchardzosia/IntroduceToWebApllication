import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Student } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: any;
  StudentSubsription: Subscription | undefined
    tablicaSerwe: any[] = []

  constructor(private studentService: StudentService) { }

  ngOnInit() {

    this.getStudentsList()
    



  }

  getStudentsList() {
    this.StudentSubsription= this.studentService.getStudentsList().subscribe(change => {
      this.tablicaSerwe = []
      for (let student of change){
        this.tablicaSerwe.push({
          key: student.key,
          name: student.name,
          age: student.age
        }as Student)

      }
    
 
  })
}


  deleteStudents() {
    this.studentService.deleteAll();

  }

}
