import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import { InputReadOnly } from "../components/PageComponents";
import MainCard from "../components/MainCard";
import API from "../utils/API";
import "../components/Form/form.css";

//import EditProfile from "./EditProfile";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    API.fetchUser()
      .then(profile => {
        setProfile(profile);
        return profile;
      })
      .catch(err => console.log(err));
  }, []);

  const RenderProfile = props => (
    <Wrapper>
      <Title>Profile</Title>
      <MainCard
        form={
          <form>
            <InputReadOnly label="User Name" value={props.profile.username} />
            <InputReadOnly
              label="First Name"
              value={props.profile.first_name}
            />
            <InputReadOnly label="Last Name" value={props.profile.last_name} />
            <InputReadOnly label="Email" value={props.profile.email} />
            <InputReadOnly label="Zip Code" value={props.profile.zip_code} />
            <a href="/editprofile" className="btn btn-primary">
              Edit Profile
            </a>
          </form>
        }
      />
    </Wrapper>
  );

  return (
    <div className="FlexRow">
      {profile ? <RenderProfile profile={profile} /> : null}
    </div>
  );
};
export default Profile;

// import React, { useState, useEffect } from "react";
// import "../components/Form/form.css";
// import Wrapper from "../components/Wrapper";
// import axios from "axios";

// const Profile = () => {
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     // const username = "test";
//     axios
//       // .get("/api/get/otheruserprofilefromdb", {
//       .get("/api/get/userprofile", {
//         // params: { username: username }
//       })
//       .then(res => {
//         console.log(res);
//         setProfile({ ...res.data });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });

//     window.scrollTo({ top: 0, left: 0 });
//   }, []);

//   const RenderProfile = props => (
//     <Wrapper>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-9 mx-auto">
//             <div className="card card-signin flex-row my-5">
//               <div className="card-img d-none d-md-flex">
//                 <div className="card-img-profile d-none d-md-flex"></div>
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title text-center">Profile</h5>
//                 {/* <div className="col-md-4 col-lg-4" align="center"><img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeAsIELBimVGoQSn3Ht_eU6V164uIBSUzQWe9zjc9G3FuyWQCQhg&s"
//                 className="img-circle" alt="team"
//                 // style="padding-top: 5px; padding-right:35px;  width:280px;height:280px;"
//                 />
//               </div> */}
//                 <table className="table">
//                   <tbody>
//                     <tr>
//                       <td className="entry">Username:</td>
//                       <td>{props.profile.username}</td>
//                     </tr>
//                     <tr>
//                       <td className="entry">First Name:</td>
//                       <td>{props.profile.first_name}</td>
//                     </tr>
//                     <tr>
//                       <td className="entry">Last Name:</td>
//                       <td>{props.profile.last_name}</td>
//                     </tr>
//                     <tr>
//                       <td className="entry">Email:</td>
//                       <td>{props.profile.email}</td>
//                     </tr>
//                     <tr>
//                       <td className="entry">ZipCode:</td>
//                       <td>{props.profile.zip_code}</td>
//                     </tr>
//                   </tbody>
//                   <button
//                     className="btn btn-lg btn-primary btn-block text-uppercase"
//                     type="submit"
//                   >
//                     Edit
//                   </button>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );

//   return (
//     <div className="FlexRow">
//       {profile ? <RenderProfile profile={profile} /> : null}
//     </div>
//   );
// };
// export default Profile;
