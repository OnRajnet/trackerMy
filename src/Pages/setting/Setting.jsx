import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"

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
    },

}));

export default function Setting() {
    const classes = useStyles();

    return (
        <div className={classes.setting}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Úprava uživatele</h1>
            </div>
            <div className={classes.userContainer}>
                <div className={classes.userShow}>
                    <div className={classes.userShowTop}>
                        <img src="https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg"
                            alt="" className={classes.showUserImg} />
                        <div className={classes.userShowTopTitle}>
                            <span className={classes.userShowUsername}>Anna Becker</span>
                            <span className={classes.userShowUseTitle}>Software Engineer</span>
                        </div>
                    </div>
                    <div className={classes.userShowBottom}>
                        <span className={classes.userShowtitle}>Account Details</span>
                        <div className={classes.userShowInfo}>
                            <PermIdentity classNameé={classes.userShowIcon} />
                            <span className={classes.userShowInfoTitle}>AnnaBeck99</span>
                        </div>
                        <div className={classes.userShowInfo}>
                            <CalendarToday classNameé={classes.userShowIcon} />
                            <span className={classes.userShowInfoTitle}>10.12.1999</span>
                        </div>
                        <span className={classes.userShowtitle}>Contact Details</span>
                        <div className={classes.userShowInfo}>
                            <PhoneAndroid classNameé={classes.userShowIcon} />
                            <span className={classes.userShowInfoTitle}>+420 7787Z8787</span>
                        </div>
                        <div className={classes.userShowInfo}>
                            <MailOutline classNameé={classes.userShowIcon} />
                            <span className={classes.userShowInfoTitle}>asdfas@asdf.com</span>
                        </div>
                        <div className={classes.userShowInfo}>
                            <LocationSearching className={classes.userShowIcon} />
                            <span className={classes.userShowInfoTitle}>Tetov 50</span>
                        </div>

                    </div>
                </div>
                <div className={classes.userUpdate}>
                    <span className={classes.userUpdateTitle}>Edit</span>
                    <form className={classes.userUpdateFrom}>
                        <div>
                            <div className={classes.userUpdateItem}>
                                <label>Username</label>
                                <input type="text" placeholder="AnnaBeck99" className={classes.userUpdateInput} />
                            </div>
                            <div className={classes.userUpdateItem}>
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className={classes.userUpdateInput}  />
                            </div>
                            <div className={classes.userUpdateItem}>
                                <label>Email</label>
                                <input type="text" placeholder="asdfas@asdf.com" className={classes.userUpdateInput}  />
                            </div>
                            <div className={classes.userUpdateItem}>
                                <label>Phone</label>
                                <input type="text" placeholder="+420 7787Z8787" className={classes.userUpdateInput}  />
                            </div>
                            <div className={classes.userUpdateItem}>
                                <label>Adress</label>
                                <input type="text" placeholder="Tetov 50" className={classes.userUpdateInput}  />
                            </div>
                        </div>
                        <div className={classes.userUpdateRight}>
                            <div className={classes.userUpdateUpload}>
                                <img src="https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg"
                                    alt="" className={classes.userUpdateImg} />
                                <label htmlFor="file"> <Publish className={classes.userUpdateIcon} /> </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className={classes.userUpdateButton}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
