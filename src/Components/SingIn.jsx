import { useState, useEffect } from 'react';
import { Redirect, Link } from "react-router-dom";
import Router from '../Router/index';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {loginPLayer} from "../Util/api";
import auth from '../Util/auth';
import { useAuth } from '../Context/AuthContext';
import { useSnackbar } from '../Context/SnackbarContext';

const theme = createTheme();

export default function SignIn() {
    const { openSnackbar, hideSnackbar } = useSnackbar();
    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const { currentAuth, setCurrentAuth } = useAuth();

    useEffect(() => {
        const userLogin = auth.getLogin();

        if (userLogin) {
            setCurrentAuth(userLogin);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        hideSnackbar();

        try {
           await loginPLayer(login, password);

        } catch (error) {
            console.log('error');
            openSnackbar('error', 'Špatně zadané jméno nebo heslo');
        }
        

        const userLogin = auth.getLogin();

        if (userLogin) {
            setCurrentAuth(userLogin);
        }
    };

    return (
        <>
            { currentAuth && <Redirect to={Router.home} /> }
            
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Přihlášení
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="login"
                                label="Uživatelské jméno"
                                name="login"
                                autoComplete="login"
                                autoFocus
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Heslo"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Přihlásit se
                            </Button>
                            
                            <Grid container>
                                <Grid item>
                                    <Link to="/register" variant="body2">
                                        {"Nemáš účet? Zaregistuj se"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}