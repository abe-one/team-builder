import React from "react";

export default function TeamList({ team, edit }) {
  if (team.length === 0) {
    return (
      <>
        <h3>Looks like your team has hardly begun..</h3>
        <h2>Start adding people to your team!</h2>
      </>
    );
  } else {
    return team.map((member) => {
      return (
        <div className="team-member">
          <h4 key={member.email}>
            Name: {member.name} Role: {member.role}
          </h4>
          <button onClick={() => edit(member)}>Edit</button>
        </div>
      );
    });
  }
}
