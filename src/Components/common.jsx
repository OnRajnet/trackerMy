import { TextField } from "@material-ui/core";


export const RenderInputText = ({label,name,data, onChange, error}) => <TextField
label="label" 
variant="outlined"
fullWidth={true}
color="primary"
size="small"
name={name}
value={data[name]}
error={data[name] ? true : false}
helperText={error[name] ? error[name] : ""}
onChange={onChange}
/>