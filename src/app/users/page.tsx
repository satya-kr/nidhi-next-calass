"use client"

import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Drawer, IconButton, Stack, TablePagination } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Users = () => {

  const [error, setError] = useState(null); 
  const [open, setOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [usersList, setUsersList] = useState([]); 
  const [row, setRow]:any = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visibleRows, setVisibleRows] = useState([]);

  const fetchUsers = async () => {
    try {
      const resp = await axios.get('https://jsonplaceholder.org/users');
      console.log(resp);
  
      if(resp?.status === 200) {
        setIsLoading(false);
        setUsersList(resp?.data);
        setVisibleRows(resp?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
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


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setVisibleRows([...usersList].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
  }, [page, rowsPerPage]);

console.log(visibleRows);
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
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Website</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visibleRows?.map((user:any) => (
                  <TableRow
                    key={user?.username}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    {user?.firstname} {user?.lastname}
                    </TableCell>
                    <TableCell align="right">{user?.email}</TableCell>
                    <TableCell align="right">{user?.phone}</TableCell>
                    <TableCell align="right">{user?.website}</TableCell>
                    <TableCell align="right">{user?.address?.street}</TableCell>
                    <TableCell align="right">
                      <div className='flex display-flex'>
                        <IconButton aria-label="delete">
                          <RemoveRedEyeIcon fontSize='small' onClick={() => {
                            setRow(user);
                            setOpen(true)
                          }} />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={usersList?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {/* <table border={1} style={{width: '100%'}} cellPadding={0} cellSpacing={0}>
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
          </table> */}
        </>
      )
    }

{/*     
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
    </div> */}

    <Drawer
      anchor='right'
      open={open}
      onClose={() => setOpen(false)}
    >
      <div style={{padding: '10px'}}>
        <p>Name: {row?.firstname} {row?.lastname}</p>
        <p>Username: {row?.login?.username}</p>
        <p>Email: {row?.email}</p>
        <p>Address: {row?.address?.street}</p>
        <p>Phone: {row?.phone}</p>
        <p>Website: {row?.website}</p>
        <p>Company: {row?.company?.name}</p>
      </div>
    </Drawer>

    </div>
  )
}

export default Users