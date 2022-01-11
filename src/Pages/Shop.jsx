import React from 'react'
import Grid from '@mui/material/Grid';

export default function Shop() {
    return (
        <div style = {{width:'1000px', minHeight:'100vh',display:'flex', alignItems:'center'}}>
            <Grid style={{ backgroundColor: 'yellow' }} container spacing={2}>
                <Grid style={{ border: '1px solid black' }} item xs={1} md={1}>
                    <div>Ori</div>
                </Grid>
                <Grid style={{ border: '1px solid black' }} item xs={3} md={1}>
                    <div>Kenar</div>
                </Grid>
                <Grid style={{ border: '1px solid black' }} item xs={1} md={1}>
                    <div>Moshe</div>
                </Grid>
                <Grid style={{ border: '1px solid black' }} item xs={1} md={1}>
                    <div>David</div>
                </Grid>

            </Grid>
        </div>
    )
}
