import Container from "../../common/Container"
import Menu from "../../common/Menu"
import styles from "./Footer.module.css"
import logo from "../../../assets/images/logo.svg"
import SocialMenu from "../../common/SocialMenu"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container spaced={true}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__navigation1}>
            <div className={styles.footer__logo}>
              <a href="#">
                <img src={logo} alt="Loopstudios" />
              </a>
            </div>

            <nav className={styles.footer__menu}>
              <Menu menuClassName={styles.footer__menuList} />
            </nav>
          </div>

          <div className={styles.footer__navigation2}>
            <nav className={styles.footer__social}>
              <SocialMenu />
            </nav>

            <p className={styles.footer__rights}>
              © {(new Date()).getFullYear()} Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </Container>

      <div className={styles.footer__attribution}>
      </div>
    </footer>
  )
}

export default Footer
