import React from 'react'
import classes from '../UserDetails/UserDetails.module.css'
import Layout from '../../Layout/Layout'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'



const UserDeatils = (props) => {
    const userDeatails = useSelector(state=>state.userDetails.userDetails)
   console.log("useDeatisl", userDeatails)
    return (
        <>
            <Layout>  
                <img style={{width:'200px',textAlign:'center'}} src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' alt='' />
               <Link to="/User">create form</Link>
                 {userDeatails.length > 0 && userDeatails.map((item,id) => {
                     return(
                        <div className={classes.container} key={item.id}>
                        <div className={classes.wrapper}>
                            <div>
                                <h4 >Name: &emsp;&emsp;{item.name} </h4>
                                <h4 >City: &emsp;&emsp;&emsp;{item.city} </h4>
                            </div>
                            <div><h4 >Country:&emsp;{item.nationality} </h4>
                                <h4 >Emal Id:&emsp;{item.email} </h4>
                            </div>
                            <div><h4 >Occupation: &emsp;{item.occupation}</h4>
                                <h4 >Phone:&emsp;&emsp;{item.phone} </h4>
                            </div>
                       
                        
                        </div>
                    </div> 

                     )
                 })}
              
                
                
            </Layout>



        </>
    )
}

export default UserDeatils
