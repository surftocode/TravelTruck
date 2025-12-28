import {useState} from "react";
import React from "react";
import campersList from "../assets/data/campersList.json";





export default function Pagination(){
    const{campersPerPage,setCampersPerPage}=useState(4);
    const campers=campersList.items;
   
    return(
        <>
      
        </>
    )




}