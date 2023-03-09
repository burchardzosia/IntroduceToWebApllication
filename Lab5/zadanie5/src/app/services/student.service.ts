import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { first, Observable } from 'rxjs';
import { Student } from '../students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  StudentTable: Observable<any[]>; 

 
  constructor(private db: AngularFireDatabase) {
    this.StudentTable = this.db.list('student').valueChanges();
  
  }

  createStudent(student: Student): void {
    let keyn=0
    this.db.list('student').snapshotChanges().pipe(first()).subscribe((list:any) =>{
      for(let i of list){
        
      
        keyn+=1


        
        
      }
      this.db.list('student').push({
        name:student.name,
        age:student.age,
        key:keyn
        
        
      })
    } )
   
    
  
  }

  updateStudent(key: string, value: any) {
    
    this.db.list('student').snapshotChanges().pipe(first()).subscribe((list:any) =>{
      for(let i of list){
        if(i.payload.val().key=key)
        {
          this.db.list('student').update(i.payload.key, {age: value})
        }
      }
    } )
   
  }

  deleteStudent(key: string) {
    console.log(key)
    this.db.list('student').snapshotChanges().pipe(first()).subscribe((list:any) =>{
      for(let i of list){
        if(i.payload.val().key==key)
        {
          this.db.list('student').remove(i.payload.key)
        }
      }
    } )
 
  }

  getStudentsList(): Observable<any[]> {
    return this.StudentTable

  
  }

   deleteAll() {
    this.db.list('student').snapshotChanges().pipe(first()).subscribe((list:any) =>{
      for(let i of list){
        
      
        this.db.list('student').remove(i.payload.key)
        
      }
    } )
   }
    
}
