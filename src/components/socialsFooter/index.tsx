import {FunctionalComponent, h} from 'preact';
import {Button, Grid, Link, Typography} from '@material-ui/core';
import {Email, Facebook, WhatsApp} from '@material-ui/icons';
import {PHONE_NUMBER} from '../../constants';
import {CustomHistory} from 'preact-router';

const SocialsFooter: FunctionalComponent<{history: CustomHistory}> = ({
  history,
}) => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item style={{marginRight: 10, marginLeft: 10}}>
        <Button>
          <Typography style={{textTransform: 'lowercase', marginRight: 5}}>
            facebook
          </Typography>
          <a
            href="https://www.facebook.com/tachelhit.info/"
            target="_blank"
            rel="noreferrer">
            <Facebook style={{color: '#4267B2', fontSize: 50}} />
          </a>
          <Typography style={{marginLeft: 5, fontSize: 20}}>فيسبوك</Typography>
        </Button>
      </Grid>
      <Grid item style={{marginRight: 10, marginLeft: 10}}>
        <Button>
          <Typography style={{textTransform: 'lowercase', marginRight: 5}}>
            whatsapp
          </Typography>
          <a href={`whatsapp://send?phone=${PHONE_NUMBER}`}>
            <WhatsApp style={{color: '#075e54', fontSize: 50}} />
          </a>
          <Typography style={{marginLeft: 5, fontSize: 20}}>واتساب</Typography>
        </Button>
      </Grid>
      <Grid item style={{marginRight: 10, marginLeft: 10}}>
        <Button onClick={() => history.push('Email')}>
          <Typography style={{textTransform: 'lowercase', marginRight: 5}}>
            email
          </Typography>
          <a style={{color: 'inherit'}} href="email">
            <Email style={{fontSize: 50}} />
          </a>
          <Typography style={{marginLeft: 5, fontSize: 20}}>تابرات</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SocialsFooter;
