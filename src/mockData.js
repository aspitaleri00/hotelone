import indoorpool1 from "./Imagenes/indoorpool1.jpg";
import bar from "./Imagenes/bar.jpg";
import standar from "./Imagenes/standar.jpg";
import outdoorpool from "./Imagenes/outdoorpool.jpg";
import executive from "./Imagenes/executive.jpg";
import withbalcony from "./Imagenes/withbalcony.jpg";
import suite2 from "./Imagenes/suite2.jpg";
import suite from "./Imagenes/suite2.jpg";

const mockData = [
    {
        id : 1,
        src : indoorpool1,
        title : "Our indoor pool",
        description : "25m long indoor pool with hammmocks and sauna",

    },
    {
        id : 2,
        src : bar,
        title : "Cocktail bar",
        description : "Esplendid classic cocktail bar with live music",
         

    },
    {
         id: 3,
        src : standar,
        title : "Standar room",
        description : "20 sqm rooms with amenities",
        cat : "room",
        price : 140,
        stock : 12,
        notAvailablestart : new Date (2022,3,25).getTime(),
        notAvailablesend : new Date (2022,3,25).getTime(), 

    },
    {
        id: 4,
        src : outdoorpool,
        title : "Outdoor pool",
        description : "Infinity pool with breath taking Ocean views",

    },
    {
        id:5,
        src : executive,
        title : "Executive Room",
        description : "Rooms with amazing sea views",
        cat : "room",
        price : 175,
        stock : 9,
        notAvailablestart : new Date (2022,3,25).getTime(),
        notAvailablesend : new Date (2022,3,25).getTime(), 
    },
    {
        id:6,
        src : withbalcony,
        title : "Rooms with balcony",
        description : "Rooms with amazing sea views",
        cat : "room",
        price : 175,
        stock : 15,
        notAvailablestart : new Date (2022,3,25).getTime(),
        notAvailablesend : new Date (2022,3,25).getTime(), 
    },
    {
        id:7,
        src : suite2,
        title : "Our Corner Suite",
        description : "Junior suite with kitchenete",
        cat : "room",
        price : 225,
        stock : 10,
        notAvailablestart : new Date (2022,3,25).getTime(),
        notAvailablesend : new Date (2022,3,25).getTime(), 
    },
    {
        id:8,
        src : suite,
        title : "Our Corner Suite",
        description : "Discrete and luxurious with butler service",
        cat : "room",
        price : 350,
        stock : 4,
        notAvailablestart : new Date (2022,3,25).getTime(),
        notAvailablesend : new Date (2022,3,28).getTime(), 
    },



];

export const chips = [
    {key: 0, label : "Cancellation Flexibility"},
    {key: 1, label : "Standar rooms"},
    {key: 2, label : "Executive rooms"},
    {key: 3, label : "Acces to lounge"},
    {key: 4, label : "More filters"},

];

export default mockData ; 