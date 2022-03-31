import React from "react";
import {useEffect,useState} from 'react';
import {AppBar, InputBase, makeStyles,Avatar, Drawer, Toolbar,Typography, IconButton, ListItem,List} from "@material-ui/core";
import logo from '../components/imagenes/logo.jpeg';
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";


const Header = ()=>{
const [tablet,setTablet]=useState(true);
const [drawerOpen,setDrawerOpen] = useState (false)
const classes = useStyle()

useEffect (()=>{
    const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet (false)
    responsiveness();
    window.addEventListener("resize", ()=>responsiveness())
},[])


const displayTablet = ()=>{
    const handleDrawerOpen = ()=> {
        setDrawerOpen(true)
    }
    const handleDrawerClose = ()=> {
        setDrawerOpen (false)
     }

     const headersData= [ "My acoount", "Previous bookings", "Log out"]

   const getDrawerChoises = ()=> {

       return headersData.map ( (headersdata)=> {
           return (
               <List>

                   <ListItem> {headersdata}  </ListItem>
               </List>
           )
       })
   }


   
   
     







   return(
    <Toolbar className= {classes.toolbar} >
    <IconButton {...{edge:"start",
                    color:"#ccc",
                    "aria-label" : "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,

                     }}>

            <MenuIcon  fontSize="large"/>
            </IconButton>
            <Drawer {...{
                anchor : "left",
                open: drawerOpen,
                onClose: handleDrawerClose,

            }}>
                <div> {getDrawerChoises() } </div>
            </Drawer>
            <Link to = "/">
            <img src={logo} className={classes.logo} alt="logo" / >
            </Link>
            <div className={classes.right}>
                    <Typography>Sign in</Typography>
                    <Avatar className={classes.avatar} />
                </div>
        </Toolbar>
   )
 }

 
 




    function displayDesktop() {
        return (

            <Toolbar className={classes.toolbar}>
               <Link to="/" >
                <img src={logo} className={classes.logo} alt= "logo" />
                </Link>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder="Search here.." inputProps={{ className: classes.input }} />
                    <SearchIcon />
                </div>
                <div className={classes.right}>
                    <Typography>Sign in</Typography>
                    <Avatar className={classes.avatar} />
                </div>

            </Toolbar>


        );
    }


return (

    <AppBar className={classes.root} >
{
    tablet ? displayTablet (): displayDesktop()

}
    </AppBar>


)


 
 }


const useStyle = makeStyles ((theme)=> ({
    root:{
        position: "sticky",
        top: "0",
        backgroundColor: "#fff",
        zIndex: 99,

    },

    toolbar :{
        displayFlex: "flex",
        justifyContent: "space-between",
        alignItems : "center",
    },
    logo:{
        height: "150px",
        margin: theme.spacing (1,0,0,2),
        objectFit: "contain",

    },
    center:{
        display:"flex",
        alignItems: "center",
        border: "1px solid lightgray",
        minWidht: "300px",
        borderRadius:"999px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),  

    },
        right:{
            color: "#333",
            display: "flex",
            align: "center",
            margin: "theme.spacing(2)",



        },
        
        avatar :{
            marginLeft: theme.spacing(2)
        },

        input:{
            fontSize: "1.8rem",
            padding: theme.spacing(1,5,1,5),

        },
       
    


 }))
 
export default Header;


