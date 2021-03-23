import "./App.css";
import React, { useState, useEffect } from "react";
import TeamList from "./TeamList";
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamFormValues, setTeamFormValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  return (
    <div>
      <TeamList team={teamMembers} />
      <Form values={teamFormValues} />
    </div>
  );
}

export default App;
