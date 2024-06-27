import styles from './EditProjeto.module.css'


export function ProjetoEdit(){
    return(
        <div>
      <div >
          <div className={styles.projectName}>
          <h2>Nome do Projeto</h2>
          <h3>Status do Projeto</h3>
          <h3>Prioridade do Projeto</h3>

         </div>
         
         <hr />
         <div className={styles.projectDescription}>
         <h4>Descrição do Projeto:</h4>
         </div>

         <div className={styles.datas}>
          <h4>Data de Início:</h4>
          <h4>Data de Conclusão:</h4>
         </div>

         <hr />

         <div className={styles.atribuido}>
          <h4>Atribuído a:</h4>
         </div>

       
      </div>


      </div>
    )
}