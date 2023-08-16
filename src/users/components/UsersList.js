import UserItem from './UserItem';
import './UsersList.css';

const UserList = ({ items }) => {
  if (items.length === 0) {
    return <div className='center'>
      <h2>No Users Found.</h2>
    </div>
  }

  return <div>
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  </div>
};

export default UserList;