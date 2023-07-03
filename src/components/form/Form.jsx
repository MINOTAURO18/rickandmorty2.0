import styles from './form.module.css'
import imgForm from '../../assets/img-form.png'
import { useState } from 'react'

const Form = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
     })

     const handleChange = (e) => {
        let event = e.target.value;

        setUserData({
            ...userData,
            [e.target.name] : event
        })
     }

    return (
        <section className={styles.form}>
            <form>
                <img src={imgForm} alt="" />
                <label htmlFor="">EMAIL</label>
                <input 
                onChange={handleChange}
                value={userData.email}
                type="text"
                 />
                    

                <label htmlFor="">PASSWORD</label>
                <input 
                onChange={handleChange}
                value={userData.password}
                type="password" 
                />

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Form;