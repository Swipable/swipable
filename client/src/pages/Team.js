import React,{ Component } from "react";
// import "../components/Form/form.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Wrapper from "../components/Wrapper/wrapper";

import UserCard from "../components/UserCard/usercard";
import Title from "../components/Title/title";
import friends from "../friends.json";

class Team extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Title>Team</Title>
      <div className="team-container">
        {this.state.friends.map(friend => (
          <UserCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default Team;
