import "../style/UserProfile.css";

import { useState } from "react";

export default function UserProfile() {
  return (
    <div className="userProfileComponent">
      <h1>User Profile Page</h1>
      <div>
        <ul>
          There might be a list of all the classes that a user has taken here?
          <button>
            Add Class -- this would need to activate a popup that user <br />{" "}
            inputs the department + number of class
          </button>
          <li>
            <p>mapped out from some response recieved from a backend</p>
            <button>delete button</button>
          </li>
          <li>
            <p>mapped out from some response recieved from a backend</p>
            <button>delete button</button>
          </li>
          etc...
        </ul>
      </div>
    </div>
  );
}
