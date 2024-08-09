import "./rightbar.css"
import {Users} from "../../Dummydata";
import Online from "../online/Online"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends,setFriends]= useState([])
  const {user:currentUser,dispatch} = useContext(AuthContext)
  const [followed,setFollowed]= useState(currentUser.followings.includes(user?.id))

  useEffect(()=>{
    setFollowed(currentUser.followings.includes(user?.id))
  },[currentUser,user])

  useEffect(()=>{
const getFriends = async() =>{
  try{
 const friendList = await axios.get("/users/friends/" + user._id);
setFriends(friendList.data);
  }catch(err){
    console.log(err)
  }
};
getFriends();
  },[user])

  const handleClick = async ()=>{
    try{
if(followed)
{
  await axios.put("/users/"+user._id+"/unfollow",{userId:currentUser._id});
  dispatch({type:"UNFOLLOW",payload:user._id})
}
else{
  await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id});
  dispatch({type:"FOLLOW",payload:user._id})
}
    }catch(err){
      console.log(err)
    }
    setFollowed(!followed);
  }
  
const HomeRightBar = () => {
  return (
    <div>
<img className="rightbarAd" src="/assets/post/ads.png" alt=""></img>
     <h4 className="rightbarTitle">Online</h4>
     <ul className="rightbarFriendList">
     {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
      
     </ul>
    </div>
  )
}

const ProfileRightBar = () => {
 
  return (
    <div>
    {user.username !== currentUser.username && (
      <button className="rightbarFollowButton" onClick={handleClick}>
        {followed ? "Unfollow" : "Follow"}
        {followed ? <RemoveIcon/> :<AddIcon/>}
     </button>
    )}
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship==1?`Single`:'Committed'}</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
      {friends.map(friend=>(
        <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={friend.profilePicture? PF+friend.profilePicture : PF+"user/noimg.jpg"} alt=""></img>
          <span className="rightbarFollowingName">{friend.username}</span>
        </div>
        </Link>
     
      ))}
       
        
      </div>
    </div>
  )
}

  return (
    <div className="rightbar">
     <div className="rightbarWrapper">
     {user?<ProfileRightBar /> : <HomeRightBar />}
     
     </div>
    </div>
  )
}
