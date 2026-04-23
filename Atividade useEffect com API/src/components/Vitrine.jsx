import { useState, useEffect } from 'react'
import styles from './Vitrine.module.css'

export default function Vitrine() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then(res => res.json())
      .then(data => {
        setProdutos(data.products)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
        <p>Buscando produtos selecionados...</p>
      </div>
    )
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.subtitle}>Tendências 2026</span>
        <h1 className={styles.tituloMain}>Coleção Premium</h1>
        <div className={styles.linha}></div>
      </header>

      <section className={styles.grid}>
        {produtos.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.thumbnail} alt={item.title} className={styles.foto} />
              <span className={styles.category}>{item.category}</span>
            </div>
            
            <div className={styles.info}>
              <h3 className={styles.produtoNome}>{item.title}</h3>
              <p className={styles.descricao}>{item.description.substring(0, 60)}...</p>
              
              <div className={styles.footerCard}>
                <div className={styles.precoContainer}>
                  <span className={styles.cifra}>R$</span>
                  <span className={styles.valor}>{item.price}</span>
                </div>
                <button className={styles.botao}>Adicionar</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}