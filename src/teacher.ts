import { Person } from "./person";
import { Subject } from "./subject";
import { IGrade, Student } from "./student";

export class Teacher extends Person {
  subjects: Array<Subject>;
  assignedGrades: Map<string, IGrade[]> // map where the key is a subject name and values are all grades this teacher put (successfully to any stydent)

  constructor(name: string, surname: string, email: string, age: number) {
    super(name, surname, email, age);
    this.subjects = [];
    this.assignedGrades = new Map();
  }

  assignToSubject(subject: Subject): void {
    // Assign a teacher to subject do not forget reverse assigment
    // And to check if teacher has not been already assigned to this subject
    if (!this.subjects.filter(s => s === subject)[0]) {
      this.subjects.push(subject);
      subject.assignNewTeacher(this);
    }
  }

  getMeanGrade(subject?: Subject): number {
    // Calculate mean value for grades for subject if defined or for all subjects
    // return -1 if teacher is not teaching this subject

    if (subject) {
      if (!this.subjects.filter(s => s === subject)[0]) {
        return -1;
      }
      const grades = this.assignedGrades.get(subject.subjectName) || []
      return grades.reduce((sum, val) => sum + val, 0) / grades.length;
    } else {
      const grades = [...this.assignedGrades.values()].flat()
      return grades.reduce((sum, val) => sum + val, 0) / grades.length;
    }
  }

  putMarkToStudent(subject: Subject, student: Student, grade: IGrade): void {
    // Only teachers who are assigned to the subject can grade the student
    // Students can be assigned a grade only for enrolled subjects
    if (!this.subjects.filter(s => s === subject)[0]) {
      return
    } else {
      student.putGrade(subject, grade);
      const grades = this.assignedGrades.get(subject.subjectName) || [];
      grades.push(grade)
      this.assignedGrades.set(subject.subjectName, grades)
    }
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
    const res = this.subjects.map(subject => {
      return `Subject: ${subject.subjectName}
        | Student    |  Mean Grade   |  Min Grade  |   Max Grade    | Exam passed   |
        ${subject.enrolledStudents.map(s => `${s.name}  ${s.surname} | ${s.getMeanGrade(subject)}| ${s.getLowestGrade(subject)}|${s.getHighestGrade(subject)}| ${s.examPassed(subject) ? "Yes" : "No"}`).join("\n")}
`
    })

    return `
Name: ${this.name}
Surname: ${this.surname}
Overall Mean teacher grade: ${this.getMeanGrade()}
${res.join("\n")}`;

  }
}