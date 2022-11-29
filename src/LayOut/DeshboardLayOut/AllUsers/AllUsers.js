import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfrimationModal from '../../../Pages/Share/ConfrimationModal/ConfrimationModal';

const AllUsers = () => {
    const [deletingUser, setDeletionUser] = useState(null)

    const closeModle = () => {
        setDeletionUser(null);
    }


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;

        }
    })

    const haldlemakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Make admin success')
                    refetch()
                }
            })
    }

    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${user.name} deleted successfully`)
                    refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <h1 className='uppercase text-center font-bold text-3xl my-3'>All User</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr className="hover" key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={() => haldlemakeAdmin(user._id)} className='btn btn-xs bg-info border-none'>Make Admin</button>}</td>
                            <td>
                                <label onClick={() => setDeletionUser(user)} className='btn btn-xs bg-red-500 border-none' htmlFor="confirmationModal" >Delete</label>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
                deletingUser && <ConfrimationModal
                    title={'Are you sure you want to delete?'}
                    message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                    successAction={handleDeleteUser}
                    modleData={deletingUser}
                    successName={'Delete'}
                    closeModle={closeModle}
                >
                </ConfrimationModal>
            }
        </div>
    );
};

export default AllUsers;