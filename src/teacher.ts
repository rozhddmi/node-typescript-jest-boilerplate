import { Person } from "./person";
import { Subject } from "./subject";
import { IGrade, Student } from "./student";

export class Teacher extends Person {
  subjects: Array<Subject>;
  assignedGrades: Map<string, IGrade[]> // map where the key is a subject name and values are all grades this teacher put (successfully to any stydent)

  constructor(name: string, surname: string, email: string, age: number) {
    // Implement the constructor
  }

  /**
   * Assign a teacher to subject do not forget reverse assigment
   * And to check if teacher has not been already assigned to this subject
   * @param subject 
   */
  assignToSubject(subject: Subject): void {
    throw new Error("Not implemented yet")

  }

  /**
   * Calculate mean value for grades for subject if defined or for all subjects
   * return -1 if teacher is not teaching this subject
   * @param subject 
   */
  getMeanGrade(subject?: Subject): number {

    throw new Error("Not implemented yet")

  }

  /**
   *  Put a grade for a student 
   *  Only teachers who are assigned to the subject can grade the student
   *   Students can be assigned a grade only for enrolled subjects
   * @param subject 
   * @param student 
   * @param grade 
   * @returns 
   */
  putMarkToStudent(subject: Subject, student: Student, grade: IGrade): void {
    throw new Error("Not implemented yet")
  }



  /* should return a string in the exact form (Respect table view and column sizes)    
  ___________________________________________________________________________________________
  |  Name: xxxx                                                                             |
  |  Surname: xxx  
  |  Overall Mean teacher grade: XXX                                                                         |
  |  Subject: XXXX                                                                          |
  |    Students:                                                                            |
  |       _____________________________________________________________________________     |
  |       | Student    |  Mean Grade   |  Min Grade  |   Max Grade    | Exam passed   |     |
  |       | Name SrName|    X          |     [X, Y]  |     [X, Y]     |["Yes" or "no"]|     |
  |       |                                                                           |     |
  |       -----------------------------------------------------------------------------     |
  ------------------------------------------------------------------------------------------- 
*/
  printTeacherStat(): string {
    throw new Error("Not implemented yet")
  }

}