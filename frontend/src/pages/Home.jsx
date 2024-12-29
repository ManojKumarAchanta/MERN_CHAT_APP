import React, { useState } from 'react';
import { useAuth } from '../store/authStore';
import { User } from 'lucide-react';

const Home = () => {
  const [selectedUser,setSelectedUser]=useState(null);
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
    { id: 7, name: "User 7" },
    { id: 9, name: "User 8" },
    { id: 10, name: "User 8" },
  ];

  return (
    <div style={{ height: 'calc(100vh - 4rem)' }} className=' w-full overflow-hidden  parent md:grid md:grid-cols-[35%,65%]'>
      <div className='user-container py-6 flex flex-col gap-4 overflow-y-auto  px-8 m' style={{ height: 'calc(100vh - 2rem)' }}>
        {
          users.map((user) => (
            <div key={user.id} onClick={()=>setSelectedUser(user)} className='gap-4 flex cursor-pointer bg-violet-200 px-6 py-4'>
              <User className='rounded-lg bg-slate-300'/>
              <h1>{user.name}</h1>
            </div>
          ))
        }
      </div>
      {selectedUser?(<div className='w-full h-full'>
          <div className='headline px-12 py-4'>
            <h1>{selectedUser.name}</h1>
          </div>
      </div>):(
        <div>
          Chat now
        </div>
      )}
    </div>
  );
}

export default Home;