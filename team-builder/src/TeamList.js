import React from "react";

export default function TeamList({ team }) {
  if (team.length === 0) {
    return (
      <>
        <h3>Looks like your team has hardly begun..</h3>
        <h2>Start adding people to your team!</h2>
      </>
    );
  } else {
    console.log(team);
    return team.map((member) => {
      return <h2 key={member.email}>Name: {member.name}</h2>;
    });
  }
}
