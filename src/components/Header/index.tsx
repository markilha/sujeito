import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/coruja.png';

import { ActiveLink } from '../ActiveLink'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>
                    <Image width={100} height={70} src={logo} alt="Professora Erica Madalena" />
                    </a>
                 
                </ActiveLink>

                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Conteúdos</a>
                    </ActiveLink>

                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Quem somos?</a>
                    </ActiveLink>
                </nav>

                <a className={styles.readyButton} type="button" href="https://www.youtube.com/user/m4lm31d44nt0n10/videos">COMEÇAR</a>
            </div>
        </header>
    )
}