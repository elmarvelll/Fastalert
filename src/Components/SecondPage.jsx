import React,{useEffect} from "react";
import notes from "./Notes";
import NoteLayout from "./noteLayout";

function SecondPage(){

   useEffect(()=>{
   const observer = new IntersectionObserver ((entries,observe)=>{
    
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
   },{
    root: null,
    rootMargin: '0px',
    threshold: 0.1
   })
   observer.observe(document.querySelector(".all_notes"))
   },[])
    return(
        <div className="SecondPage">
        <div className="secondPage_into">
        <h1> Don't Waste Time, Get Started Today</h1>
        <p>get 10 - 15% interest When Using Any of Our Fastalert Plans</p> 
        </div>

    <div className="all_notes">
        {notes.map((note)=>{
            return(
            <NoteLayout 
             title = {note.title}
             content = {note.content}
             color = {note.color}
             img = "https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/iphonw_a485f92ad1/iphonw_a485f92ad1.avif"
             />
            )
        })}
    </div>
        </div>
    )
}
export default SecondPage