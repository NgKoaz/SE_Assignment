import React from "react";
import avatar from "./assets/avatar.jpg";

const Avatar = () => {
  return (
    // <div>Avatar</div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85px",
        width: "85px",
      }}
    >
      <img
        src={avatar}
        style={{
          display: "flex",
        }}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
