import { Grid, Typography, Card, Button } from '@material-ui/core';
import { FunctionalComponent, h, RefObject } from 'preact';
import styles from '../../routes/home/styles.css';
import { AZUZD, ISEQSITN, MATSSENT, NTHUNA } from '../../constants';
import { useRef } from 'preact/hooks';

const AudioSection: FunctionalComponent = () => {
  const player1 = useRef<HTMLAudioElement>(null);
  const player2 = useRef<HTMLAudioElement>(null);
  const player3 = useRef<HTMLAudioElement>(null);
  const player4 = useRef<HTMLAudioElement>(null);

  const toggle = (ref: RefObject<HTMLAudioElement | null>) => {
    if (ref.current) {
      ref.current.paused ? ref.current.play() : ref.current.pause();
    }
  }
  
   return (
    <Card style={{padding: 20, paddingBottom: 50}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}  >
          <Button style={{textTransform: 'inherit', display: 'block', margin: 'auto', width: '80%'}} onClick={() => toggle(player1)}>
            <Typography variant="subtitle2">ma-tssent f-walli ra-d-yašk?</Typography>
            <Typography variant="h5" style={{ marginBottom: 20 }} className={styles.arabic}>ما-تسّنت ف-والّي را-د-ياشك؟</Typography>
            <audio style={{width: '100%'}} controls ref={player1}>
              <source src={MATSSENT} type='audio/mpeg' />
            </audio>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button style={{textTransform: 'inherit', display: 'block', margin: 'auto', width: '80%'}} onClick={() => toggle(player2)}>
            <Typography variant="subtitle2">is-tzuzdt laman d-sslamt?</Typography>
            <Typography variant="h5" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-تژوژضت لامان د-سّلامت؟</Typography>
            <audio style={{width: '100%'}} controls ref={player2}>
              <source src={AZUZD} type='audio/mpeg' />
            </audio>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button style={{textTransform: 'inherit', display: 'block', margin: 'auto', width: '80%'}} onClick={() => toggle(player3)}>
            <Typography variant="subtitle2">is dark kra n-iseqsitn?</Typography>
            <Typography variant="h5" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-دارك كرا ن-يسقسيتن؟</Typography>
            <audio style={{width: '100%'}} controls ref={player3}>
              <source src={ISEQSITN} type='audio/mpeg' />
            </audio>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button  style={{textTransform: 'inherit', display: 'block', margin: 'auto', width: '80%'}} onClick={() => toggle(player4)}>
            <Typography variant="subtitle2">is-tumnt s-lmasih?</Typography>
            <Typography variant="h5" style={{ marginBottom: 20 }} className={styles.arabic}>ءيس-تومنت س-لماسيح؟</Typography>
            <audio style={{width: '100%'}} controls ref={player4}>
              <source src={NTHUNA} type='audio/mpeg' />
            </audio>
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AudioSection;
