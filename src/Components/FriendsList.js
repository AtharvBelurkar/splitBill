import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend, onDeleteFriend }) {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
    </div>
  );
}
