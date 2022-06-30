import React from 'react'
import './register.css'
export default function about() {

  const handleClick = ()=>{
    document.execCommand("bold",false,null);
  }

  return (
   <div id='box' className="container" style={{fontSize:'2vw', fontFamily:'Bitter'}}>
    <br />
   
    Email : example123@gmail.com <br />
    Name  : Example Sharma
    <br />
    <br />
    Complaint topic:
    <select style={{borderRadius:'0.3vw',marginLeft:'1vw',width:'10vw',textAlign:'center',paddingTop:'0.3vw',paddingBottom:'0.3vw'}}>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            <option value="option4">Option4</option>
            <option value="option5">Option5</option>
            <option value="option6">Option6</option>
        </select>
        <br /><br />
    Details    <br />
    <div className="cont1">
        <button  className="btn align" id="justifyLeft">
            <i className="fa fa-align-left"></i>
        </button>
        <button className="btn align" id="justifyCenter">
            <i className="fa fa-align-center"></i>
        </button>
        <button className="btn align" id="justifyRight">
            <i className="fa fa-align-right"></i>
        </button>
        <button className="btn align" id="justifyFull">
            <i className="fa fa-align-justify"></i>
        </button>
        <button onClick={handleClick} className="btn format" id="bold">
            <i className="fa fa-bold"></i>
        </button>
        <button className="btn format" id="italic">
            <i className="fa fa-italic"></i>
        </button>
        <button className="btn format" id="underline">
            <i className="fa fa-underline"></i>
        </button>
        <button className="btn script" id="superscript">
            <i className="fa fa-superscript"></i>
        </button>
        <button className="btn script" id="subscript">
            <i className="fa fa-subscript"></i>
        </button>
        <button className="btn" id="insertOrderedList">
            <i className="fa fa-list-ol"></i>
        </button>
        <button className="btn" id="insertUnorderedList">
            <i className="fa fa-list-ul"></i>
        </button>
        <button className="btn" id="undo">
            <i className="fa fa-rotate-left"></i>
        </button><button className="btn" id="redo">
            <i className="fa fa-rotate-right"></i>
        </button>
        <button className="btn" id="createLink">
            <i className="fa fa-link"></i>
        </button>
        <button className="btn" id="unlink">
            <i className="fa fa-unlink"></i>
        </button>
        <button className="btn" id="insertImage">
            <i className="fa fa-image"></i>
        </button>
    </div>

    <div className="submit">
        <input type="text" className="content" id="text-input"/>
   
    </div>
    <div id="submit" className="submit"><button className="btn btn-primary" id="post">POST</button>
    <a href="/" className='btn btn-danger'>CANCEL</a>
    <br /><br />
    </div>
    

    <script>
      
    </script>

   </div>
  );



}
