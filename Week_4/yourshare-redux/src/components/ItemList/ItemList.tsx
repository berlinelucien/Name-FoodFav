import React from 'react';
import "./ItemList.css";
import { IYourShareState, IPerson, IItem } from '../../redux/types';
import { connect } from 'react-redux';

// ItemList component
// Render the list of items that can be borrowed (for use on the welcome screen)

interface IItemListProps {
    listOfPeople: Array<IPerson>
}

class ItemList extends React.Component<IItemListProps> {
    render() {
        return (
            <div className="ItemList" >
                <table>
                    <thead>
                        <th>Items for borrowing</th>
                        <th>Lender</th>
                    </thead>
                    <tbody>
                        {this.props.listOfPeople.map((person: IPerson) => {
                            return person.items.map((item: IItem) => (
                                <tr key={person.id} > <td>{item.name}</td><td>{person.name}</td></tr>)
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div >
        )
    };
}

// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. 
// It return an object containing the store data you
// want to transmit as props to a component
function mapStateToProps(state: IYourShareState) {
    return {
        listOfPeople: state.people
    }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        // Because this component doesn't change the state of the app at all
        // we're going to leave this empty
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);


export default connectedComponent;
