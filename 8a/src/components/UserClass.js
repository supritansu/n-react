import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { name } = this.props;
        const { count } = this.state;
        return (
            <div className="user-card">
                <h1>Count :{count}</h1>
                <button className="cnt-button" onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                        //if need to update two we can batch it up and update and state variables which are not increased then it will only update the two without touching the others
                    })
                }}>
                    Count Increase
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: Hindmotor</h3>
                <h4>Contact: 7686872471</h4>
            </div>)
    }
}
export default UserClass;