import React from "react";
import "./App.css";

import { MyFirebase } from "./myFirebase";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.updateNameRef = React.createRef();

        this.state = {
            imgUrl: "#",
            fileToUpload: null,
            allImages: [],
            user1: {
                username: "NO NAME YET",
                email: "No email yet",
                profile_picture: "No profile picture yet",
            },
            allUsers: [],
        };
    }

    receiveNextImage = (anImgUrl, fullFirebasePath) => {
        console.log("receiveNextImage for " + anImgUrl);
        this.setState((state) => {
            const newAllImages = [...state.allImages];
            newAllImages.push(anImgUrl);
            return {
                allImages: newAllImages,
            };
        });
    };

    componentDidMount() {
        // Create a reference to the file (to the image) that we want to embed in our page
        let db = new MyFirebase();
        const functionToRunWhenUrlIsGotten = (url) => {
            this.setState({ imgUrl: url });
        };
        db.getImage("gray-tabby-cat.jpg", functionToRunWhenUrlIsGotten);
        db.getAllImages(this.receiveNextImage);
    }

    onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        console.log(file);
        this.setState({ fileToUpload: file }); /// to upload later
    };

    displayUser1NameOnPage = (newUser1) => {
        if (newUser1 === null) {
            alert("Error - didn't receive an object!");
            return;
        }
        this.setState((state, props) => {
            return {
                ...state,
                user1: newUser1,
            };
        });
    };

    displayUserListOnPage = (users) => {
        if (users.length === 0) {
            alert("Error - didn't receive the list of users!");
            return;
        }

        console.log(users);
        for (var iUser in users) {
            const user = users[iUser];
            console.log("User: " + user);
            for (var iAttr in user) {
                const attr = user[iAttr];
                console.log("\t " + iAttr + ": " + attr);
            }
        }

        this.setState((state) => {
            return {
                ...state,
                allUsers: users,
            };
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log(
            "Name: " +
                this.nameRef.current.value +
                " Email: " +
                this.emailRef.current.value
        );

        let db = new MyFirebase();
        db.createANOTHERUser(
            this.nameRef.current.value,
            this.emailRef.current.value,
            ""
        );
    };

    updateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(
            "Name: " +
                this.nameRef.current.value +
                " Email: " +
                this.emailRef.current.value
        );

        let db = new MyFirebase();
        db.updateObject(
            "/users/1",
            { username: this.updateNameRef.current.value },
            this.displayUserUpdate
        );
    };

    displayUserUpdate = (err) => {
        if (err === null) {
            alert("Updated the user's name!");
            this.setState((prevState, props) => {
                let newState = { ...prevState };
                newState.user1.username = this.updateNameRef.current.value;
                return newState;
            });
        }
    };

    displayRemoveUserResult = (err) => {
        //
        if (err === null) {
            alert("Something went wrong when trying to remove the user!" + err);
            return;
        }

        alert("Successfully removed the user!");

        this.setState((prevState, props) => {
            let newState = { ...prevState };
            newState.user1 = {
                username: "NO NAME",
                email: "NO EMAIL",
                profile_picture: "NO PICTURE",
            };
            return newState;
        });
    };

    render() {
        let db = new MyFirebase();
        //let htmlString = "<h1>Hi there!</h1>"

        return (
            <div className="App">
                <header className="App-header">
                    <h1>{process.env.REACT_APP_TITLE}</h1>
                    Examples:
                    <ol>
                        <li>
                            <button
                                onClick={() =>
                                    db.createUser1(
                                        "Alice",
                                        "Alice@A.com",
                                        "https://...."
                                    )
                                }
                            >
                                Create User #1
                            </button>
                        </li>
                        <li>
                            <form onSubmit={this.submitHandler}>
                                User's name:{" "}
                                <input type="text" ref={this.nameRef} />
                                <br />
                                User's email:{" "}
                                <input type="text" ref={this.emailRef} />
                                <br />
                                <input
                                    type="submit"
                                    value="Click to add another user, with this info!"
                                />
                            </form>
                        </li>
                        <li>
                            <p>User #1's name: {this.state.user1.username}</p>
                            <button
                                onClick={() =>
                                    db.getAnObject(
                                        "/users/1",
                                        this.displayUser1NameOnPage
                                    )
                                }
                            >
                                Get User #1's name
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    db.getListOfObjects(
                                        "/users",
                                        this.displayUserListOnPage
                                    )
                                }
                            >
                                Get all Users
                            </button>
                        </li>
                        {Object.values(this.state.allUsers).map((nextUser) => (
                            <li key={nextUser.username}>
                                <b>{nextUser.username}</b>
                                <ul>
                                    <li>{nextUser.email}</li>
                                    <li>
                                        {nextUser.profile_picture
                                            ? nextUser.profile_picture
                                            : "No picture available"}
                                    </li>
                                </ul>
                            </li>
                        ))}
                        <li>
                            <form onSubmit={this.updateSubmitHandler}>
                                Change the name of user #1{" "}
                                <input type="text" ref={this.updateNameRef} />
                                <br />
                                <input
                                    type="submit"
                                    value="Update user #1 to user this name!"
                                />
                            </form>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    db.deleteObject(
                                        "users/1",
                                        this.displayRemoveUserResult
                                    )
                                }
                            >
                                Remove user #1
                            </button>
                        </li>
                    </ol>
                </header>
                <div>
                    <h2>Cute cat picture:</h2>
                    <img
                        src={this.state.imgUrl}
                        alt="Adorable, napping gray cat"
                        width="200"
                    />
                </div>
                <div>
                    <h2>Upload a new picture here:</h2>
                    <input
                        type="file"
                        id="input"
                        onChange={this.onChangeFile}
                    ></input>
                    <button
                        onClick={() => {
                            if (this.state.fileToUpload) {
                                // reset array to be empty...
                                this.setState({
                                    allImages: [],
                                });
                                // ...so that after we upload the file...
                                db.storeFile(this.state.fileToUpload, () => {
                                    // ...we can reload list of all images
                                    db.getAllImages(this.receiveNextImage);
                                });

                                // Or, we could just add the new file to the end of the list:
                                // db.storeFile((urlOfNewlyUploadedImage) => {
                                //     // ...we can add the image to the array:
                                //     this.receiveNextImage(
                                //         urlOfNewlyUploadedImage
                                //     );
                                // });
                            } else console.log("No file selected!");
                        }}
                    >
                        Click here to upload file!
                    </button>
                    <h3>All the images that have been uploaded:</h3>
                    <ol>
                        {this.state.allImages.map((nextImgUrl) => (
                            <li>
                                <img
                                    src={nextImgUrl}
                                    alt="nextImgUrl"
                                    width="200"
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default App;
