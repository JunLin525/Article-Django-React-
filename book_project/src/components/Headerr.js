import React, { useContext } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Authcontext from '../context/AuthContext';
function Headerr() {
    let { user, logoutUser } = useContext(Authcontext)
    const navigate = useNavigate();
    const handleClickLanding = () => {
        navigate('/');
    };
    const handleClickNew = () => {
        navigate('/booklist/')
    }

    const handleClickAbstract = () => {
        navigate('/abstract/')
    }
    const handleClickLogin = () => {
        navigate('/login/')
    }

    return (
        <div className='header'>
            <button className='title' onClick={handleClickLanding}>書籍推薦區</button>
            <button className='title' onClick={handleClickLanding}>關於本站</button>
            <button className='title' onClick={handleClickNew}>書籍推薦</button>
            <button className='title' onClick={handleClickAbstract}>讀書摘要</button>
            {user ? (
                <button className='title' onClick={logoutUser}>登出再見</button>
            ) : (<button className='title' onClick={handleClickLogin}>登入頁面</button>
            )}
            <br />
            {user && <p>Hello {user.username}</p>}

        </div>
    )
}
export default Headerr;