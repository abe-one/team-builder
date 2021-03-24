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
  const [memberToEdit, setMemberToEdit] = useState(null);

  // Functions
  function updateTeamForm(inputName, inputValue) {
    setTeamFormValues({ ...teamFormValues, [inputName]: inputValue.trim() });
  }

  function submitMember(isEdit) {
    if (!teamFormValues.name || !teamFormValues.email || !teamFormValues.role) {
      return;
    }
    // if parameter then map else newTeam
    let newTeam = teamMembers;
    if (isEdit) {
      newTeam = newTeam.map((member) => {
        if (member.email === memberToEdit.email) {
          return (member = teamFormValues);
        }
        return member;
      });
      setMemberToEdit(null);
    } else {
      newTeam.push(teamFormValues);
    }
    setTeamMembers(newTeam);
    setTeamFormValues(initialValues);
    document.getElementById("form-name").focus();
  }

  function editMember(memberObj) {
    setMemberToEdit(memberObj);
    setTeamFormValues(memberObj);
  }

  // useEffect(() => setTeamFormValues, [memberToEdit]);

  return (
    <div>
      <h1>Team BUILDER</h1>
      <section>
        <h2>Team List</h2>
        <TeamList team={teamMembers} edit={editMember} />
      </section>

      <Form
        values={teamFormValues}
        update={updateTeamForm}
        submit={submitMember}
        memberToEdit={memberToEdit}
        setTeamFormValues={setTeamFormValues}
      />
    </div>
  );
}

export default App;
