import { Teacher } from "./teacher";
import { Student } from "./student"

export class Subject {
  subjectName: string;
  teacher?: Teacher; // what does a question mark means>?
  meanGradeToPassExam = 3.5;
  minAmountOfGradesToPassTheExam = 5;
  enrolledStudents: Student[];


  constructor(subjectName: string, teacher?: Teacher) {
    // implement the constructor
  }

  /**
   *  assign a teacher to a subject if he has not been assigned yet
   *  do not forget to assign subject to a teacher
   * @param teacher 
   */
  assignNewTeacher(teacher: Teacher): void {
    throw new Error("Not implemented yet")

  }

  /**
   * Enroll student to a subject if he has not been enrolled yet, do not forget to assign student to a subject
   * @param student 
   */
  enrollStudent(student: Student): void {
    throw new Error("Not implemented yet")


  }

  /**
   * check if a student passed the exam
   * use meanGradeToPassExam and minAmountOfGradesToPassTheExam to evaluate 
   * Don t forget to check if student has been enrolled to the subject
   * @param student 
   */
  isStudentPassedTheExam(student: Student): boolean {

    throw new Error("Not implemented yet")

  }

}