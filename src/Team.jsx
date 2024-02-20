import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const teamStyle = {
    border: "3px solid purple",
    backgroundColor: "tomato",
    borderRadius: "10px",
    padding: "10px",
  };
  const handleAdd = () => {
    if (team < 11) {
      const newMember = team + 1;
      setTeam(newMember);
    }
  };
  const handleRemove = () => {
    if (team > 0) {
      const memberDelet = team - 1;
      setTeam(memberDelet);
    }
  };
  return (
    <div style={teamStyle}>
      <h3>Players:{team}</h3>
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={handleRemove}>Remove Player</button>
    </div>
  );
}
