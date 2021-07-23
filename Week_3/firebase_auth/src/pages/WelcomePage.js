import React from "react";
import { Auth } from "../Auth/Auth";

export class WelcomePage extends React.Component {

    constructor(props) {
        super(props)
        this.auth = new Auth()
    }

    render() {
        return (
        <div id="welcome-page-container">
            <div>You signed in</div>
            <button
                onClick={this.onSignoutClick}
            >
                Sign Out
            </button>
        </div>
        )
    }

    onSignoutClick = () => {
        this.auth.signOut()
        this.props.onAuthStateChanged()
    }
}