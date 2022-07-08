import { Student } from "./student";
import { Subject } from "./subject";
import { Teacher } from "./teacher";


export class School {
  subjects: Subject[] = [];
  teachers: Teacher[] = [];
  students: Student[] = [];


  addSubject(subject: Subject, teacher?: Teacher): void {
    // If teacher is defined the assign a subject to a teacher right away 
    if (!this.subjects.filter(f => f === subject)[0]) {
      this.subjects.push(subject)
    }
    if (teacher) {
      subject.assignNewTeacher(teacher)
    }
  }

  addTeacher(teacher: Teacher, subject?: Subject): void {
    if (!this.teachers.filter(f => f === teacher)[0]) {
      this.teachers.push(teacher)
      if (subject) {
        subject.assignNewTeacher(teacher)
      }
    }
  }

  assignTeacherToASubject(teacher: Teacher, subject: Subject): void {
    if (!this.subjects.filter(f => f === subject)[0]) {
      this.subjects.push(subject)
    }
    subject.assignNewTeacher(teacher)

  }

  addStudent(student: Student, subjects?: Array<Subject>): void {
    if (!this.students.filter(f => f === student)[0]) {
      this.students.push(student)
      if (subjects) {
        subjects.forEach(s => s.enrollStudent(student))
      }
    }
  }

  getBestStudent(subject?: Subject): Student {
    // if subject is defined then  return a student whit highest Mean grade for a subject
    // if not defined then return a student with highest mean grade across all subjects
    const sorted = [...this.students]
    sorted.sort((s1, s2) => {
      const s1grade = s1.getMeanGrade(subject)
      const s2grade = s2.getMeanGrade(subject)
      if (s1grade > s2grade) {
        return -1
      } else if (s2grade > s1grade) {
        return 1
      }
      return 0

    })
    return sorted[0]

  }

  getMeanestTeacher(subject?: Subject): Teacher {
    // if subject is defined then  return a teacher whit lowest Mean grade for a subject
    // if not defined then return a teacher with lowest mean grade across all his subjects
    const sorted = [...this.teachers]

    sorted.sort((t1, t2) => {
      const t1MeanGrade = t1.getMeanGrade(subject);
      const t2MeanGrade = t2.getMeanGrade(subject);
      if (t1MeanGrade > t2MeanGrade) {
        return -1
      } else if (t2MeanGrade > t1MeanGrade) {
        return 1
      }
      return 0
    })
    return sorted[0]

  }

  allSubjectsHasTeachers(): boolean {
    // Test if all subjects has teachers 
    return this.subjects.filter(s => !s.teacher).length === 0
  }

  /**
   * Should return a string of teachers stat for a teacher or for all teacher if teacher is not defined
   *  Name Surname 
   *  Overall Mean grade: XXX
   *  Subject Name meanGrade XXX
   *  */
  printTeacher(teacher?: Teacher): string {
    return (teacher ? [teacher] : this.teachers).map(t => t.printTeacherStat()).join("\n")
  }

  /**
   * Should return a string of students stat for a student or for all student if teacher is not defined
   *  Name Surname 
   *  Overall Mean grade: XXX
   *  Subject Name meanGrade XXX
   *  */
  printStudent(student?: Student): string {
    return (student ? [student] : this.students).map(t => t.printStudentStats()).join("\n")

  }

  printDiploma(): string {
    return this.students.filter(s => s.passedAllExams()).map(s => s.printStudentStats()).join("\n")
    // print stats for all students who passed their exams
  }

}