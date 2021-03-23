import "./App.css";
import React, { useState, useEffect } from "react";
import TeamList from "./TeamList";
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formInputMember, setFormInputMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  return (
    <div>
      <TeamList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
