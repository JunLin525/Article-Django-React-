import Headerr from '../components/Headerr'
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';

function Booklist() {
    const [buku, setBuku] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
            // const accessToken = authTokens?.access;
            //console.log('access:', accessToken)
            //const response = await fetch('http://170.187.229.248:8000/books/');

            const response = await fetch('http://170.187.229.248:8000/books', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer' + String(accessToken)
                    'Authorization': 'Bearer ' + String(authTokens.access)

                },
            })

            const jsonData = await response.json()
            setBuku(jsonData);
        } catch (error) {
            console.log(error);
        }

    }




    return (
        <div className='landing-background'>
            <Headerr />
            <div className='content'>
                <br />
                <h1>書籍推薦</h1>
                <ul>
                    {buku.map(item => (
                        <li className='book_item' key={item.id}>
                            <div className='book_back'>
                                <div className='book_info'>
                                    <div className='book_name'>{item.book_name}</div>
                                    <div className='author'>{item.author}</div>
                                    <div className='publisher'>{item.publishing_house}</div>
                                    <div className='ISBN'>{item.ISBN}</div>
                                    <div className='Abstract'>{item.Abstract}</div>
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



export default Booklist;
