import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onSetFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    // const id = crypto.randomUUID;
    const id = Date.now();
    e.preventDefault();

    if (!name || !image) return;
    const newFriend = { name, image: `${image}?=${id}`, balance: 0, id };
    onSetFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend Name :</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌅Image URL : </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
