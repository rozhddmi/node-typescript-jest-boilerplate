import { Students } from "./student";
import { Subject } from "./subject";
import { Teacher } from "./teacher";


export class School {
  subjects: Array<Subject>;
  teacher: Array<Teacher>;
  student: Array<Students>;


  addSubject(subject: Subject, teacher?: Teacher) {
    // If teacher is defined the assign a subject to a teacher right away 
  }

  addTeacher(teacher: Teacher, subject?: Subject) {
    // If subject is defined the assign a subject to a teacher right away 
  }

  assignTeracherToASubject(teacher: Teacher, subject: Subject) {

  }

  addStudent(student: Students, subjects?: Array<Subject>) {
    // If subjects are defined then enroll student to all subject
  }

  getBestStudent(subject?: Subject): Student {
    // if subject is defined then  return a student whit highest Mean grade for a subject
    // if not defined then return a student with highest mean grade across all subjects
  }

  getMeanestTeacher(subject?: Subject): Teacher {
    // if subject is defined then  return a teacher whit lowest Mean grade for a subject
    // if not defined then return a teacher with lowest mean grade across all his subjects
  }

  allSubjectsHasTeachers(): boolean {
    // Test if all subjects has teachers 
  }

  printDiploma(): string {
    // print stats for all students who passed their exams
  }

}