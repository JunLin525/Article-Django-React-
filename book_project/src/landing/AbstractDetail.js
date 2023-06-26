import React, { useState, useEffect } from 'react';
import Headerr from '../components/Headerr';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function AbstractDetail() {
    const { abstractID } = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {
        let getNote = async () => {

            const response = await fetch(`http://170.187.229.248:8000/NewBook/detail/${abstractID}`)
            const data = await response.json()
            setBook(data)
        }

        getNote()
    }, [abstractID])


    return (
        <div className='landing-background'>
            <Headerr />
            <div className='content'>
                <h1>讀書摘要</h1>
                <h4>{book.Abstract}</h4>
                <img src={book.Cover} alt="Book Cover" style={{ width: '500px', heigh: '500px' }} />
            </div>
            <div className='landing-back' />
            <Footer />
        </div>
    )
}

export default AbstractDetail;