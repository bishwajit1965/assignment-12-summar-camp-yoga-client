import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsersDashBoard = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User has been made admin !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDelete = (event) => {
    event.preventDefault();
  };
  return (
    <div className="my-10 w-full ml-2">
      <h2 className="font-bold text-1xl"> Total Users: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-sm">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user._id)}>
                      <FaUser />
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={handleDelete}>
                    <FaTrashAlt className="text-red-500 w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersDashBoard;
