import React, { useState } from 'react';
import axios from 'axios';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom';
import List from './List';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const Login = () => {
    const [body, setBody] = useState({ username: '', password: '' })
    const { push } = useNavigate()
    const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log(body)
        axios.post('http://localhost:4000/api/LoginIngresar', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"')
                console.log(data)
                console.log('Entro')
                push('/Dashboard')
                console.log('y aqui')
            })
            .catch(({ response }) => {
                console.log("No entro")
            })
    }

    return <>
        <List/>
        <Grid container component='main'>
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>Iniciar Sesion</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Usuario'
                            value={body.username}
                            onChange={inputChange}
                            name='username'
                        />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Contraseña'
                            value={body.password}
                            onChange={inputChange}
                            name='password'
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={onSubmit}
                        >Inicio de Sesion
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
        </>
}

export default Login