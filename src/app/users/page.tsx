"use client"

import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const Users = () => {

  const [error, setError] = useState(null); 
  const [open, setOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [usersList, setUsersList] = useState([]); 
  const [row, setRow]:any = useState(null); 

  const fetchUsers = async () => {
    try {
      const resp = await axios.get('https://jsonplaceholder.org/users');
      console.log(resp);
  
      if(resp?.status === 200) {
        setIsLoading(false);
        setUsersList(resp?.data);
        setError(null);
      } else {
        setIsLoading(true);  
      }
    } catch(err:any) {
      console.log(err);
      setError(err?.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
    {
      isLoading ? (
        <div>
          <p>Loading...</p>
          {
            error && <p style={{color: 'red'}}>ERROR : {error}</p>
          }
        </div>
      )
      : (
        <table border={1} style={{width: '100%'}} cellPadding={0} cellSpacing={0}>
         <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
         </thead>
         <tbody>
          {
            usersList && usersList.length > 0 &&
            usersList.map((user:any) => (
              <tr key={user?.id}>
                <td>{user?.id}</td>
                <td>{user?.firstname} {user?.lastname}</td>
                <td>{user?.login?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.address?.street}</td>
                <td>{user?.phone}</td>
                <td>{user?.website}</td>
                <td>{user?.company?.name}</td>
                <td>
                <p style={{
                  textAlign: 'center',
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  margin: '0px',
                }} onClick={() => {
                  setRow(user);
                  setOpen(true);
                }}>View</p>
                </td>
              </tr>
            ))
          }
         </tbody>
        </table>
      )
    }

    
    <div className='panel' style={{
      right: open ? '0px' : '-300px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: '20px',
        padding: '10px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      }}>
        <p style={{
          textAlign: 'center',
          color: '#000000',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          margin: '0px',
        }}>User Details</p>
        <p 
          onClick={() => setOpen(false)}
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            margin: '0px',
          }}
        >Close</p>
      </div>
      <div style={{padding: '10px'}}>
        <p>Name: {row?.firstname} {row?.lastname}</p>
        <p>Username: {row?.login?.username}</p>
        <p>Email: {row?.email}</p>
        <p>Address: {row?.address?.street}</p>
        <p>Phone: {row?.phone}</p>
        <p>Website: {row?.website}</p>
        <p>Company: {row?.company?.name}</p>
      </div>
    </div>

    </div>
  )
}

export default Users