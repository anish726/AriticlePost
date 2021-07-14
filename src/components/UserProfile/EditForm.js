import React, { useState, useEffect } from 'react'
import classes from './EditForm.module.css'
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onEdit } from '../../redux/action/indexAction';


const EditForm = () => {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
  const history =  useHistory()
;

    const { id } = useParams();

    const allArticlePost = useSelector(state => state.allArticlePost.allArticlePost)
console.log("allArticlePost***",allArticlePost);
    const dispatch = useDispatch();

    const currentArticle = allArticlePost.find((data) => data.id === parseInt(id))
   
   
    useEffect(() => {
        setTitle(currentArticle.title);
        setArticle(currentArticle.article);

    }, [currentArticle]);

    const info = {
        id: currentArticle.id,
        title: title,
        article: article
    };

    const updatedHandler = (e) => {
        e.preventDefault();

       dispatch(onEdit(info));
       history.push("/Profile")



    }

    return (
        <>
            {currentArticle ?
                <form onSubmit={updatedHandler}>
                    <div className={classes.container}>
                        <label>Username : </label>
                        <input className={classes.input} type="text" value={title} placeholder="Enter Title"
                            onChange={(e) =>
                                setTitle(e.target.value)} />
                        <label>Password : </label>
                        <input  className={classes.input} type="text" value={article} placeholder="Enter Article"
                        onChange={(e) => setArticle(e.target.value)} />
                        <button type="submit">Update</button>


                    </div>
                </form>
                : (
                    <h2>No Article Found</h2>
                )}
        </>
    )
}

export default EditForm
