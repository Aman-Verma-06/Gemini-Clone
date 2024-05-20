import { FiMenu } from 'react-icons/fi'
import '../SideBar/Sidebar.css'
import { FaPlus } from 'react-icons/fa'
import { IoChatboxOutline, IoSettingsOutline } from 'react-icons/io5'
import { GoQuestion } from 'react-icons/go'
import { MdHistory } from 'react-icons/md'
import { useState } from 'react'
import { useGeminiContext } from '../../context/Context'

const Sidebar = () => {

    const [extended, setExtented] = useState(false);
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useGeminiContext();

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <FiMenu onClick={() => setExtented(!extended)} className='menu-icon' />
                    <div onClick={() => newChat()} className="new-chat">
                        <FaPlus className='plus-icon' />
                        {extended ? <p>New Chat</p> : null}
                    </div>
                    {extended ? (<div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompt.map((item, index) => {
                            return (<div onClick={() => loadPrompt(item)} className="recent-entry">
                                <IoChatboxOutline className='chat-icon' />
                                <p>{item.slice(0, 18)}</p>
                            </div>)
                        })}
                    </div>) : null}

                </div>
                <div className="bottom">
                    <div className="bottom-item recent-entry">
                        <GoQuestion />
                        {extended ? <p>Help</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <MdHistory />
                        {extended ? <p>Activity</p> : null}
                    </div>
                    <div className="bottom-item recent-entry">
                        <IoSettingsOutline />
                        {extended ? <p>Settings</p> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
