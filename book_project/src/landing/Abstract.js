import Headerr from '../components/Headerr'
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Abstract() {
    const [book, setBook] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://170.187.229.248:8000/NewBook/')
            const jsonData = await response.json()
            setBook(jsonData);
        } catch (error) {
            console.log(error);
        }

    }
    console.log(book)



    return (
        <div className='landing-background'>
            <Headerr />
            <div className='content'>
                <h1>讀書摘要</h1>
                <ul>
                    {book.map(item => (
                        <li className='book_item' key={item.pk}>
                            <div className='book_back'>
                                <div className='book_info'>
                                    <Link to={`/abstract/${item.pk}`} > {item.NewBookName}</Link>
                                    <div className='author'>作者：{item.author_book}</div>
                                    <div className='publisher'>出版社：{item.publisher}</div>
                                    <div className='ISBN'>ISBN：{item.ISBN}</div>
                                    <img src={item.Cover} alt="Book Cover" style={{ width: '200px', heigh: '200px' }} />
                                    <hr />
                                    <div className='Abstract'>
                                        {item.Abstract.slice(0, 50)}...

                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='landing-back'>

            </div>

            <Footer />
        </div>
    )
}


export default Abstract;