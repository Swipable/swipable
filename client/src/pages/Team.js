// import React,{ Component } from "react";
// // import "../components/Form/form.css";
// import Wrapper from "../components/Wrapper";

// import UserCard from "../components/UserCard";
// import Title from "../components/Title";
// import friends from "../friends.json";

// class Team extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     friends
//   };

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <Title>Team</Title>
//       <div className="team-container">
//         {this.state.friends.map(friend => (
//           <UserCard
//             removeFriend={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//         </div>
//       </Wrapper>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

const Team = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // const username = "test";
    axios
      .get("/api/get/otheruserprofilefromdb", {
        params: { username: "adumbledor" }
      })
      .then(res => {
        console.log(res);
        // setProfile({ ...res.data })
      })
      .catch(function(error) {
        console.log(error);
      });

    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const RenderProfile = props => (
    <div>
      <div className="FlexRow">
        <h1>{props.profile.username}</h1>
      </div>
    </div>
  );

  return (
    <div className="FlexRow">
      {profile ? <RenderProfile profile={profile} /> : null}
    </div>
  );
};

export default Team;
