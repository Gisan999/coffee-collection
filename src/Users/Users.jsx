import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id => {
    fetch(`https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/user/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log('deleted successfully');
          const remainingUsers = users.filter(user => user._id !== id);
          setUsers(remainingUsers);
        }
      })


  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2>Users : {loadedUsers.length}</h2>
      <div>

        <div>
          <div className="overflow-x-auto w-full">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>createdAt</th>
                  <th>Last Logged In</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users?.map(user => <tr key={user._id}>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)} className="btn">X</button>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Users;