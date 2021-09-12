import { FunctionalComponent, h } from 'preact';
import {  Grid } from '@material-ui/core';
import { Email, Facebook, WhatsApp } from '@material-ui/icons';
import { PHONE_NUMBER } from '../../constants';



const SocialsFooter: FunctionalComponent = () => {
  return (
    <Grid  style={{marginBottom: 20}} container alignItems="center" justifyContent="center" spacing={3}>
      <Grid item>
      <a href="https://www.facebook.com/tachelhit.info/" target="_blank" rel="noreferrer">
        <Facebook style={{color: '#4267B2'}} fontSize="large" />
        </a>
        </Grid>
        <Grid item>
          <a href={`whatsapp://send?phone=${PHONE_NUMBER}`}> 
        <WhatsApp style={{color: '#075e54'}}  fontSize="large" />
        </a>
        </Grid>
        <Grid item>
          <a style={{color: 'inherit'}} href="mailto:RD113267@swissmail.org">
            <Email fontSize="large" />
          </a>
        </Grid>
    </Grid>

  );
};

export default SocialsFooter;
