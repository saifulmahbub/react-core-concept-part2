import { useEffect, useState } from "react";
import SingleFrnd from "./SingleFrnd";
import "./Friends.css";

function Friends() {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="box">
      <h3>Total friends: {friend.length}</h3>
      {friend.map((bondhu) => (
        <SingleFrnd bondhu={bondhu}></SingleFrnd>
      ))}
    </div>
  );
}
export default Friends;
