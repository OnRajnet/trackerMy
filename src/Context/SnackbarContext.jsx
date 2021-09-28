import React, { useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarContext = React.createContext();

export function useSnackbar() {
    return useContext(SnackbarContext);
}

function SnackbarContextProvider({ children }) {
    const [snackbar, setSnackbar] = useState({
        show: false,
        message: "",
        type: "error"
    });

    const openSnackbar = (type, message) => {
        setSnackbar({ show: true, type, message });
    };

    const hideSnackbar = () => {
        setSnackbar({
            show: false,
            message: "",
            type: ""
        });
    };

    return (
        <SnackbarContext.Provider
            value={{
                openSnackbar,
                hideSnackbar
            }}
        >
            <div>
                {snackbar.show && (
                    <Snackbar
                        open={snackbar.show}
                        autoHideDuration={6000}
                        onClose={hideSnackbar}
                    >
                        <Alert
                            onClose={hideSnackbar}
                            severity={snackbar.type}
                            sx={{ width: "100%" }}
                        >
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
                )}
                {children}
            </div>
        </SnackbarContext.Provider>
    );
}

export default SnackbarContext;

export { SnackbarContextProvider };
