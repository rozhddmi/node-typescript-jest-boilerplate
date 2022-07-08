import { Student } from "./student";
import { Subject } from "./subject";
import { Teacher } from "./teacher";


export class School {
  subjects: Subject[];
  teachers: Teacher[];
  students: Student[];

  constructor(subjects?: Subject[], teachers?: Teacher[], students?: Student[]) {
    // implement the constructor
  }

  /**
   * Should add a subject to the school 
   * If teacher is defined then assign a subject to a teacher right away 
   * @param subject 
   * @param teacher 
   */
  addSubject(subject: Subject, teacher?: Teacher): void {
    throw new Error("Not implemented yet")

  }

  /**
 * Should add a teacher to the school 
 * If subject is defined then assign a subject to a teacher right away 
 * @param subject 
 * @param teacher 
 */
  addTeacher(teacher: Teacher, subject?: Subject): void {
    throw new Error("Not implemented yet")
  }

  /**
   * Should assign a teacher to a subject and subject to a teacher 
   * Do not forget to add teacher or subject to the school if they are not there yet
   * @param teacher 
   * @param subject 
   */
  assignTeacherToASubject(teacher: Teacher, subject: Subject): void {
    throw new Error("Not implemented yet")
  }


  /**
   * Should add student to a school do not forget to test if student is already there
   * if subjects are defined enroll studenbt to these subjects right away (do not forget to check if subjects are already in school)
   * @param student 
   * @param subjects 
   */
  addStudent(student: Student, subjects?: Array<Subject>): void {
    throw new Error("Not implemented yet")

  }

  /**
   * Return a best school student based on mean grade
   *  if subject is defined then  return a student whit highest Mean grade for a subject
   *  if not defined then return a student with highest mean grade across all subjects
   * @param subject 
   * @returns 
   */
  getBestStudent(subject?: Subject): Student {
    throw new Error("Not implemented yet")
  }

  /**
   * Get a meanest teacher in the school (the teacher who put lowest mean grade)
   * if subject is defined then  return a teacher whit lowest Mean grade for a subject
   * if not defined then return a teacher with lowest mean grade across all his subjects
   * @param subject 
   * @returns 
   */
  getMeanestTeacher(subject?: Subject): Teacher {
    throw new Error("Not implemented yet")

  }

  /**
   * Test if all subjects has teachers 
   * @returns true if yes and false if no
   */
  allSubjectsHasTeachers(): boolean {
    throw new Error("Not implemented yet")
  }

  /**
   * Should return a string of teachers stat for a teacher or for all teacher if teacher is not defined
   *  Name Surname 
   *  Overall Mean grade: XXX
   *  Subject Name meanGrade XXX
   *  */
  printTeacher(teacher?: Teacher): string {
    throw new Error("Not implemented yet")
  }

  /**
   * Should return a string of students stat for a student or for all student if teacher is not defined
   *  Name Surname 
   *  Overall Mean grade: XXX
   *  Subject Name meanGrade XXX
   *  */
  printStudent(student?: Student): string {
    throw new Error("Not implemented yet")

  }

  /**
   * print stats for all students who passed their exams
   */
  printDiplomas(): string {
    throw new Error("Not implemented yet")
  }

}