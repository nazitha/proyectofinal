/* eslint-disable eqeqeq */
import {  Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton,Toolbar, InputAdornment } from '@mui/material';
import { makeStyles } from "@material-ui/styles";
import {EditOutlined} from '@material-ui/icons'
import { DeleteForeverOutlined } from '@material-ui/icons';
import List2 from './List2';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Controles from '../Modal/Controles';
import AddIcon from '@material-ui/icons/Add';
import { Search } from "@material-ui/icons";
import Poppup from '../Modal/Poppus';
import Formmodels from '../Modal/Formodels';


const useStyles = makeStyles( ({
   searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px',
      width: '20%'
  }
}))

export default function Dashboard () {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
     const [openPopup, setOpenPopup] = useState(false)
     const [ setFilterFn] = useState({ fn: items => { return items; } })

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter(x => x.fullName.toLowerCase().includes(target.value))
        }
    })
}

const addOrEdit = (Dashboard, resetForm) => {
    if (Dashboard.id == 0)
        Formmodels.insertAtleta(Dashboard)
    else
        Formmodels.updateA(Dashboard)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
}

const openInPopup = item => {
    setRecordForEdit(item)
    setOpenPopup(true)
}

    const[userList, setUserList] = useState ([])

    const getUser = async () => {
      const { data } = await axios.get('http://localhost:4000/api/MostrarDeportista')
      console.log(data)
      setUserList(data)
    }

    const Eliminar = async (id) =>{
        try{
            const { data } = await axios.post('http://localhost:4000/api/EliminarDeportista', {id:id})
            getUser()
          }catch(error){
            console.log(error)
          }
    }

    useEffect(getUser, [])

    
  return<>
     <List2/>
       <h1 className='text-center'>Tabla de Atleta</h1>

       <Toolbar>
                    <Controles.Input
                        label="Buscar Atletlas"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controles.Button
                        text="Agregar"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
   
         
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
                    {userList.map((user,index) => (
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
                            color='primary'
                            //onClick={() => { openInPopup(item) }}
                            >
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
                    }
                
                </TableBody>       
                </Table>
            </TableContainer>   

        </div>
        <Poppup
                title="Agregar Atleta"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Formmodels
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Poppup>

      

    </>
};
