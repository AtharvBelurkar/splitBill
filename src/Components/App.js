import { useState } from "react";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Ethan",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 300,
  },
  {
    id: 933372,
    name: "Sham",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "John",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: -450,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedfriend] = useState(null);

  function handleSelectionFriend(friend) {
    setSelectedfriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleShowFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowFriend(false);
  }

  function handleSplitBill(newBalance) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + newBalance }
          : friend
      )
    );
    setSelectedfriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelectionFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onSetFriend={handleAddFriend} />}
        <Button onClick={handleShowFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
