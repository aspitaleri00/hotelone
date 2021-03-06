import React from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { makeStyles, Typography, InputBase, Button } from '@material-ui/core';
import {People} from "@material-ui/icons";
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux";
import {selectStart, setStart} from "../features/counter/startSlice";
import {selectEnd,setEnd} from "../features/counter/endSlice";











const DatePicker = () => {
  const classes = useStyle()
  const navigate = useNavigate()
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const dispatch = useDispatch()


  const selectionRange = {

    startDate : start,
    endDate : end,
    key : "selection"
  }
 
  const handleSelect = (ranges) => {
    console.log(ranges)
    dispatch(setStart(ranges.selection.startDate.getTime()))
    dispatch(setEnd(ranges.selection.endDate.getTime()))

  }

  return (
    <div className={classes.root}>
      <DateRangePicker  ranges ={[selectionRange ]} 
      
      onChange= {handleSelect}
      />
      
     <div className = {classes.inputSection}>
      <Typography variant = "h5">Number of guest</Typography>
      <div className={classes.people}>
        
      <InputBase placeHolder = "2pax"
        inputProps = { {className : classes.input}}
      
      / >
        <People />
        </div >
      <Button onClick={() => {navigate("/search")}}>SearchRooms</Button>
      
     </div>
   </div>
  )


}

const useStyle = makeStyles ((theme)=> ({
    root: {
      position : "absolute",
      top : "25vh",
      left : "30vw",
      zIndex: "50",
      [theme.breakpoints.down("sm")] : {
          top : "16vh",
          left : 0,
      }
  
    }, 
    
    inputSection : {
      display : "flex",
      flexDirection: "column",
      
      backgroundColor : "#fff",
      "& h5" : {
        textAlign : "center",
        
      },
      "& button:hover " : {  
        backgroundColor : "rgba (255,103,31,0.4)",
        color : "#fff",
  
         },

         
         people:{
           display: "flex",
            justifyContent : "center",

         },
    },

    input : {
      width : " 4vw ",
      border : "1px solid #ccc", 
      margin : theme.spacing (0,2,2,0) ,
      padding : theme.spacing(1,0,1,3 ),
      
       }

}))

export default DatePicker;