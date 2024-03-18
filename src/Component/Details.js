
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";

export const Details=()=>{
    const [param]=useSearchParams()
    var a=parseInt(param.get("id"))
    
    
    const [show,setShow]=useState([])
    const [update,setUpdate]=useState([])
    const compare=()=>{

        fetch('https://api.tvmaze.com/shows/1/episodes')
         .then((response)=>response.json())
        .then(json=>setShow(json))
     }
    useEffect(()=>{
        compare()
    },[])
    const display=()=>{
        let c=show.filter((v,i)=>{
            return v.id===a
        })
    
       setUpdate(c)
     }

    useEffect(()=>{
        display()
    })
    return(
       <div className="">
           <div className="container">
                <div className="col-12">
                    <div className="text-center heading">
                        <p className="bg-primary">Movie Details</p>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        {update.map((a,b)=>{
                            return(
                                <div className="col-12">
                                   <div className="d-block d-lg-flex  justify-content-between align-items-start details-card">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                                            <img className="w-100" src={a.image.original}/>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                                            <div className="card-details">
                                                <div className="detail-movie-name">
                                                    <p>Movie Name:{a.name}</p>
                                                </div>

                                                <div className="detail-movie-runtime">
                                                    <p>Movie Run Time:{a.runtime}min</p>
                                                </div>

                                                <div className="detail-movie-rating">
                                                    <p>Movie Rating:<span className="movie-rating-star">{a.rating.average}<IoStar className="star" /></span></p>
                                                </div>

                                               <div className="">
                                                    <p>{a.summary}</p>
                                               </div>
                                            </div>
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