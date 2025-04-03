import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

export default FriendList;
