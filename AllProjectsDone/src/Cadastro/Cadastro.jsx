import styles from './Cadastro.module.css'
import '../styles.global.css'


export function Cadastro() {

    return(
    
    <div className={styles.containerCadastro}>
          <div className={styles.cadastro}>
          <h3>Criar conta</h3>
          <form>
            <div className={styles.infos}>
            <label  htmlFor="name"> Nome </label>
            <input className={styles.input} type="text" id="rname" name="name" placeholder="Seu nome" />


            <label  htmlFor="username"> Email </label>
            <input className={styles.input} type="text" id="username" name="username" placeholder="email@gmail.com" />

    
            <label htmlFor="password"> Senha </label>
            <input className={styles.input}type="password" id="password" name="password" placeholder="senha"/>
            </div>
    
            <h6 > ou continue com </h6>
    
                <button className={styles.btnGoogle }type="submit"> Google</button>
    
            <button className={styles.btnGit} type="submit"> Github</button>
    

            <div className={styles.servEpriv}>
            <input type="checkbox" id="termos" name="termos" />
            <label id="termos" >Eu aceito os termos de serviços e politica de privacidade</label> 
            </div>

            
            <button className={styles.btnCadastro }type="submit"> Cadastrar</button>
    
    
            <hr />
            <h6> Já tem uma conta?                    <a className={styles.Log} href="">Login</a>
            </h6>       

    
    
          
          </form>
          </div>
        </ div>
    )
    }