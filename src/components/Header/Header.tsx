import styles from './header.module.css'
import imgIcon from '../../assets/rocket.svg'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={imgIcon} alt="Logo da aplicacao" />
                    <h1>to<span>do</span></h1>
                </div>
            </header>

        </>
    )
}