import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controles from "./Controles";
import { useForm, Form } from './useForm';


const initialFValues = {
    id: 0,
    fullName: '',
    LastName:'',
    Number: '',
    mobile: '',
    city: '',
    isPermanent: false,
}

export default function Formmodels(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "Nombre requerido."
            if ('LastName' in fieldValues)
            temp.LastName = fieldValues.LastName ? "" : "Apellido requerido."
            if ('Number' in fieldValues)
            temp.Number = fieldValues.Number.length > 9 ? "" : "Ingrese Elo."
              
        setErrors({
            ...temp
        })

        // eslint-disable-next-line eqeqeq
        if (fieldValues == values)
            // eslint-disable-next-line eqeqeq
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit, setValues])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={5}>
                    <Controles.Input
                        name="fullName"
                        label="Nombre"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controles.Input
                        name="LastName"
                        label="Apellido"
                        value={values.LastName}
                        onChange={handleInputChange}
                        error={errors.LastName}
                    />
                        <Controles.Input
                        name="Number"
                        label="Elo"
                        value={values.Number}
                        onChange={handleInputChange}
                        error={errors.Number}
                    />
                    <Controles.Input
                        label="Codigo Fide"
                        name="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controles.Input
                        label="Academia"
                        name="City"
                        value={values.city}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={5}>
                  
                 

                    <div>
                        <Controles.Button
                            type="Submit"
                            text="Confirmar" />
                        <Controles.Button
                            text="Cancelar"
                            color="primary"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
