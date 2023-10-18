import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Null",
                location: "null"
            }
        }
        console.log("constructor of " + this.props.name + "is called")
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/supritansu");
        const json = await data.json();
        console.log("Child CDM " + this.props.name + "is called" + json.count)
        this.setState({
            userInfo: json,
        })
        console.log(json);
        this.timer = setInterval(() => { console.log("Nasmaste react op") }, 1000)
    }
    componentDidUpdate() {
        console.log("This is component did update");

    }
    componentWillUnmount() {
        clearInterval(this.timer);

        console.log("This is component will unmount");
    }
    render() {
        const { name } = this.props;


        return (

            <div className="user-card">



                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name: {this.state.userInfo.login}</h2>
                <h3>followers: {this.state.userInfo.followers}</h3>

                {console.log("render of " + this.props.name + "has been called")}
            </div>)
    }
}
export default UserClass;