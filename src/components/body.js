import React from 'react'
import './Body.css'
import '../logo.jpg'


export default function body() {
  return (
    <>
    <div className="container" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'8vw'}}>
        <div className="btn1">
            <a href="/register" className='btn btn-primary' style={{marginRight:'20vw',padding:'1.5vw',fontSize:'2vw'}} >Register Complaint</a>
        </div>
        <div className="btn2">
        <a href="/register" className='btn btn-primary' style={{padding:'1.5vw',fontSize:'2vw'}} >Complaint Status</a>
        </div>
    </div>
   <br />

    <div className="image">
        <img className='img' src="logo.jpg"  alt="" />
        <br />
    </div>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex error sit nostrum illum, reiciendis velit dignissimos nisi, sequi nulla dolores accusamus. Deserunt adipisci esse nobis et eaque, vero maxime rerum a totam blanditiis laborum molestias dicta veritatis maiores, fugit culpa magnam vitae dolore, autem ullam rem nisi nulla illo. Voluptas, nobis nulla. Tenetur molestias adipisci exercitationem itaque, dignissimos accusamus sapiente aliquid ducimus nihil, labore accusantium maxime laboriosam. Eius eveniet perspiciatis ducimus aspernatur veniam maiores porro iusto molestiae possimus corporis. Sapiente aspernatur ullam itaque ea mollitia saepe molestias libero laboriosam ratione, sit ducimus sequi neque quos sint quae cum accusamus?
    </>
  )
}
