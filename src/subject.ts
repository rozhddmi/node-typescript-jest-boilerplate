import { Teacher } from "./teacher";
import { Student } from "./student"

export class Subject {
  subjectName: string;
  teacher?: Teacher; // what does a question mark means>?
  meanGradeToPassExam = 3.5;
  minAmountOfGradesToPassTheExam = 5;
  enrolledStudents: Student[];


  constructor(subjectName: string, teacher?: Teacher) {
    // write a constructor
    this.enrolledStudents = [];
    this.subjectName = subjectName;
    if (teacher) {
      this.assignNewTeacher(teacher)
    }
  }

  assignNewTeacher(teacher: Teacher): void {
    // assign a teacher to a subject
    this.teacher = teacher;
    teacher.assignToSubject(this);
  }

  enrollStudent(student: Student): void {
    if (!this.enrolledStudents.filter(s => s === student)[0]) {
      // Enrole only if we dont have this 
      this.enrolledStudents.push(student);
      student.enrolToSubject(this);
    }

  }

  isStudentPassedTheExam(student: Student): boolean {
    // check if a student passed the exam
    // use meanGradeToPassExam and minAmountOfGradesToPassTheExam to evaluate 
    // Don t forget to check if student has been enrolled to the subject
    if (this.enrolledStudents.filter(s => s === student)[0]) {
      const meanGrade = student.getMeanGrade(this);
      const gradeCount = student.getGradeCount(this);

      return meanGrade > this.meanGradeToPassExam && gradeCount > this.minAmountOfGradesToPassTheExam
    }
    return false
  }

}