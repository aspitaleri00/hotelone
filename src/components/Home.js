import {CssBaseline,Grid,makeStyles } from "@material-ui/core";
import Banner from '../components/Banner';
import mockData from '../mockData';
import RoomCard from '../components/RoomCard';
import DatePicker from '../components/DatePicker';
import {useState} from 'react' ;
import  { Button } from '@material-ui/core';


export const Home = () => {

 
  const classes= useStyle()
  const [showdates,setShowdates ] = useState (false)

  return (
    <>
    <CssBaseline />

    <div className ={classes.root}>
      <div className={classes.dates} >
        <Button  onClick= { ()=> setShowdates (!showdates)}>
          {
            showdates ? "Cerrar" : "Buscar fechas"

          }

        </Button>
        </div>
        {
          showdates && <DatePicker />
        }
    <Banner />



    <Grid container className={classes.section }  spacing={3}>
    {
      mockData.map(({src,title,description},index) => (
        <Grid item sm="6" md="4" lg="3">
          <RoomCard src ={src}
        title={title}
        description={description}
        key = {index} />
        
        </Grid>
      
        
      ))

    }
      
      
       </Grid>
      </div>
      
    
    </>

  )



}

const useStyle = makeStyles ((theme)=> ({
  root:{
    display:"flex" ,
    flexDirection:"column",
    margin : theme.spacing (2),
      
  },
  dates : {
    display: "flex",
    flexDirection:"column",
    "& button" : {
      border : "1px solid #ccc ",
      backgroundColor: "#fff",
      color : "rgba(255,103,31,0.4)",
      textTransform : "inherit",
     fontSize : "1.2rem",
     fontWeight  : "bold",
      
    },
    "& button : hover " : {
      backgroundColor: "rgba(255,103,31,0.4)",
      color : "#fff",
    }
  },

     
  


}))
export default Home;