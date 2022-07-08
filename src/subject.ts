import { Teacher } from "./teacher";


export class Subject {
  subjectName: string;
  teacher?: Teacher; // what does a question mark means>?
  meanGradeToPassExam = 3.5;
  minAmountOfGradesToPassTheExam = 5;
  enrolledStudents: Array<Student>;


  constructor(subjectName: string, hasAnExam: boolean, teacher?: Teacher) {
    // write a constructor
  }

  assignNewTeacher(teacher: Teacher) {
    // assighn a teacher to a subject
  }

  enroleStudent(student: Student) {


  }

  isStudentPassedTheExam(student: Student): boolean {
    // check if a student passed the exam
    // use meanGradeToPassExam and minAmountOfGradesToPassTheExam to evaluate 
    // Don t forget to check if student has been enrolled to the subject
  }

}