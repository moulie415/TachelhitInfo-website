import { AppBar, Button, Toolbar} from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import Link from '@material-ui/core/Link';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
      <AppBar position="static">
        <Toolbar>
         <Link  href="/">
           <Button style={{color: '#fff'}}>Home</Button>
                </Link>
                <Link  href="/link1">
                
                   <Button style={{color: '#fff'}}>Link 1</Button>
                </Link>
                <Link  href="/link2">
               
                  <Button style={{color: '#fff'}}>Link 2</Button>
                </Link>
                </Toolbar>
      </AppBar>
    )
};

export default Header;
