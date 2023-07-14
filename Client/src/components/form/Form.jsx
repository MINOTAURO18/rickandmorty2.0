import styles from './form.module.css'
import imgForm from '../../assets/img-form.png'
import { useState } from 'react'
import validation from '../validations/validation'


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
     })

     const [errors, setErrors] = useState({
        email: '',
        password: '',
     })

     const handleChange = (e) => {
        let event = e.target.value;

        setUserData({
            ...userData,
            [e.target.name] : event 
        })

        setErrors(validation({
            ...userData,
            [e.target.name]: event
          }))
     }

     const handleSubmit = (event) => {
        event.preventDefault(userData)

        if(!errors.email && !errors.password){
            login(userData)
        }else{
            alert('datos incorrectos')
        }
     }

    return (
        <section className={styles.form}>
            <div className={styles.credenciales}>
                <h3>Credenciales</h3>
                <h4>Email: prueba@gmail.com</h4>
                <h4>Contraseña: prueba1</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <img src={imgForm} alt="" />
                <label>EMAIL</label>
                <input 
                onChange={handleChange}
                value={userData.email}
                type="text"
                name='email'
                 />
                 <p>{errors.email}</p>
                    

                <label >PASSWORD</label>
                <input 
                onChange={handleChange}
                value={userData.password}
                type="password" 
                name='password'
                />
                <p>{errors.password}</p>


               <button className={!errors.email && !errors.password ? styles.buttonTrue : styles.btn}>Ingresar</button>

            </form>
        </section>
    )
}

export default Form;