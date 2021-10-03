import {Button, Card, Grid, Typography} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import styles from '../../routes/home/styles.css';

function Psalms() {
  return (
    <div
      style={{
        minHeight: '100%',
        padding: 32,
      }}>
      <Card style={{marginTop: 40, marginBottom: 20}}>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgb(238, 28, 37)',
            alignItems: 'center',
            padding: 10,
            width: '100%',
            marginBottom: 20,
            justifyContent: 'center',
          }}>
          <Typography style={{marginRight: 10, color: '#fff'}} variant="h5">
            imurign
          </Typography>
          <Typography
            className={styles.arabic}
            style={{color: '#fff'}}
            variant="h4">
            ءيموريگن
          </Typography>
        </div>
        <Grid justifyContent="center" container>
          <Grid item xs={12} sm={4}>
            <Button
              onClick={() => 0}
              style={{marginBottom: 20, textTransform: 'inherit', flex: 1}}>
              <Typography variant="h6">imurign i-sidi rbbi</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button onClick={() => 0} style={{marginBottom: 20, flex: 1}}>
              <Typography variant="h6" className={styles.tifinagh}>
                imurign i-sidi rbbi
              </Typography>
            </Button>
          </Grid>
          <Grid>
            <Button onClick={() => 0} style={{marginBottom: 20, flex: 1}}>
              <Typography variant="h4" className={styles.arabic}>
                لخبار ءيفولكين
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Psalms;
