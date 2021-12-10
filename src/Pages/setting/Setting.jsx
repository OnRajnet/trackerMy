import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {PermIdentity, Accessibility, Cached} from "@material-ui/icons"
import {changePassword, logOutApp, saveUserToDb} from "../../Util/api";
import {getLogin, useAuth} from "../../Context/AuthContext";

const useStyles = makeStyles((theme) => ({
    setting: {
        flex: 2,
        padding: 20,
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flexGrow: 1,
    },
    userContainer: {
        display: "flex",
        marginTop: 20,
    },
    userShow: {
        flex: 1,
        padding: 20,
        boxShadow: "0px 0px 15px -10px #000000",
    },
    showUserImg: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        objectFit: "cover",
    },
    userShowTop: {
        display: 'flex',
        alignItems: 'center',
    },
    userShowTopTitle: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 20,
    },
    userShowUsername: {
        fontWeight: 600,
    },
    userShowUseTitle: {
        fontWeight: 300,
    },
    userShowBottom: {
        marginTop: 20,
    },
    userShowtitle: {
        fontSize: 14,
        fontWeight: 600,
        color: "lightgray",
    },
    userShowInfo: {
        display: "flex",
        alignItems: "center",
        marginTop: 15,
        marginBottom:10,
        color: "#444",
    },
    userShowInfoTitle: {
        marginLeft: 10,
    },
    userShowIcon: {
        fonSize: 16,
    },

    userUpdateImg: {
        width: 100,
        height: 100,
        borderRadius: 10,
        objectFit: "cover",
        marginRight: 20,
    },
    userUpdate: {
        flex: 2,
        padding: 20,
        boxShadow: "0px 0px 15px -10px #000000",
        marginLeft: 20,
    },
    userUpdateTitle: {
        fontSize: 24,
        fontWeight: 600,
    },
    userUpdateFrom: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
    },
    userUpdateLeft: {

    },
    userUpdateItem: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
    },
    userUpdateInput: {
        border: "none",
        width: 250,
        height: 30,
        borderBottom: "1px solid gray",
    },

    userUpdateRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    userUpdateUpload: {
        display: "flex",
        alignItems: "center",
    },
    userUpdateIcon: {
        cursor: "pointer",
    },
    userUpdateButton: {
    borderRadius: 5,
    border: "none",
    padding: 5,
    cursor: "pointer",
    backgroundColor: "darkblue",
    color: "whitesmoke",
    fontWeight: 600,
        marginTop:10,
    },

}));

export default function Setting() {
    const classes = useStyles();

    const [ oldPassword, setOldPassword ] = useState('');
    const [ newPassword1, setNewPassword1 ] = useState('');
    const [ newPassword2, setNewPassword2 ] = useState('');
    const { currentAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newPassword1 === newPassword2){
            changePassword(oldPassword, newPassword1);
            console.log("Succes")
            logOutApp()
        }else {
            console.log("Fail")
        }


    }

    return (
        <div className={classes.setting}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Informace o uživateli</h1>
            </div>
            <div className={classes.userContainer}>
                <div className={classes.userShow}>
                    <div className={classes.userShowBottom}>
                        <span className={classes.userShowtitle}>Detaily účtu</span>
                        <div className={classes.userShowInfo}>
                            <PermIdentity className={classes.userShowIcon} />
                            <span className={classes.userShowInfoTitle}>{currentAuth}</span>
                        </div>
                    </div>
                </div>



                <div className={classes.userUpdate} onSubmit={handleSubmit}>
                    <span className={classes.userUpdateTitle}>Změna hesla</span>
                    <form className={classes.userUpdateFrom}>
                        <div>
                            <div className={classes.userUpdateItem}>
                                <label>Staré heslo</label>
                                <input type="password"
                                       placeholder="Staré heslo"
                                       className={classes.userUpdateInput}
                                       value={oldPassword}
                                       onChange={(e => setOldPassword(e.target.value))} />
                            </div>
                            <div className={classes.userUpdateItem}>
                                <label>Nové heslo</label>
                                <input type="password"
                                       placeholder="Nové heslo"
                                       className={classes.userUpdateInput}
                                       value={newPassword1}
                                       onChange={(event => setNewPassword1(event.target.value))}/>
                            </div>
                            <div className={classes.userUpdateItem}>
                                <label>Nové heslo</label>
                                <input type="password"
                                       placeholder="Nové heslo"
                                       className={classes.userUpdateInput}
                                       value={newPassword2}
                                       onChange={(e => setNewPassword2(e.target.value))} />
                            </div>
                            <button className={classes.userUpdateButton}>Změnit!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
