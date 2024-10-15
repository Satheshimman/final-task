
import React, { useEffect, useState} from "react";
import "./style.scss"
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Home=()=>{

    const [arr,setarr]=useState([])
    const [search,setsearch]=useState("")
    const nav=useNavigate()

    const api=()=>{
        fetch("https://api.tvmaze.com/shows/1/episodes")
        .then((response)=>response.json())
        .then(json=>setarr(json))
    
    }
    
    useEffect(api)
    
    const view=(val,ind)=>{
        nav(`/details?id=${val.id}`)
        console.log(val.id)
    }
    const inputvalue=(e)=>{
        e.preventDefault()
        setsearch(e.target.value.toLowerCase())
    }
    return(
        <div>
           <div className="container">
                <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center bg-primary py-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <input type="text" placeholder="search something" className="w-100" onChange={inputvalue}/>
                        </div>
                    </div>
                </div>
           <div className="col-12">
            <div className="d-flex justify-content-between align-items-center flex-wrap p-3">
                {arr.filter(user=>user.name.toLowerCase().includes(search)).map((a,b)=>{
                    return(
                        
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-4">
                                <div className="card-border p-3 shadow-1">
                                    <div className="">
                                        <img src={a.image.original} className="w-100" alt="images"></img>
                                    </div>

                                    <div className="">
                                        <div className="mt-2">
                                             <p className="moviename">Name:{a.name}</p>    
                                        </div>  

                                        <div className="d-flex align-items-center justify-content-start movieratingg">
                                            <div className="movierating">
                                                <p>rating:</p>
                                            </div>

                                            <div className="moviestarr">
                                                <div className="moviestar">
                                                    <span>{a.rating.average}<i className=""><RiStarSFill className="moviei"/></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center detailsbtn">
                                        <button type="submit" onClick={()=>view(a,b)}>view details</button>
                                    </div>
                                </div>    
                            </div> 
                    )
                })}
                </div>
            </div>
           </div>
        </div>
    )
}
