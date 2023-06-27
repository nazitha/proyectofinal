import React, { useEffect, useState } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Controles";
import { Form } from './useForm';
import axios from 'axios';
import  {Alert} from '@mui/material';



export default function Formmodels(props) {
    const { addOrEdit, recordForEdit } = props

//     const validate = (fieldValues = values) => {
//         let temp = { ...errors }
//         if ('fullName' in fieldValues)
//             temp.fullName = fieldValues.fullName ? "" : "Nombre requerido."
//             if ('LastName' in fieldValues)
//             temp.LastName = fieldValues.fullName ? "" : "Apellido requerido."
//             if ('Number' in fieldValues)
//             temp.Number = fieldValues.Number.length > 9 ? "" : "Ingrese Elo."
              
//         setErrors({
//             ...temp
//         })
//     }

//     const [error, setError] = useState({
//         status: false,
//         msg: "",
//         type: ""
//       })

//     const onSubmit = () => {
//         console.log(body)
//         if(body.name=="" || body.lastname=="" || body.Elo=="" || body.Codigo_FIDE==""|| body.Academia==""){
//             setError({ status: true, msg: "Hay campos en blanco, por favor ingresar un valor", type: 'error' })
//         }
//         else{
//             if(parseInt(body.Academia)>1 ||parseInt(body.Academia)<0){
//                 setError({ status: true, msg: "Ingrese 1 si pertenece a la academia, 0 si no pertenece", type: 'error' })
//             }else{
//                 axios.post('http://localhost:4000/api/IngresarDeportista', body)
//                 .then(({ data }) => {
//                     console.log(data)
//                 })
//                 .catch(({ response }) => {
//                     console.log("No se registrop correctamente.")
//                 })
//             }            
//         }      
//     }

//     return <>
//         <Form >
//             <Grid container>
//                 <Grid item xs={5}>
//                     <Controls.Input
//                         name="name"
//                         label="Nombre"
//                         value={body.name}
//                         onChange={inputChange}
//                     />
//                     <Controls.Input
//                         name="lastname"
//                         label="Apellido"
//                         value={body.lastname}
//                         onChange={inputChange}
//                     />
//                     <Controls.Input
//                         name="Elo"
//                         label="Elo"
//                         value={body.Elo}
//                         onChange={inputChange}
//                     />
//                     <Controls.Input
//                         label="Codigo Fide"
//                         name="Codigo_FIDE"
//                         value={body.Codigo_FIDE}
//                         onChange={inputChange}
//                     />
//                     <Controls.Input
//                         label="Academia"
//                         name="Academia"
//                         value={body.Academia}
//                         onChange={inputChange}
//                     />
//                 </Grid>
//                 <Grid item xs={5}>
//                     <div>
//                         <Controls.Button
//                             type="Submit"
//                             text="Confirmar" 
//                             onClick={onSubmit}
//                             />
//                         {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
//                     </div>
//                 </Grid>
//             </Grid>
//         </Form>
//         </>;
}
