import { useState,  useEffect} from 'react'
import styles from './Desafio.module.css'

export function Desafio() {
  const [senha, setSenha] = useState('')
  const [tentativas, setTentativas] = useState(0)
  const [bloqueado, setBloqueado] = useState(false)

  // 1. Efeito de Inicialização
  useEffect(() => {
    alert("Sistema de Login Iniciado")
  }, [])

  // 2. Efeito de Validação em Tempo Real
  
useEffect(() => {
      if (senha === "ADMIN123") {
        alert("Acesso Permitido")
      }
    }, [senha])

  // 3. Efeito de Bloqueio
  
 useEffect(() => {
      if (bloqueado) {
        alert("SISTEMA TRAVADO")
      }
    }, [bloqueado])

  function validarAcesso() {
    if (senha !== "ADMIN123") {
      setTentativas(prev => prev + 1)
      alert(`Tentativa ${tentativas + 1}: Acesso Negado`)
      
    }
  }
  

  return (
    <div className={styles.corpo}>
      <div className={styles.terminal}>
        <h1 className={styles.titulo}>SECURITY LOGIN</h1>
        
        <p className={styles.status}>
          Tentativas de erro: <span className={styles.erro}>{tentativas} / 3</span>
        </p>

        <input
          type="password" 
          placeholder="Digite a senha de acesso..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={bloqueado}
          className={styles.inputSenha}
        />

        <button 
          onClick={validarAcesso} 
          disabled={bloqueado}
          className={styles.botao}
        >
          {bloqueado ? "SISTEMA TRAVADO" : "TENTAR ACESSO"}
        </button>

        {bloqueado && (
          <p className={styles.aviso}>Contate o administrador do sistema.</p>
        )}
      </div>
    </div>
  )
}