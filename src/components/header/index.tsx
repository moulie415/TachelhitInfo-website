import {AppBar, Button, Toolbar} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import Link from '@material-ui/core/Link';
import styles from './style.css';

const Header: FunctionalComponent = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Link href="/">
        <Button>
          <img src="/assets/icons/favicon-96x96.png" alt="logo" width={50} />
        </Button>
      </Link>
      <Link href="/" style={{flexGrow: 1}}>
        <Button style={{color: '#fff', padding: 0}}>
          <div className={styles.title}>tachelhit info</div>
          <div className={styles.titleTif}>tacelhit</div>
          <div className={styles.titleArabic}>تاشلحيت ءينفو</div>
        </Button>
      </Link>
      <Link href="psalms">
        <Button style={{color: '#fff', display: 'block', padding: 0}}>
          <div className={styles.link}>imurign</div>
          <div className={styles.linkArabic}>ءيموريگن</div>
        </Button>
      </Link>
      <Link href="questions">
        <Button style={{color: '#fff', display: 'block'}}>
          <div className={styles.link}>iseqsitn</div>
          <div className={styles.linkArabic}>ءيسقسيتن</div>
        </Button>
      </Link>
      <Link href="documents">
        <Button style={{color: '#fff', display: 'block', padding: 0}}>
          <div className={styles.link}>arratn</div>
          <div className={styles.linkArabic}>ارّاتن</div>
        </Button>
      </Link>
      <Link href="applications">
        <Button style={{color: '#fff', display: 'block', padding: 0}}>
          <div className={styles.link}>izdayn</div>
          <div className={styles.linkArabic}>ءيزداين</div>
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
