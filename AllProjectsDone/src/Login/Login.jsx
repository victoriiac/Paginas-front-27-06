import styles from './Login.module.css'
import '../styles.global.css'


export function Login() {

    return(
    
    <div className={styles.containerLogin}>
          <div className={styles.Login}>
          <h3>Login</h3>
          <form>
            <div className={styles.infos}>
            <label  htmlFor="username"> Email: </label>
            <input className={styles.input} type="text" id="username" name="username" placeholder="email@gmail.com" />
    
            <label htmlFor="password"> Senha: </label>
            <input className={styles.input}type="password" id="password" name="password" placeholder="senha"/>
            </div>
    
            <h6 > ou continue com </h6>
    
                <button className={styles.btnGoogle }type="submit"> Google</button>
    
            <button className={styles.btnGit} type="submit"> Github</button>
    

           

            
            <button className={styles.btnLogin }type="submit"> Logar</button>
    
    
                   

    
    
          
          </form>
          </div>
        </ div>
    )
    }