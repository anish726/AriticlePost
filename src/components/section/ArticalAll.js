import React,{ useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import getArtical from '../../redux/action/indexAction';




const ArticalAll = () => {

 const dispatch = useDispatch();
 const feed = useSelector(state => state.artical.artical);
   

  useEffect(() =>{
      dispatch(getArtical())
    //   fetch(URL,{
    //       method:"GET"
    //   })
    //   .then(response => response.json())
    //   .then((data) => setFeed(data))
    //   .catch((error) => {throw error
    //   })

 
  },[dispatch])


    return (
      
        <section>
            {feed.length > 0  &&  feed.map((item,id) =>{
                return(
               <div key={id}>
                   <div>
                       <h3>{item.title}</h3>
                       <div>
                       <h5>{item.body}</h5>
                       </div>
                   </div>

               </div>

                )
            })}
        </section>
    )
}

export default ArticalAll
