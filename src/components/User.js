import React from "react";
import UserContext from "../utils/UserContext";
// const User = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Keerthi Appasani</h2>
//     </div>
//   );
// };

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="user-card">
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>

        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default User;
