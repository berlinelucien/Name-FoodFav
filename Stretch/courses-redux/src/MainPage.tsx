import React from "react";
import { pages } from "./App";

import { Edu4YouState, Student, Course } from './redux/types';
import { connect } from 'react-redux';
import { createEnrollCourseAction } from "./redux/actions";


interface IMainPageProps {
  changePage: (page: pages) => void;
  currentUserProps: Student;                          // from redux
  saveEnrollCourseInfosProps: (cid: number) => void;  // from redux
  coursesProps: Array<Course>; // needed to display the name of courses instead of only the id
}

class MainPage extends React.Component<IMainPageProps> {

  // id of the course - if the user wants to enroll in a new course
  private cid: number;

  constructor(props: IMainPageProps) {
    super(props);
    this.cid = -1;
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "cid") {
      this.cid = parseInt(event.target.value);
    } else {
      alert("SignInPage | Unknown event");
    }
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("You are enrolled!")
    this.props.saveEnrollCourseInfosProps(this.cid);
  }

  render() {
    return (
      <div>
        <h1 className="mytitle">Welcome, {this.props.currentUserProps.fname}</h1>

        <h2 className="mytitle">Your personal info</h2>

        <p>{this.props.currentUserProps.fname} | {this.props.currentUserProps.lname} |
        {this.props.currentUserProps.status}</p>

        <p>{this.props.currentUserProps.address}</p>

        <h2 className="mytitle">Your courses</h2>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              //console.log("CURRENTUSER")
            }
            {
              //console.log(this.props.currentUserProps)
            }
            {
              this.props.coursesProps.filter(c => this.props.currentUserProps.courses.indexOf(c.cid) > -1).map((course, key) => <tr key={key}><td>{course.cid}</td><td>{course.title}</td></tr>)
            }
          </tbody>
        </table>

        <h2 className="mytitle">What course do you want to enroll in? </h2>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Course id:
              <input type="text" name="cid" placeholder="1 to 5" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <input type="submit" value="Enroll" />
          </p>
        </form>
      </div>
    );
  }

}

// Map redux app state to component props
// This function subscribes to all store updates and gets called when
// anything in the store changes. It returns an object containing the store data you
// want to transmit as props to a component
// Current user
function mapStateToProps(appState: Edu4YouState) {
  console.log("MainPage | mapStateToProps");
  console.log("App state")
  console.log(appState);
  console.log("Current user");
  console.log(appState.currentUser);
  return {
    currentUserProps: appState.currentUser,
    coursesProps: appState.courses
  }
}

// Map redux actions to component props
// This function returns an object with a function that the component can call
function mapDispatchToProps(dispatch: any) {
  console.log("MainPage | dispatch saveEnrollCourseInfosProps");
  console.log("Dispatch");
  console.log(dispatch);

  return {
    saveEnrollCourseInfosProps: (cid: number) => dispatch(createEnrollCourseAction(cid))
  }
}

// The Hight Order Component (HOC)
// props need to be received by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export { connectedComponent as MainPage }
