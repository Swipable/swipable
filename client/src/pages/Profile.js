import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import { InputReadOnly, FormBtn } from "../components/PageComponents";
import FormCard from "../components/FormCard";
import API from "../utils/API";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { isLoggedIn, user } = useContext(UserContext);
  console.log({ isLoggedIn });
  const [profile, setProfile] = useState({});

  useEffect(() => {
    API.fetchUser(user)
      .then(profile => {
        setProfile(profile);
        return profile;
      })
      .catch(err => console.log(err));
  }, [user]);

  const RenderProfile = props => (
    <Wrapper>
      <Title>Profile</Title>
      <FormCard
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
            <FormBtn>
              <Link
                to="/editprofile"
                style={{ textDecoration: "none", color: "white" }}
              >
                Edit Profile
              </Link>
            </FormBtn>
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
