import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Cnstructor");

    }
    componentDidMount() {
        console.log("Parent CDM")
    }
    render() {
        return (
            <div>
                {console.log("parent render")}
                <h1>This is the ABOUT Class ComponentE</h1>
                About Page

                <UserClass name=" First" />
                <UserClass name=" Second" />
            </div>
        )
    }
}


export default About