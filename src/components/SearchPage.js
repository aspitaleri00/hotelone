import  HighlightOffTwoToneIcon  from '@material-ui/icons/HighlightOffTwoTone'
import { Chip,makeStyles,Typography ,Slider} from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import mockData, { chips } from '../mockData'
import Results from './Results';
import {useSelector} from "react-redux";
import {selectStart} from "../features/counter/startSlice";
import {selectEnd} from "../features/counter/endSlice"


const SearchPage = () => {
  const classes = useStyle()
 const [value,setValue] =useState(400)
 const start = useSelector (selectStart)
 const end = useSelector(selectEnd)

 const handleChange = (e,newValue)=>{    
   setValue(newValue) ;  
  
}
  
  
  
  return (
  
    <div className = {classes.root}>
    
      <Typography variants = "h5" gutterBottom >

    Available Rooms

      </Typography>
      <div className={classes.chip}>
      {
        chips.map (({label,key}) =>{
          let icon = <HighlightOffTwoToneIcon / >


          return (
            <Chip label = {label}
            key = {key}
            icon = {icon}
            className={classes.chip} />

          )
        })

      }

      </div>

<div className='{classes.selector}'>
<Typography gutterBottom>Precios</Typography>
  <Slider  value ={value} onChange={handleChange}
  
    aria-labelledby=" continouous-slider"
    min={100}
    max={400}
    valueLabelDisplay="auto"
      color="secondary"
  
  />
 

</div>
{
  mockData
  .filter((data) => data.cat === "room")
  .filter((data) => data.price < value)
  .filter((data)=> end < data.notAvailablestart ||
  start > data.notAvailablesend
  )
  .map(({src,title,description,price,stock}, index) => (
<Results title = {title} 
  key={index}
  src= {src}
  description = {description}
  price = {price}
  stock = {stock}
/>

  ))

}



    </div >

  )
}




const useStyle = makeStyles ((theme) => ({
  root : {
     

  },
  chips : {

    padding : theme.spacing (1)

  },
  selector :{

    width: "300px",
    marginLef: theme.spacing(3),
  }





}))
export default SearchPage