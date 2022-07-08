import { Person } from "./person";
import { Subject } from "./subject";


export class Teacher extends Person {
  subjects: Array<Subject>;
  assighnedGrades: Map<string, number[]> // map where the key is a subject name and values are all grades this teacher put (successfully to any stydent)

  constructor(/** What needs to go here*/) {
    // Write a constructor
  }

  assighnToSubject(subject: Subject) {
    // Assign a teacher for a subject
  }

  putMarkToStudent(subject: Subject, student: Student) {
    // Only teachers who are assigned to the subject can grade the student
    // Students can be assigned a grade only for enrolled subjects
  }



  /* should return a string in the exact form (Respect table view and column sizes)    
  ___________________________________________________________________________________________
  |  Name: xxxx                                                                             |
  |  Surname: xxx                                                                           |
  |  Students:                                                                              |
  |     _____________________________________________________________________________       |
  |     | Student    |  Mean Grade   |  Min Grade  |   Max Grade    | Exam passed   |       |
  |     | Name SrName|    X          |     X       |      X         | "Yes" or "no" |       |
  |                                                                                 |       |
  |     -----------------------------------------------------------------------------       |
  ------------------------------------------------------------------------------------------- 
*/
  printTeacherStat(students: Array<Student>): string {


  }
}