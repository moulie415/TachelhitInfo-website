import { AppBar, Button, Toolbar} from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import Link from '@material-ui/core/Link';
import styles from './style.css'

const Header: FunctionalComponent = () => {
    return (
      <AppBar position="static">
        <Toolbar>
         <Link  href="/">
           <Button style={{color: '#fff'}}>
              <span class={styles.title}>tachelhit info</span>
              <span class={styles.titleArabic}>تاشلحيت ءينفو</span>
            </Button>
          </Link>        
        </Toolbar>
      </AppBar>
    );
};

export default Header;
