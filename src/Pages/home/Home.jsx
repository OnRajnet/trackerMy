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
        margin: "auto",
        width: "60%",
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
            <div>
                <h1>
                    Vítejte ve webové aplikaci na sledování sportovných výkonů
                </h1>
                <p>
                    Aplikace slouží primárně k sledování výkonů jednotlivých hráčů v čase konání zápasu.
                    Data, kterou jsou zde zobrazená uživatelé poskytli zcela dobrovnolně pro účely výzkumu.
                </p>
                <p>
                    Aplikace je rozdělena na 2 typy přístupů. Jsou zde hráči a trenéři.
                    Hráči, kteří mají méně možností než trénér. Mohou na vidět pouze svoje výkony na kartě <strong>STATISTIKY</strong> a
                    spravovat svůj účet na kartě <strong>NASTAVENÍ</strong>.
                    Trenér má více možností, jak vidět a zkoumat statistiky a výsledky utkání.
                    Na karté <strong>ZÁPAS</strong> je možné vložit záznam o utkání a nebo zobrazit si nějaký zápas, který již byl sehrát a
                    vidět detailní staticky zápasu. Dále v kartě <strong>STATISTIKY</strong> je možnost rozbrazit si výkon jednotlivého hráče.
                </p>
            </div>
            { !isTrainer && <>
                <p>
                    Prosím přilaš se pomocí svého Google účtu a odouhlas s možností poskytování dat
                    pro zaznamenání a zpracování tvých výsledků.

                </p>
                <p>
                    Pro přihlášení využil tlačítko níže.
                </p>
                <h2>
                    <p>Přihlaš se pomocí svého Google účtu</p>
                </h2>
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
