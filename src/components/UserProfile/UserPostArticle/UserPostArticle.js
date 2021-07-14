import React, { useState } from 'react'
import classes from './UserPostArticle.module.css';
import userPostArticleGet from '../../../redux/action/UserPostArticleSet';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


const UserPostArticle = () => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const titleArticlePostSet = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      article: article
    }
    dispatch(userPostArticleGet(titleArticlePostSet));
      history.push("/Home");   
  }

  return (
    <>

      <form className={classes.form} onSubmit={handlerSubmit} >
        <div className={classes.formgroup}>
          <label >Title:&emsp;</label>
          <input type="text" className={classes.fromControl}
            placeholder="Enter Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={classes.formgroup}>
          <label>Artical: </label>
          <input type="text" name="article" className={classes.fromControl} value={article} placeholder="Enter Artical"
            onChange={(e) => setArticle(e.target.value)} />
        </div>

        <button type="submit" className={classes.btn}>Submit</button>
      </form>
    </>
  )
}

export default UserPostArticle
