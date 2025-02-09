import React from "react";
import "./profile.css";
import { personal_data } from "../../assets/Data";

const Profile = () => {
  return (
    <section className="profile-container">
      <div className="profile-img-container">
        <img src={personal_data.img} alt="" />
      </div>

      <div className="profile-content">
        <h3>{personal_data.name}</h3>
        <p>Age: {personal_data.age}</p>
        <p>Education: {personal_data.education}</p>
        <ul>
          {personal_data.stacks.map((data) => {
            return <li key={data}>{data}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
