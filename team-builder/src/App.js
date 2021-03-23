import "./App.css";
import React, { useState } from "react";
import TeamList from "./TeamList";
import Form from "./Form";

function App() {
  const initialValues = {
    name: "",
    email: "",
    role: "",
  };
  // States
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamFormValues, setTeamFormValues] = useState(initialValues);

  // Functions
  function updateTeamForm(inputName, inputValue) {
    setTeamFormValues({ ...teamFormValues, [inputName]: inputValue.trim() });
  }

  function submitMember() {
    if (!teamFormValues.name) {
      return;
    }
    debugger;
    let newTeam = teamMembers;
    newTeam.push(teamFormValues);
    setTeamMembers(newTeam);
    setTeamFormValues(initialValues);
  }

  return (
    <div>
      <h1>Team BUILDER</h1>
      <section>
        <h2>Team List</h2>
        <TeamList team={teamMembers} />
      </section>

      <Form
        values={teamFormValues}
        update={updateTeamForm}
        submit={submitMember}
      />
    </div>
  );
}

export default App;
