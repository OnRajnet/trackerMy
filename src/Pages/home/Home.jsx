import React, { useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import {getGoogleUserConsentLink} from "../../Util/api";
import { useAuth } from '../../Context/AuthContext';

const useStyles = makeStyles((theme) => ({
    home: {
      flex: 2,
      padding: 20,
        textAlign: "center",
    },
    appBar: {
      backgroundColor: indigo["A200"],
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    href: {
        textDecoration: "none",
    },
    button:{
        width: "100%",
        padding:30,
        backgroundColor: indigo["A200"],
        color: "black",
        borderRadius: "10px",
        fontWeight:"bold",
        fontSize:"25px",
    }
  }));

export default function Home() {
    const classes = useStyles();
    const { currentAuth } = useAuth();
    const isTrainer = currentAuth === 'trener'

    const [consentLink, setConsentLink] = useState("");

    useEffect(() => {
        if (currentAuth && currentAuth !== 'trener') {
          const fetchConsentLink = async () => {
            const link = await getGoogleUserConsentLink();
            setConsentLink(link);
          }
          fetchConsentLink();
        }
    }, [])

    return (
        <div className={classes.home}>
            
            { !isTrainer && <>
                <h1>
                    <p>Přihlaš se pomocí svého Google účtu</p>
                </h1>
                <a href={consentLink} className={classes.href}>
                  <div className={classes.button}>
                      Přihlášení
                  </div>
                </a>
              </>
            }
        </div>
    )
}
