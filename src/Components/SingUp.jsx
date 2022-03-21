import React, {useState} from 'react';
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
import { Link } from 'react-router-dom';
import {saveUserToDb} from "../Util/api";
import { useSnackbar } from '../Context/SnackbarContext';


const theme = createTheme();


export default function SignUp() {
    // inicializace hooku
    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ password1, setPassword1 ] = useState('');
    const { openSnackbar, hideSnackbar } = useSnackbar();

    const resetInputField = () => {
        setLogin("")
        setPassword("")
        setPassword1("")
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        hideSnackbar();

        if (password == password1){
            try {
                await saveUserToDb(login, password)
                openSnackbar('success','Registrace úspěšná')
                resetInputField()

            }
            catch (error){
                console.log('error');
                openSnackbar('error', 'Jméno je již obsazené');
            }
        }
        else {
            openSnackbar('error','Zadaná hesla nejsou stejná')
            console.log("Zadaná hesla nejsou stejná")
        }
   }

    return (
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
                        Registrace do webové aplikace
                    </Typography>
                    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="login"
                                    label="Název účtu"
                                    name="login"
                                    autoComplete="login"
                                    value={login}
                                    //Naplnění hooku hodnotou
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Nové heslo"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Nové heslo znovu"
                                    type="password"
                                    id="password1"
                                    autoComplete="new-password1"
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={
                                {cursor:"pointer"}
                            }
                        >
                            Registrovat
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/" variant="body2">
                                    Máš již účet? Přihlaš se!
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
