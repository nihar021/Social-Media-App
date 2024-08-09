import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person2';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {
const {user}=useContext(AuthContext);
const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
      <span className="logo">SocialApp</span>
      </Link>
        
      </div>
      <div className="topbarCentre">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for friend,post or video" className="searchInput"></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
          
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
<Person />
<span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
<Chat />
<span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
<Notifications />
<span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture: PF+"user/noimg.jpg" } alt="" className="topbarImg" />

        </Link>
       
      </div>

    </div>
  )
}
