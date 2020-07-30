import { Edu4YouActions, actionIdentifier, SignInAction, EnrollCourseAction } from './actions'
import { Edu4YouState, Student, Course } from './types';

// Initial state of the app
let SampleData_LoadedProgrammatically = (): Edu4YouState => {

    //id: number, u: string, p: string, f: string, l: string, s: string, a: string

    const student1 = new Student(1, "student1", "password", "Yolanda", "Torres", "Sophomore", "222 Broadway, New York, NY 10038");
    student1.addCourse(1);

    const student2 = new Student(2, "student2", "password", "Ibrahima", "Ndiaye", "Junior", "222 Broadway, New York, NY 10038");
    student2.addCourse(1);
    student2.addCourse(4);

    const student3 = new Student(3, "student3", "password", "Elle", "Smith", "Junior", "222 Broadway, New York, NY 10038");
    student3.addCourse(2);
    student3.addCourse(3);
    student3.addCourse(4);

    const student4 = new Student(4, "student4", "password", "Jane", "King", "Freshman", "222 Broadway, New York, NY 10038");
    student4.addCourse(2);
    student4.addCourse(3);
    student4.addCourse(4);

    //d: number, t: string, c: number, m: string, d: string

    const course1 = new Course(1, "Algo", 4, "CS", "Learn algos...");
    const course2 = new Course(2, "React", 4, "CS", "Learn React...");
    const course3 = new Course(3, "Kotlin", 4, "CS", "Learn Kotlin...");
    const course4 = new Course(4, "Intro to Accounting", 3, "ACT", "Learn basic accounting...");
    const course5 = new Course(5, "History 101", 2, "HIS", "American History...");

    return {
        studentCounter: 5,
        courseCounter: 6,
        currentUser: student1,
        students: [
            student1,
            student2,
            student3,
            student4
        ],
        courses: [
            course1,
            course2,
            course3,
            course4,
            course5
        ]
    }
}

// Initial state of the app:
const initialState: Edu4YouState = SampleData_LoadedProgrammatically()

function edu4YouReducer(state: Edu4YouState | undefined, action: Edu4YouActions): Edu4YouState {
    if (state === undefined) {
        return initialState;
    }

    console.log("Action type: " + action.type);

    switch (action.type) {
        case actionIdentifier.SignIn: {
            console.log("Reducer SignIn");

            let signInAction = action as SignInAction;

            console.log("Reducer state");
            console.log(state);

            let newState: Edu4YouState = { ...state }; // this will copy the current state

            // Updating the state - setting the current student
            let currentStudent = newState.students.filter((elt: Student) => elt.username === signInAction.username)[0];
            newState.currentUser = currentStudent;

            console.log("State - deep clone - false - shallow clone - true");
            console.log(state === newState);

            return newState;
        }

        case actionIdentifier.EnrollCourse: {
            console.log("Reducer Enroll Course");

            let enrollCourseAction = action as EnrollCourseAction;

            console.log("Reducer state - before update");
            console.log(state);

            let newState: Edu4YouState = { ...state };

            // Updating the state - current student enrolled in a new course
            if (newState.currentUser.courses.indexOf(enrollCourseAction.courseId) > -1) {
                // student already took the course so no change
                alert("You already took this course!");
            } else {
                //newState.currentUser.addCourse(enrollCourseAction.courseId);

                // new try
                console.log("Deep - false, shallow - true");
                console.log(state.currentUser.courses === newState.currentUser.courses);
                
                let newCurrentCourses = [...state.currentUser.courses];
                console.log("Deep - false, shallow - true");
                console.log(newCurrentCourses === state.currentUser.courses);
                
                newCurrentCourses.push(enrollCourseAction.courseId);
                let newUser = {...state.currentUser, courses: newCurrentCourses, addCourse: state.currentUser.addCourse};
                newState.currentUser = newUser;
                newState.currentUser.courses = newCurrentCourses;
                console.log("Deep - false, shallow - true");
                console.log(state.currentUser === newState.currentUser );
                console.log("Deep - false, shallow - true");
                console.log(state.currentUser.courses === newState.currentUser.courses);
            }

            console.log("Deep - false, shallow - true");
            console.log(state === newState);

            console.log("Reducer state - new state");
            console.log(newState);

            return newState;
        }

        default:
            return state;
    }
}

export default edu4YouReducer;
