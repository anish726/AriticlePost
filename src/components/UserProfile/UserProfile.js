import React,{useState} from 'react'
import UserDeatils from './UserDetails/UserDeatils'
import { useSelector, useDispatch } from 'react-redux'
import classes from '../section/Home.module.css'
import { onDelete } from '../../redux/action/UserDetails'
import { Link } from 'react-router-dom'
import Modal from '../UI/Modal'
import UserPostArticle from '../UserProfile/UserPostArticle/UserPostArticle'
import UserPostArticleGet from './UserPostArticleGet/UserPostArticleGet'

const UserProfile = (props) => {

		const [ readMore , setReadMore] = useState(true);
		
    
  const [showModal, setShowModal] = useState(false);

  const usersCrudOperation =  useSelector(state => state.usersCrudOperation.usersCrudOperation)
  console.log("usersCrudOperation it**********************", usersCrudOperation)
const dispatch =  useDispatch();

const toggleModal = () => setShowModal(!showModal);

    return (

            
     <>
      
    <div>
            <UserDeatils /> 
           
           </div>
           <div style={{textAlign:'center', marginLeft:'20%',fontSize:'40px'}}>
      <i  onClick={toggleModal} className="far fa-plus-square" >
          </i>
					   {showModal && <Modal>  <UserPostArticle/>
							 </Modal>}
					
					</div>
                    
             <UserPostArticleGet/>
   
            {usersCrudOperation.map((data,id) =>{
                return(
                    <article className={classes.card} key={data.id}>

                    <div className={classes.titel}>    <i className="fa fa-trash"  onClick={()=>dispatch(onDelete(data.id))}  />
                        <h3>Title:{data.title}</h3>   &emsp; <p>Date:{ new Date().toLocaleDateString()}</p>
                        <p> Article:....{readMore ?  data.article :
                           `${data.article.substring(0, 100)}` }
                           <h5 className={classes.text} onClick={() =>setReadMore(!readMore)}>
                            {readMore ? 'show less' :'read More'}</h5></p>
                            <Link to={`/editForm/${data.id}`}><i className="fa fa-edit"></i></Link>

                            
                             </div>
                    </article>

                )
            })}
    
						<div></div>
       
      </>
    )
}

export default UserProfile
