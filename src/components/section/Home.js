import React, { useState } from 'react'
import classes from './Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { onSave } from '../../redux/action/UserDetails';
import UserPostArticleGet from '../UserProfile/UserPostArticleGet/UserPostArticleGet';

const Home = () => {
    const [readMore ,setReadMore] = useState(false);
    
 
    const allArticlePost = useSelector(state => state.allArticlePost.allArticlePost);
    console.log(allArticlePost, "hey all");
    const dispatch = useDispatch();

  
    return (
        <>
          <UserPostArticleGet/>
            {allArticlePost?.map((item, id) => {
                return (
                    <article className={classes.card} key={item.id}>

                        <div className={classes.title}>
                            <i  className="fa fa-save" onClick={() => dispatch(onSave(item))} />
                            <h3>Title:{item.title}</h3>   &emsp; <p>Date:{new Date().toLocaleDateString()}</p>
                            <p> Article:....{readMore ?  item.article :
                           `${item.article.substring(0, 100)}` }
                           <h3 className={classes.text} onClick={() =>setReadMore(!readMore)}>
                            {readMore ? 'show less' :'read More'}</h3></p>

                        </div>
                    </article>
                )
            })}
            {/*         
        <article className={classes.card}>
            <div className={classes.titel}>
    <h3>Title:India  </h3>   &emsp; <p>Date:{ new Date().toLocaleDateString()}</p>
                <p>India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[23] is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives;
                     its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.</p>
                     </div>
        </article> */}








        </>
    )
}

export default Home
