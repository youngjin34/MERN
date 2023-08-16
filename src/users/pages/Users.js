import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "iden",
      image: 'https://img.freepik.com/free-photo/cute-puppy-of-maltipoo-dog-posing-calmly-lying-isolated-over-white-studio-background-domestic-animal_155003-45979.jpg?q=10&h=200',
      places: 3
    }
  ];
  return <div>
    <UserList items={USERS} />
  </div>
};

export default Users;