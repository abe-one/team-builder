import React from "react";

export default function TeamList({ teamMembers, test }) {
  console.log(teamMembers, "teamMembers");

  if (teamMembers.length === 0) {
    return (
      <>
        <h3>Looks like your team has hardly begun..</h3>
        <h2>Start adding people to your team!</h2>
      </>
    );
  } else {
    teamMembers.map((member) => {
      return <h2 key={member.email}>Name: {member.name}</h2>;
    });
  }
}
