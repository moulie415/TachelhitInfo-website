import { FunctionalComponent, h } from 'preact';
import {  Button, Grid } from '@material-ui/core';
import { Email, Facebook, WhatsApp } from '@material-ui/icons';
import { PHONE_NUMBER } from '../../constants';



const SocialsFooter: FunctionalComponent = () => {
  return (
    <Grid  style={{marginBottom: 20}} container alignItems="center" justifyContent="center" spacing={3}>
      <Grid item>
        <Button>
          <a href="https://www.facebook.com/tachelhit.info/" target="_blank" rel="noreferrer">
            <Facebook style={{color: '#4267B2', fontSize: 50}}/>
          </a>
        </Button>
        </Grid>
        <Grid item>
          <Button>
            <a href={`whatsapp://send?phone=${PHONE_NUMBER}`}> 
              <WhatsApp style={{color: '#075e54', fontSize: 50}} />
            </a>
          </Button>
        </Grid>
        <Grid item>
           <Button>
              <a style={{color: 'inherit'}} href="mailto:RD113267@swissmail.org">
                <Email style={{fontSize: 50}} />
              </a>
          </Button>
        </Grid>
    </Grid>

  );
};

export default SocialsFooter;
