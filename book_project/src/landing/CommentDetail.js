import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Headerr from '../components/Headerr';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function CommentDetail() {
    const navigate = useNavigate()
    const { commentID } = useParams()
    const [comments, setComments] = useState([])
    const [newText, setNewText] = useState('')
    const [newTitle, setNewTitle] = useState('');
    console.log('hello')
    const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
    const user_pk = jwt_decode(authTokens).user_id

    let getComment = async () => {
        try {
            const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
            console.log(authTokens)
            const response = await fetch(`http://170.187.229.248:8000/NewBook/comment/detail/${commentID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            const Data = await response.json()
            setComments(Data)
        } catch (error) {
            alert('無法載入')
        }
    }



    useEffect(() => {
        getComment()
    }, [commentID, getComment])

    //刪除事件
    const handleDelete = async () => {
        try {
            const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
            const response = await fetch(`http://170.187.229.248:8000/NewBook/comment/detail/${commentID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                }
            })
            if (response.ok) {
                alert(`成功刪除編號${comments.pk}之留言`)
                navigate(`/abstract/${comments.article}`)
            } else {
                alert('something went wrong')
            }
        } catch (error) {
            alert("都亂套啦!")
        }
    }


    //更改事件
    const handleEdit = async (e) => {
        e.preventDefault();
        const authTokens = JSON.parse(localStorage.getItem('authTokens')); // 從 localStorage 中獲取 Access Token
        const pk = comments.pk
        const article = comments.article
        const title = e.target.title.value
        const author = comments.author
        const text = e.target.comment.value
        const comment = {
            pk,
            article,
            title,
            author,
            text,
        };

        try {
            const authTokens = JSON.parse(localStorage.getItem('authTokens'));
            console.log(authTokens)
            const response = await fetch(`http://170.187.229.248:8000/NewBook/comment/detail/${commentID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify(comment)
            });
            if (response.ok) {
                alert('更改成功!');
                // 重新获取评论并更新状态
                navigate(`/abstract/${comments.article}`)
            } else {
                alert('錯誤訊息!');
            }
        } catch (error) {
            alert('伺服器有問題!');
        }

    }


    return (
        <div className='landing-background'>
            <Headerr />
            <div className='content'>
                <br />
                <br />
                <h2>編號{comments.pk}之留言</h2>
                <h3>{comments.title}</h3>
                <h4>{comments.text}</h4>
                <button onClick={handleDelete} ><h6>刪除編號{comments.pk}之留言</h6></button>
                <form onSubmit={handleEdit}>
                    <input
                        className='commentTitle'
                        type="commentTitle"
                        name="title"
                        placeholder={comments.title}
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />

                    <br />
                    <br />
                    <textarea
                        className='textarea'
                        name='comment'
                        placeholder={comments.text}
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    >{comments.text}
                    </textarea>
                    <br />
                    <input className='commentButton' type="submit" value='提交啦' />
                    <hr />
                </form>

            </div>
            <div className='landing-back' />
            <Footer />
        </div>
    )
}

export default CommentDetail;