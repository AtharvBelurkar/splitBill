import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmitSplitForm(e) {
    e.preventDefault();
    const newBalance = whoIsPaying === "user" ? paidByFriend : -paidByUser;
    handleSplitBill(newBalance);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmitSplitForm}>
      <h2> Split a Bill with {selectedFriend && selectedFriend.name}</h2>
      <label>💰Bill Value : </label>
      <input
        value={bill}
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💰Your expense : </label>
      <input
        value={paidByUser}
        type="text"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>💰Expense of {selectedFriend.name} : </label>
      <input disabled type="text" value={paidByFriend} />

      <label>🤑Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
