import { AppBar, Button, Toolbar} from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import Link from '@material-ui/core/Link';
import styles from './style.css';

const Header: FunctionalComponent = () => (
      <AppBar position="static">
        <Toolbar>
         <Link  href="/">
           <Button style={{color: '#fff'}}>
              <span className={styles.title}>tachelhit info</span>
              <span className={styles.titleArabic}>تاشلحيت ءينفو</span>
            </Button>
          </Link>        
        </Toolbar>
      </AppBar>
    );

export default Header;
