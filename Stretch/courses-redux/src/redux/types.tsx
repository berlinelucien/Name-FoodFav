export class Student {
  sid: number;
  username: string;
  password: string;

  fname: string;
  lname: string;
  status: string;
  address: string;
  courses: Array<number>;

  constructor(id: number, u: string, p: string, f: string, l: string, s: string, a: string) {
    this.sid = id;
    this.username = u;
    this.password = p;

    this.fname = f;
    this.lname = l;
    this.status = s;
    this.address = a;
    this.courses = Array<number>();
  }

  addCourse(id: number) {
    this.courses.push(id);
  }
}

export class Course {
  cid: number;

  title: string;
  credits: number; 
  major: string;
  description: string;

  constructor(id: number, t: string, c: number, m: string, d: string) {
    this.cid = id;
    this.title = t;
    this.credits = c;
    this.major = m;
    this.description = d;
  }
}

export interface Edu4YouState {
  // studentCounter permits to generate a new id when we create a new student (like auto-increment)
  // courseCounter permits to generate a new id when we create a new course (like auto-increment)
  // All the courses and all students of the app
  studentCounter: number,
  courseCounter: number,
  currentUser: Student,
  students: Array<Student>,
  courses: Array<Course>
}

export default Edu4YouState;