interface UserListProps {
    users: {
        id: number;
        name: string;
        age: number;
    }[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                </div>
            ))}
        </div>
    );
};

export default UserList;