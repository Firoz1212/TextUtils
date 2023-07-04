import React from "react";

export default function Footer(props) {
  return (
    <div className="footer">
      <p className="text-center">
        Copyright@2023 | All Rights Reserved | by {props.creatername}
      </p>
    </div>
  );
}
