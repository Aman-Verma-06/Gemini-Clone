import { FaCode, FaRegCompass, FaRegLightbulb, FaRegUserCircle } from 'react-icons/fa'
import '../Main/Main.css'
import { LuMessagesSquare } from 'react-icons/lu'
import { TbPhotoSquareRounded } from 'react-icons/tb'
import { MdOutlineMicNone } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import { useGeminiContext } from '../../context/Context'
import gemini_icon from '../../assets/gemini_icon.png'
import userPhoto from '../../assets/userPhoto2.jpg'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useGeminiContext();

    return (
        <div className='main'>
            <div className="nav">
                <h1>Gemini</h1>
                <img src={userPhoto} alt="" className='user-icon' />
            </div>
            <div className="main-container">
                {!showResult ? (<>
                    <div className="greet">
                        <p><span>Hello, Developer</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    {/* <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip.</p>
                            <FaRegCompass className='compass-icon image-icon' />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning.</p>
                            <FaRegLightbulb className='bulb-icon image-icon' />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat.</p>
                            <LuMessagesSquare className='message-icon image-icon' />
                        </div>
                        <div className="card">
                            <p>Tell me about React js and React native.</p>
                            <FaCode className='code-icon image-icon' />
                        </div>
                    </div> */}
                </>) : (<div className='result'>
                    <div className="result-title">
                        <img src={userPhoto} alt="" className='user1-icon' />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={gemini_icon} alt="" />
                        {loading ? (<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>) : (<p dangerouslySetInnerHTML={{ __html: resultData }}></p>)}
                    </div>
                </div>)}

                <div className="main-bottom">
                    <div className="search-box">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <TbPhotoSquareRounded className='input-icon' />
                            <MdOutlineMicNone className='input-icon' />
                            {input ? <IoIosSend onClick={() => onSent()} className='input-icon' /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.</p>
                </div>
            </div>
        </div>
    )
}

export default Main
