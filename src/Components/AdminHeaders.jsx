import React from 'react'
import useStyles from '../Styles/AdminStyle';
import Typography from '@mui/material/Typography'
export default function AdminHeaders(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.basicsBox}>
    <Typography variant="h4" color="initial">{props.headline}</Typography>

    <div className={classes.basicsBoxText} >
      <Typography variant="h3" color="initial">{props.data}</Typography>
      <Typography variant="p" color="initial">{props.text}</Typography>
    </div>
  </div>
  )
}
