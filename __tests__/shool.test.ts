import { School, Student, Teacher, Subject } from '../src';

const school = new School();

const students: Student[] = [
  new Student('Good', 'Boy', 'Good.Boy@student.com', 16),
  new Student('Average', 'Studentus', 'Average.Studentus@student.com', 26),
  new Student('Fail', 'Badlious', 'Fail.Badlious@student.com', 36),
];
students.map((s) => school.addStudent(s));
const teachers: Teacher[] = [
  new Teacher(
    'Mathematical',
    'Genious',
    'Mathematical.Genious@teacher.com',
    46,
  ),
  new Teacher('Biological', 'Wizzard', 'Biological.Wizzard@teacher.com', 32),
  new Teacher('Language', 'Speakius', 'Language.Speakius@teacher.com', 46),
];
teachers.map((t) => school.addTeacher(t));

const subjects: Subject[] = [
  new Subject('Math', teachers[0]),
  new Subject('Biology'),
  new Subject('English'),
];
subjects.map((s) => {
  school.addSubject(s);
  students[0].enrolToSubject(s);
  students[2].enrolToSubject(s);
});

students[1].enrolToSubject(subjects[0]);
students[1].enrolToSubject(subjects[1]);
// student[3] is not enrolled to English

school.assignTeacherToASubject(teachers[1], subjects[1]);
school.assignTeacherToASubject(teachers[2], subjects[2]);
// false assignment same teacher for the same subject
school.assignTeacherToASubject(teachers[2], subjects[2]);

// Grades are set that all students have at least 6 grades for each subject

// Set grades for Math

teachers[0].putMarkToStudent(subjects[0], students[0], 4);
teachers[0].putMarkToStudent(subjects[0], students[0], 3);
teachers[0].putMarkToStudent(subjects[0], students[0], 4);
teachers[0].putMarkToStudent(subjects[0], students[0], 4);
teachers[0].putMarkToStudent(subjects[0], students[0], 2);
teachers[0].putMarkToStudent(subjects[0], students[0], 5);

teachers[0].putMarkToStudent(subjects[0], students[1], 2);
teachers[0].putMarkToStudent(subjects[0], students[1], 3);
teachers[0].putMarkToStudent(subjects[0], students[1], 2);
teachers[0].putMarkToStudent(subjects[0], students[1], 3);
teachers[0].putMarkToStudent(subjects[0], students[1], 2);
teachers[0].putMarkToStudent(subjects[0], students[1], 2);

teachers[0].putMarkToStudent(subjects[0], students[2], 2);
teachers[0].putMarkToStudent(subjects[0], students[2], 1);
teachers[0].putMarkToStudent(subjects[0], students[2], 2);
teachers[0].putMarkToStudent(subjects[0], students[2], 1);
teachers[0].putMarkToStudent(subjects[0], students[2], 2);
teachers[0].putMarkToStudent(subjects[0], students[2], 2);

// Set grades for Biology

teachers[1].putMarkToStudent(subjects[1], students[0], 5);
teachers[1].putMarkToStudent(subjects[1], students[0], 5);
teachers[1].putMarkToStudent(subjects[1], students[0], 4);
teachers[1].putMarkToStudent(subjects[1], students[0], 4);
teachers[1].putMarkToStudent(subjects[1], students[0], 5);
teachers[1].putMarkToStudent(subjects[1], students[0], 5);

teachers[1].putMarkToStudent(subjects[1], students[1], 3);
teachers[1].putMarkToStudent(subjects[1], students[1], 3);
teachers[1].putMarkToStudent(subjects[1], students[1], 3);
teachers[1].putMarkToStudent(subjects[1], students[1], 3);
teachers[1].putMarkToStudent(subjects[1], students[1], 2);
teachers[1].putMarkToStudent(subjects[1], students[1], 1);

teachers[1].putMarkToStudent(subjects[1], students[2], 1);
teachers[1].putMarkToStudent(subjects[1], students[2], 1);
teachers[1].putMarkToStudent(subjects[1], students[2], 2);
teachers[1].putMarkToStudent(subjects[1], students[2], 1);
teachers[1].putMarkToStudent(subjects[1], students[2], 2);
teachers[1].putMarkToStudent(subjects[1], students[2], 3);

// Set grades for English

teachers[2].putMarkToStudent(subjects[2], students[0], 5);
teachers[2].putMarkToStudent(subjects[2], students[0], 5);
teachers[2].putMarkToStudent(subjects[2], students[0], 2);
teachers[2].putMarkToStudent(subjects[2], students[0], 4);
teachers[2].putMarkToStudent(subjects[2], students[0], 2);
teachers[2].putMarkToStudent(subjects[2], students[0], 5);

teachers[2].putMarkToStudent(subjects[2], students[1], 3);
teachers[2].putMarkToStudent(subjects[2], students[1], 5);
teachers[2].putMarkToStudent(subjects[2], students[1], 3);
teachers[2].putMarkToStudent(subjects[2], students[1], 2);
teachers[2].putMarkToStudent(subjects[2], students[1], 2);
teachers[2].putMarkToStudent(subjects[2], students[1], 1);

teachers[2].putMarkToStudent(subjects[2], students[2], 5);
teachers[2].putMarkToStudent(subjects[2], students[2], 5);
teachers[2].putMarkToStudent(subjects[2], students[2], 2);
teachers[2].putMarkToStudent(subjects[2], students[2], 3);
teachers[2].putMarkToStudent(subjects[2], students[2], 5);
teachers[2].putMarkToStudent(subjects[2], students[2], 5);

// Wrong teacher assign grades for English
teachers[1].putMarkToStudent(subjects[2], students[0], 5);
teachers[1].putMarkToStudent(subjects[2], students[0], 5);
teachers[1].putMarkToStudent(subjects[2], students[0], 2);
teachers[1].putMarkToStudent(subjects[2], students[0], 4);
teachers[1].putMarkToStudent(subjects[2], students[0], 2);
teachers[1].putMarkToStudent(subjects[2], students[0], 5);

teachers[1].putMarkToStudent(subjects[2], students[1], 3);
teachers[1].putMarkToStudent(subjects[2], students[1], 5);
teachers[1].putMarkToStudent(subjects[2], students[1], 3);
teachers[1].putMarkToStudent(subjects[2], students[1], 2);
teachers[1].putMarkToStudent(subjects[2], students[1], 2);
teachers[1].putMarkToStudent(subjects[2], students[1], 1);

teachers[1].putMarkToStudent(subjects[2], students[2], 5);
teachers[1].putMarkToStudent(subjects[2], students[2], 5);
teachers[1].putMarkToStudent(subjects[2], students[2], 2);
teachers[1].putMarkToStudent(subjects[2], students[2], 3);
teachers[1].putMarkToStudent(subjects[2], students[2], 5);
teachers[1].putMarkToStudent(subjects[2], students[2], 5);

describe('student test', () => {
  it('meanGrade functions', () => {
    expect(students[0].getMeanGrade()).toMatchInlineSnapshot(
      `4.055555555555555`,
    );
    expect(students[1].getMeanGrade()).toMatchInlineSnapshot(
      `2.4166666666666665`,
    );
    expect(students[2].getMeanGrade()).toMatchInlineSnapshot(`2.5`);
    expect(students[0].getMeanGrade(subjects[0])).toMatchInlineSnapshot(
      `3.6666666666666665`,
    );
    expect(students[1].getMeanGrade(subjects[0])).toMatchInlineSnapshot(
      `2.3333333333333335`,
    );
    expect(students[2].getMeanGrade(subjects[0])).toMatchInlineSnapshot(
      `1.6666666666666667`,
    );
  });

  it('getHighestGrade functions', () => {
    expect(students[0].getHighestGrade()).toMatchInlineSnapshot(`5`);
    expect(students[1].getHighestGrade()).toMatchInlineSnapshot(`3`);
    expect(students[2].getHighestGrade()).toMatchInlineSnapshot(`5`);
    expect(students[0].getHighestGrade(subjects[0])).toMatchInlineSnapshot(`5`);
    expect(students[1].getHighestGrade(subjects[0])).toMatchInlineSnapshot(`3`);
    expect(students[2].getHighestGrade(subjects[0])).toMatchInlineSnapshot(`2`);
  });

  it('getLowestGrade functions', () => {
    expect(students[0].getLowestGrade()).toMatchInlineSnapshot(`2`);
    expect(students[1].getLowestGrade()).toMatchInlineSnapshot(`1`);
    expect(students[2].getLowestGrade()).toMatchInlineSnapshot(`1`);
    expect(students[0].getLowestGrade(subjects[0])).toMatchInlineSnapshot(`2`);
    expect(students[1].getLowestGrade(subjects[0])).toMatchInlineSnapshot(`2`);
    expect(students[2].getLowestGrade(subjects[0])).toMatchInlineSnapshot(`1`);
  });

  it('get Grade Count functions', () => {
    expect(students[0].getGradeCount()).toMatchInlineSnapshot(`18`);
    expect(students[1].getGradeCount()).toMatchInlineSnapshot(`12`);
    expect(students[2].getGradeCount()).toMatchInlineSnapshot(`18`);
    expect(students[0].getGradeCount(subjects[0])).toMatchInlineSnapshot(`6`);
    expect(students[1].getGradeCount(subjects[0])).toMatchInlineSnapshot(`6`);
    expect(students[2].getGradeCount(subjects[0])).toMatchInlineSnapshot(`6`);
    expect(students[0].getGradeCount(subjects[1])).toMatchInlineSnapshot(`6`);
    expect(students[1].getGradeCount(subjects[1])).toMatchInlineSnapshot(`6`);
    expect(students[2].getGradeCount(subjects[1])).toMatchInlineSnapshot(`6`);
    expect(students[0].getGradeCount(subjects[2])).toMatchInlineSnapshot(`6`);
    expect(students[1].getGradeCount(subjects[2])).toMatchInlineSnapshot(`-1`);
    expect(students[2].getGradeCount(subjects[2])).toMatchInlineSnapshot(`6`);
  });
});

describe('teacher test', () => {
  it('Get Mean grade', () => {
    expect(teachers[0].getMeanGrade()).toMatchInlineSnapshot(
      `2.5555555555555554`,
    );
    expect(teachers[1].getMeanGrade()).toMatchInlineSnapshot(
      `2.9444444444444446`,
    );
    expect(teachers[2].getMeanGrade()).toMatchInlineSnapshot(
      `3.5555555555555554`,
    );
    expect(teachers[0].getMeanGrade(subjects[0])).toMatchInlineSnapshot(
      `2.5555555555555554`,
    );
    expect(teachers[1].getMeanGrade(subjects[1])).toMatchInlineSnapshot(
      `2.9444444444444446`,
    );
    expect(teachers[2].getMeanGrade(subjects[2])).toMatchInlineSnapshot(
      `3.5555555555555554`,
    );
    // these teachers are not using this subjects
    expect(teachers[0].getMeanGrade(subjects[1])).toMatchInlineSnapshot(`-1`);
    expect(teachers[0].getMeanGrade(subjects[2])).toMatchInlineSnapshot(`-1`);
  });

  it('Can put marks to student', () => {
    expect(students[0].getGradeCount(subjects[0])).toMatchInlineSnapshot(`6`);
    // adding new mark
    teachers[0].putMarkToStudent(subjects[0], students[0], 4);
    expect(students[0].getGradeCount(subjects[0])).toMatchInlineSnapshot(`7`);
    // wrong teacher put a mark
    teachers[1].putMarkToStudent(subjects[0], students[0], 4);
    expect(students[0].getGradeCount(subjects[0])).toMatchInlineSnapshot(`7`);
  });
});

describe('general school test', () => {
  it('Best and worst', () => {
    console.log(school.printStudent());
    console.log(school.printTeacher());

    expect(school.getBestStudent().name).toMatchInlineSnapshot(`"Good"`);
    expect(school.getMeanestTeacher().name).toMatchInlineSnapshot(`"Language"`);
    expect(school.allSubjectsHasTeachers()).toMatchInlineSnapshot(`true`);
    // adding new subject without a teacher
    school.addSubject(new Subject('Codding'));
    expect(school.allSubjectsHasTeachers()).toMatchInlineSnapshot(`false`);
  });
});
