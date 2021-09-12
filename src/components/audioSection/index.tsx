import { Grid, Typography, Card } from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import AudioPlayer from 'material-ui-audio-player';
import styles from '../../routes/home/styles.css';
import { AZUZD, ISEQSITN, MATSSENT, NTHUNA } from '../../constants';

const AudioSection: FunctionalComponent = () => {
   return (
    <Card style={{padding: 20, paddingBottom: 50}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">is-tgit amuslem?</Typography>
          <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-تگيت اموسلم؟</Typography>
          <AudioPlayer src={MATSSENT} download />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">is-tzuzdt laman d-sslamt?</Typography>
          <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-تژوژضت لامان د-سّلامت؟</Typography>
          <AudioPlayer src={AZUZD} download />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">is dark kra n-iseqsitn?</Typography>
          <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-دارك كرا ن-يسقسيتن؟</Typography>
          <AudioPlayer src={ISEQSITN} download />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">is-tumnt s-lmasih?</Typography>
          <Typography variant="h4" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-تومنت س-لماسيح؟</Typography>
          <AudioPlayer src={NTHUNA} download />
        </Grid>
      </Grid>
    </Card>
  );
}

export default AudioSection;
