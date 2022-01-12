import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import {Fragment, FunctionalComponent, h} from 'preact';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';
import styles from './style.css';
import {useState} from 'preact/hooks';
import {colors} from '../../constants';

const Header: FunctionalComponent = () => {
  const matches = useMediaQuery('(min-width:800px)');
  const [showMenu, setShowMenu] = useState(false);
  const marginRight = matches ? 30 : 10;
  return (
    <AppBar position="sticky">
      <Toolbar style={{paddingLeft: matches ? undefined : 0}}>
        <Link className={styles.buttonLink} href="/">
          <Button
            style={{marginRight: matches ? 30 : 0}}
            className={styles.buttonLink}>
            <img
              src="/assets/icons/favicon-96x96.png"
              alt="logo"
              width={matches ? 50 : 30}
            />
          </Button>
        </Link>
        <Link href="/" style={{flexGrow: 1}}>
          <Button className={styles.button} style={{color: '#fff', padding: 0}}>
            <div
              style={{marginRight}}
              className={matches ? styles.title : styles.titleSmall}>
              tachelhit info
            </div>
            <div
              style={{fontSize: matches ? 'inherit' : 20, marginRight}}
              className={matches ? styles.titleTif : styles.titleTifSmall}>
              tacelpit infu
            </div>
            <div
              style={{fontSize: matches ? 'inherit' : 20}}
              className={
                matches ? styles.titleArabic : styles.titleArabicSmall
              }>
              تاشلحيت ءينفو
            </div>
          </Button>
        </Link>
        {matches ? (
          <Fragment>
            <Link href="psalms">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>imurign</div>
                <div className={styles.linkArabic}>ءيموريگن</div>
              </Button>
            </Link>
            <Link href="questions">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>iseqsitn</div>
                <div className={styles.linkArabic}>ءيسقسيتن</div>
              </Button>
            </Link>
            <Link href="documents">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>arratn</div>
                <div className={styles.linkArabic}>ارّاتن</div>
              </Button>
            </Link>
            <Link href="applications">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>izdayn</div>
                <div className={styles.linkArabic}>ءيزداين</div>
              </Button>
            </Link>
          </Fragment>
        ) : (
          <IconButton
            style={{zIndex: 9999}}
            onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <CloseIcon style={{color: '#fff', fontSize: 30}} />
            ) : (
              <MenuIcon style={{color: '#fff', fontSize: 30}} />
            )}
          </IconButton>
        )}
      </Toolbar>
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            height: '100vh',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.red,
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: '100vh',
            }}>
            <Link className={styles.buttonLink} href="psalms">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>imurign</div>
                <div className={styles.linkArabic}>ءيموريگن</div>
              </Button>
            </Link>
            <Link className={styles.buttonLink} href="questions">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>iseqsitn</div>
                <div className={styles.linkArabic}>ءيسقسيتن</div>
              </Button>
            </Link>
            <Link className={styles.buttonLink} href="documents">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>arratn</div>
                <div className={styles.linkArabic}>ارّاتن</div>
              </Button>
            </Link>
            <Link className={styles.buttonLink} href="applications">
              <Button
                className={styles.button}
                style={{color: '#fff', display: 'block', padding: '0px 10px'}}>
                <div className={styles.link}>izdayn</div>
                <div className={styles.linkArabic}>ءيزداين</div>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </AppBar>
  );
};

export default Header;
