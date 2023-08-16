import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend, onDeleteFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ₹{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ₹{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      <span>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
        <Button onClick={() => onDeleteFriend(friend.id)}>Delete</Button>
      </span>
    </li>
  );
}
