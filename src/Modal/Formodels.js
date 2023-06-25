import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Controles";
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

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "Nombre requerido."
            if ('LastName' in fieldValues)
            temp.LastName = fieldValues.fullName ? "" : "Apellido requerido."
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
                    <Controls.Input
                        name="fullName"
                        label="Nombre"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        name="LastName"
                        label="Nombre"
                        value={values.LastName}
                        onChange={handleInputChange}
                        error={errors.LastName}
                    />
                        <Controls.Input
                        name="Number"
                        label="Elo"
                        value={values.Number}
                        onChange={handleInputChange}
                        error={errors.Number}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="Codigo FIDE"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="Academia"
                        value={values.city}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={5}>
                  
                 

                    <div>
                        <Controls.Button
                            type="Confirmar"
                            text="Submit" />
                        <Controls.Button
                            text="Cancelar"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
