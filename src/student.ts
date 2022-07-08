import { Person } from "./person";
import { Subject } from "./subject";

export type IGrade = 1 | 2 | 3 | 4 | 5

export class Student extends Person {
  enrolledSubjects: Subject[] = [];
  journal: Map<string, IGrade[]>;

  constructor(name: string, surname: string, email: string, age: number) {
    super(name, surname, email, age);
    this.journal = new Map();
  }

  /**
   * Enroll student to the subject if he has not been yet enrolled
   * @param subject 
   */
  enrolToSubject(subject: Subject): void {
    throw new Error("Not implemented yet")
  }

  /**
   * add a grade for a  subject 
   * @param subject 
   * @param mark 
   */
  putGrade(subject: Subject, mark: IGrade): void {
    throw new Error("Not implemented yet")
  }

  /**
   * Get lowest value for grades 
   *    if subject is not  defined then return lowest value of all grades
   * @param subject 
   */
  getLowestGrade(subject?: Subject): IGrade {

    throw new Error("Not implemented yet")

  }

  /**
   * Get highest value for grades 
   *    if subject is not  defined then return highest value of all grades
   * @param subject 
   */
  getHighestGrade(subject?: Subject): IGrade {

    throw new Error("Not implemented yet")

  }

  /**
   * Get mean value for grades 
   *    if subject is not  defined then return mean value of all grades
   * @param subject 
   */
  getMeanGrade(subject?: Subject): number {
    throw new Error("Not implemented yet")
  }

  /**
   * Get counts of grades 
   *    if subject is not  defined then return count of all grades
   * @param subject 
   */
  getGradeCount(subject?: Subject): number {

    throw new Error("Not implemented yet")

  }

  /**
   * Check if student passed all his exams (refer to subject class to see the conditions)
   * @returns 
   */
  passedAllExams(): boolean {
    throw new Error("Not implemented yet")
  }

  /**
   * Check if user passed the exam for subject
   * @param subject 
   * @returns 
   */
  examPassed(subject: Subject): boolean {
    throw new Error("Not implemented yet")
  }


  /* should return a string in the form   
  *  ____________________________________________________________________________________________________________
  *  |  Name: xxxx                                                                                              |
  *  |  Surname: xxx                                                                                            |
  *  |  Subjects:                                                                                               |
  *  |     ______________________________________________________________________________________________       |
  *  |     |Subject name    | Teacher    |  Mean Grade   |  Min Grade  |   Max Grade    | Exam passed   |       |
  *  |     |   XXXX         | Name SrName|    X          |     X       |      X         | "Yes" or "no" |       |
  *  |     |    ....                                                                                    |       |
  *  |     ----------------------------------------------------------------------------------------------       |
  *  ------------------------------------------------------------------------------------------------------------ 
  */
  printStudentStats(): string {
    throw new Error("Not implemented yet")
  }

}