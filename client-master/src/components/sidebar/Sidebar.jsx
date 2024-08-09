import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarlistItem">
            <RssFeedIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <ChatIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Chat</span>
          </li>
          <li className="sidebarlistItem">
            <PlayCircleIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Videos</span>
          </li>
          <li className="sidebarlistItem">
            <GroupsIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Groups</span>
          </li>
          <li className="sidebarlistItem">
            <BookmarksIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Bookmarks</span>
          </li>
          <li className="sidebarlistItem">
            <HelpIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Question</span>
          </li>
          <li className="sidebarlistItem">
            <EventIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Event</span>
          </li>
          <li className="sidebarlistItem">
            <SettingsIcon className="sidebarIcon"/>
            <span className="sidebarlistitemText">Settings</span>
          </li>


        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendlist">
          <li className="sidebarFriend">
            <img className="sidebarfriendImg" src="/assets/user/user2.png" alt=""></img>
            <span className="sidebarfriendName">Jack Wu</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarfriendImg" src="/assets/user/user6.jpeg" alt=""></img>
            <span className="sidebarfriendName">Eunwoo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarfriendImg" src="/assets/user/user4.jpg" alt=""></img>
            <span className="sidebarfriendName">Lily Rose</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
