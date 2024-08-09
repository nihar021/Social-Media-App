import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';

export default function Share() {
  const {user}=useContext(AuthContext);
  const PF= process.env.REACT_APP_PUBLIC_FOLDER;
const desc=useRef();
const [file,setFile]= useState(null);

const submitHandler =async (e)=>{
e.preventDefault();
const newPost ={
  userId: user._id,
  desc: desc.current.value,

}
if(file){
  const data = new FormData();
  const fileName = Date.now() + file.name
  data.append("name", fileName); 
  data.append("file", file);
  newPost.img = fileName;
  try{
await axios.post("/upload",data)
  }catch(err){
    console.log(err);
  }
}
try{
await axios.post("/posts",newPost);
window.location.reload();  //to refresh after the button is clicked or post is made
 }catch(err){

 }

}

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src={user.profilePicture?PF+user.profilePicture : PF+"user/noimg.jpg"} alt=""></img>
            <input className="shareInput" ref={desc} placeholder={"What's on your mind "+user.username+"?"}></input>
        </div>
        <hr className="shareHr"></hr>
        {file &&(
          <div className="shareImageContainer"> 
          <img className="shareImg" src={URL.createObjectURL(file)}></img>
          <CancelIcon className="shareCancelImg" onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
            <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Photo or Video</span>
                <input style={{display:"none"}} type="file" id="file" accept=".png,.jpg,.jpeg,.jfif" onChange={(e)=>setFile(e.target.files[0])}></input>
            </label>
            <div className="shareOption">
            <LabelIcon htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
            <LocationOnIcon htmlColor="green" className="shareIcon"/>
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
            <EmojiEmotionsIcon htmlColor="golden"  className="shareIcon"/>
                <span className="shareOptionText">Emoji</span>
            </div>
           

            </div>
            <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  )
}
