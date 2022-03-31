import { makeStyles, Typography, Button } from '@material-ui/core';
import sungoesdown from '../Imagenes/sungoesdown.jpg';
import {Link} from "react-router-dom";

import React from 'react';


const Banner = () =>{
    const classes = useStyle ()


    return(

        <div src = {sungoesdown} className={classes.root}  >
         <div className={classes.info}>
           <Typography variant = "h2">Planea tu Viaje...</Typography>
          <Link to = "/search">
            <Button variant = "contained" > Check our rooms  </Button> 
            </Link>
       </div>
        </div>
    )
}

const useStyle = makeStyles ( (theme) =>({
    root: {
        height : "47vh",
        position: "relative",
        backgroundImage: `url(${sungoesdown})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    },
    info: {
        backgroundColor: "#000",
        color : "#fff",
        width : "350px",
        padding : theme.spacing (2),

        "& h2" :  {
            marginBottom : theme.spacing (4)


        },
        "& button " : {
            backgroundColor : "rgba(255,103,31)",
            color: "#fff",
            textTransform : "inherit",
            fontSize : " 1.2rem",
            fontWeight :  "bold"

        },
        "&button:hover" : {
            backgroundColor : "#fff",
            color : "rgba(255,103,31)"

        }




    }

}))

export default Banner;