import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function Headerr() {
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
    return (
        <div className='header'>
            <button className='title' onClick={handleClickLanding}>書籍推薦區</button>
            <button className='title' onClick={handleClickLanding}>關於本站</button>
            <button className='title' onClick={handleClickNew}>書籍推薦</button>
            <button className='title' onClick={handleClickAbstract}>讀書摘要</button>

            <div className='title'>
                活動分享
            </div>
        </div>
    )
}
export default Headerr;