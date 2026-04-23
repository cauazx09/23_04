// imports que o professor vai passar
import { useState,  useEffect} from 'react'
import styles from './Cardapio.module.css'

function Cardapio() {
  //useState que o professor vai passar 

 const [pratos, setPratos] = useState([])



  // useEffect que o professor vai passar
 
useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => response.json())
      .then(data => setPratos(data.meals))
      .catch(error => console.error('Erro ao carregar o cardápio:', error))
  }, [])

 
  // carregamento que o professor vai passar
const [carregando, setCarregando] = useState(true)

useEffect(() => {
  if (pratos.length > 0) {
    setCarregando(false)
  }
}, [pratos])



  return (
    <div className={styles.container}>
      <h1>Cardápio de Frutos do Mar</h1>

      {carregando && <p className={styles.loading}>Carregando...</p>}

      <div className={styles.grid}>
        {pratos.map(item => (
          <div key={item.idMeal} className={styles.card}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cardapio