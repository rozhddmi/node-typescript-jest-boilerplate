import { Person } from "./person";
import { Subject } from "./subject";

export type IGrade = 1 | 2 | 3 | 4 | 5

export class Students extends Person {
  enrolledSubjects: Array<Subject>;
  journal: Map<string, IGrade[]>;

  constructor(/** What needs to go here*/) {
    // Write a constructor
  }

  enrolToSubject(subject: Subject) {
    // add the subject to the enrolledSubjects
    // add subject to the "journal" so teacher can assign grades (by subject name)
  }

  pupGrade(subject: Subject, mark: number) {
    // addd a grede for a  subject 
  }

  getLowestGrade(subject: Subject): IGrade {

  }

  getHighestGrade(subject: Subject): IGrade {

  }

  getMeanGrade(subject: Subject): number {

  }

  examPassed(subject: Subject): boolean {
    // Check if the student passed the exam
  }

  /* should return a string in the exact form (Respect table view and column sizes)    
    ____________________________________________________________________________________________________________
    |  Name: xxxx                                                                                              |
    |  Surname: xxx                                                                                            |
    |  Subjects:                                                                                               |
    |     ______________________________________________________________________________________________       |
    |     |Subject name    | Teacher    |  Mean Grade   |  Min Grade  |   Max Grade    | Exam passed   |       |
    |     |   XXXX         | Name SrName|    X          |     X       |      X         | "Yes" or "no" |       |
    |     |    ....                                                                                    |       |
    |     ----------------------------------------------------------------------------------------------       |
    ------------------------------------------------------------------------------------------------------------ 
  */
  printStudentStatS(): string {


  }

}