import React,{useState} from 'react'
import classes from './UserForm.module.css'
import { useDispatch } from 'react-redux';
import onUserDetails from '../../../redux/action/UserDetails';
import { useHistory } from 'react-router-dom';


const UserForm = () => {
    const [ name, setName] = useState('');
    const [ city, setCity] = useState('');
    const [ email, setEmail] = useState('');
    const [ nationality, setNationality] = useState('');
    const [ phone, setPhone] = useState('');
    const [ occupation, setOccupation] = useState('');

    const dispatch = useDispatch(); 
   const history = useHistory();

  const handlerSubmit = (e) =>{
      e.preventDefault();
      const  infoUser = {
        id:Math.floor(Math.random() * 1000),
          name:name,
          city:city,
          email:email,
          nationality:nationality,
          phone:phone,
          occupation:occupation
      }
       dispatch(onUserDetails(infoUser));
       history.push("/Profile")
       
     
    
      
       
 
  }
     

    return (
        <form className={classes.form} onSubmit={handlerSubmit}> 
        
        <div className={classes.formgroup}>
          <label >Name:&emsp;&emsp;</label>
          <input type="text" className={classes.fromControl}
           placeholder="Enter Title" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className={classes.formgroup}>
          <label>City&emsp;&emsp;&emsp; </label>
          <input type="text" value={city} className={classes.fromControl}  placeholder="Enter Artical"
          onChange={(e)=>setCity(e.target.value)}/>
        </div>
        <div className={classes.formgroup}>
          <label >Email&emsp;&emsp;</label>
          <input type="email" className={classes.fromControl}
           placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className={classes.formgroup}>
          <label >Nationality</label>
          <input type="text" className={classes.fromControl}
           placeholder="Enter Nationality"  value={nationality} onChange={(e)=>setNationality(e.target.value)}/>
        </div>
        <div className={classes.formgroup}>
          <label >Occupation</label>
          <input type="text" className={classes.fromControl}
           placeholder="Enter Occupation" value={occupation} onChange={(e)=>setOccupation(e.target.value)}/>
        </div>
        <div className={classes.formgroup}>
          <label>Phone&emsp; &emsp;</label>
          <input type="text" className={classes.fromControl}
           placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        
        <button type="submit" className={classes.btn}>Submit</button>
      </form>
    )
}

export default UserForm
