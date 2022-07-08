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

  enrolToSubject(subject: Subject): void {
    if (!this.enrolledSubjects.filter(s => s === subject)[0]) {
      // Enroll only if we don't have this 
      this.enrolledSubjects.push(subject);
      subject.enrollStudent(this);
    }

  }

  putGrade(subject: Subject, mark: IGrade): void {
    // add a grade for a  subject 
    if (this.enrolledSubjects.filter(s => s === subject).length > 0) {
      const marks = this.journal.get(subject.subjectName) || [];
      marks.push(mark)
      this.journal.set(subject.subjectName, marks)
    }
  }

  getLowestGrade(subject?: Subject): IGrade {
    // Get lowest value for grades 
    //    if subject is not  defined then return lowest value of all grades
    if (subject) {
      return Math.min(...(this.journal.get(subject.subjectName) || [])) as IGrade;
    } else {
      const grades = [...this.journal.values()].flat()
      return Math.min(...grades) as IGrade;
    }
  }

  getHighestGrade(subject?: Subject): IGrade {
    // Get highest value for grades 
    //    if subject is not  defined then return highest value of all grades
    if (subject) {
      return Math.max(...(this.journal.get(subject.subjectName) || [])) as IGrade;
    } else {
      const grades = [...this.journal.values()].flat()
      return Math.max(...grades) as IGrade;
    }
  }

  getMeanGrade(subject?: Subject): number {
    // Get mean value for grades 
    //    if subject is not  defined then return mean value of all grades
    if (subject) {
      const grades = this.journal.get(subject.subjectName) || []
      return grades.reduce((sum, val) => sum + val, 0) / grades.length
    } else {
      const grades = [...this.journal.values()].flat()
      return grades.reduce((sum, val) => sum + val, 0) / grades.length
    }
  }

  getGradeCount(subject?: Subject): number {
    // Get counts of grades 
    //    if subject is not  defined then return count of all grades
    if (subject) {
      if (!this.enrolledSubjects.filter(s => s === subject).length) {
        return -1;
      }
      const grades = this.journal.get(subject.subjectName) || []
      return grades.length
    } else {
      const grades = [...this.journal.values()].flat()
      return grades.length
    }
  }

  passedAllExams(): boolean {
    return this.enrolledSubjects.filter(s => !this.examPassed(s)).length === 0;
  }

  examPassed(subject: Subject): boolean {
    // Check if the student passed the exam
    return subject.isStudentPassedTheExam(this);
  }

  /* should return a string in the form   
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
  printStudentStats(): string {
    const res = this.enrolledSubjects.map(s => `${s.subjectName} | ${s.teacher?.name} | ${s.teacher?.surname} | ${this.getHighestGrade(s)}|${this.getHighestGrade(s)}| ${this.examPassed(s) ? "Yes" : "No"}`).join("\n")

    return `
Name: ${this.name}
Surname: ${this.surname}
Subjects: 
        | Subject name     | Teacher   |  Mean Grade   |  Min Grade  |   Max Grade    | Exam passed   |
        ${res}`;

  }

}