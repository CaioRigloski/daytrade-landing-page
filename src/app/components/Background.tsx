import background from '../../../public/background.jpg'
import styles from './background.module.css'

export default function Background() {
  return (
    <div className={styles.background}>
        <div style={{
          background: `100% / cover url(${background.src}) no-repeat`,
          opacity: '50%',
          width: '100vw',
          height: '100vh',
        }}>
      </div>
    </div>
  )
}
