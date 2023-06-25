import {  Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import {EditOutlined} from '@material-ui/icons'
import { DeleteForeverOutlined } from '@material-ui/icons';
import List2 from './List2';
import "../CSS/Dashboard.css"
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Dashboard = () => {
    const[userList, setUserList] = useState ([])

    const getUser = async () => {
      const { data } = await axios.get('/')
      console.log(data)
      setUserList(data)
    }

    const Eliminar = async (id) =>{
      try{
        const { data } = await axios.post('/')
        getUser()
      }catch(error){
        console.log(error)
      }
    }

    useEffect(getUser,[])
    
  return<>
     <List2/>
       <h1 className='text-center'>Tabla de Atletas</h1>
   
         
        <div className='result-container' id="resultConstainer">
                <TableContainer id="result" elevation={2} >
                    <Table>
                    <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                            <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>Elo</TableCell>
                                <TableCell>Codigo Fide</TableCell>
                                <TableCell>Academia</TableCell>
                                <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>   
                <TableBody>
                    {/* {userList.map((user,index) => (
                    <TableRow key={index}>
                        <TableCell>{user.Id_Deportista}</TableCell>
                        <TableCell>{user.Nombre}</TableCell>
                        <TableCell>{user.Apellido}</TableCell>
                        <TableCell>{user.ELO}</TableCell>
                        <TableCell>{user.Codigo_Fide}</TableCell>
                        <TableCell>{user.Pertenece_a_Academia}</TableCell>
                        <TableCell>
                        <IconButton 
                            size='small' 
                            color='primary'>
                            <EditOutlined/>
                        </IconButton>
                        <IconButton 
                            onClick={()=>Eliminar(user.Id_Deportista)}
                            size='small' 
                            color='secundary'
                        >
                            <DeleteForeverOutlined/> 
                        </IconButton>
                        
                        </TableCell>
                    </TableRow>
                    ))
                    } */}
                
                </TableBody>       
                </Table>
            </TableContainer>   

        </div>

      

    </>
};
export default Dashboard;