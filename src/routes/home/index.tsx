import { FunctionalComponent, h } from 'preact';
import AudioPlayer from 'material-ui-audio-player';
import { Button, Grid, Typography } from '@material-ui/core';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useEffect, useState } from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  AZUZD, colors, GODS_STORY, ISEQSITN, LATIN_NT, LATIN_OT, MATSSENT, NTHUNA,
} from '../../constants';
import styles from './styles.css';

const Home: FunctionalComponent = () => {
  const qr1 = '/assets/images/16.jpg';
  const qr2 = '/assets/images/17.jpg';
  const qr3 = '/assets/images/18.jpg';
  const qr4 = '/assets/images/19.jpg';
  const qr5 = '/assets/images/20.jpg';
  const qr6 = '/assets/images/21.jpg';
  const rbbi = '/assets/images/14.jpg';
  const amsiggel = '/assets/images/15.png';
  const playStore = '/assets/images/google-play-badge.png';
  const playStoreArabic = '/assets/images/google-play-badge-arabic.png';
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div style={{
      minHeight: '100%',
      margin: 32,
    }}>
      {ready ? (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>is-tgit amuslem?</Typography>
              <AudioPlayer src={MATSSENT} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>is-tzuzdt laman d-sslamt?</Typography>
              <AudioPlayer src={AZUZD} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>is dark kra n-iseqsitn?</Typography>
              <AudioPlayer src={ISEQSITN} download />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>is-tumnt s-lmasih?</Typography>
              <AudioPlayer src={NTHUNA} download />
            </Grid>
          </Grid>
          <Typography style={{ marginTop: 40, marginBottom: 10 }} variant="h5">awal n-rbbi</Typography>
          <Grid justifyContent="space-evenly" container spacing={2}>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>injil l-lmasih</Typography>

            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>lkhbar ifulkin</Typography>
              <Button>
                <a href={LATIN_NT} target="_blank" rel="noreferrer">
                  <PictureAsPdfIcon style={{ color: colors.red }} fontSize="large" />
                </a>
              </Button>

            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <Typography variant="h6" style={{ marginBottom: 20 }}>arratn l-lanbya</Typography>
              <Button>
                <a href={LATIN_OT} target="_blank" rel="noreferrer" label="latin old testament"><PictureAsPdfIcon style={{ color: colors.red }} fontSize="large" /></a>
              </Button>
            </Grid>
          </Grid>
          <Typography style={{ marginTop: 40, marginBottom: 10 }} variant="h5">videos</Typography>
          <Grid justifyContent="space-evenly" container spacing={2}>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <Typography variant="h6">maylli iqsad rbbi</Typography>
              <video style={{ maxHeight: 200 }} poster={rbbi} controls>
                <source src={GODS_STORY} type="video/mp4" />
              </video>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <Typography variant="h6">amuddu n-umsiggel</Typography>
              <a href="https://www.amsiggel.com/" target="_blank" rel="noreferrer">
                <img style={{ maxHeight: 200 }} src={amsiggel} alt="Amsiggel" />
              </a>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <Typography variant="h6">tudert l-lmasih</Typography>
              <div dangerouslySetInnerHTML={{ __html: '<div class="arc-cont"><iframe src="https://api.arclight.org/videoPlayerUrl?refId=1_507-jf-0-0&apiSessionId=611b7188aaf785.85639629&player=bc.vanilla6&dtm=0&playerStyle=default" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe><style>.arc-cont{position:relative;display:block;margin:10px auto;width:100%}.arc-cont:after{padding-top:59%;display:block;content:""}.arc-cont>iframe{position:absolute;top:0;bottom:0;right:0;left:0;width:98%;height:98%;border:0}</style></div>' }} />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="space-evenly">
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <div>
                <img style={{ margin: 10 }} height={200} width={200} src={qr1} alt="qr code" />
                <Typography variant="h6">awal i-wass</Typography>
                <Typography className={styles.appBody}>
                  ass f-wass
                  rad-ak-ntazn awal imimn
                  gh-warratn n-sidi rbbi.
                  sfeld-as ar-ttzaamt s-rrja ishan.
                </Typography>
                <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday">
                  <img src={playStore} width={200} alt="play store" />
                </a>
              </div>
              <div>
                <img style={{ margin: 10 }} height={200} width={200} src={qr2} alt="qr code" />
                <Typography variant="h6" className={styles.appTitleArabic} >اوال ءيواسّ</Typography>
                <Typography  className={styles.appBodyArabic}>
                  اسّ ف-واسّ
                  راد-اك-نتازن اوال ءيميمن
                  غ-وارّاتن ن-سيدي ربّي.
                  سفلد-اس ار-تّزعامت س-رّجا ءيصحان.
                </Typography>
                <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday.arabic">
                  <img src={playStoreArabic} width={200} alt="play store arabic" />
                </a>
              </div>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <div>
              <img style={{ margin: 10 }} height={200} width={200} src={qr3} alt="qr code" />
              <Typography variant="h6">amuddu n-umsiggel</Typography>
              <Typography className={styles.appBody}>
                lqist n-yan igummin 
                lehna d-tayri d-sslamt,
                iftu ar-sersn-isiggil.
                </Typography>
                <a href="https://play.google.com/store/apps/details?id=com.amsiggel">
                  <img src={playStore} width={200} alt="play store" />
                </a>
                </div>
                <div>
              <img style={{ margin: 10 }} height={200} width={200} src={qr4} alt="qr code" />
              <Typography variant="h6" className={styles.appTitleArabic} >امسيگّل</Typography>
                <Typography  className={styles.appBodyArabic}>
                  لقيست ن-يان ءيگومّين
                  لهنا ت-تايري د-سّلامت،
                  ءيفتو ار-سرسن-يسيگّيل.
                </Typography>
                <a href="https://play.google.com/store/apps/details?id=com.amsiggel.arabic">
                  <img src={playStoreArabic} width={200} alt="play store arabic" />
                </a>
                </div>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
              <div>
                <img style={{ margin: 10 }} height={200} width={200} src={qr5} alt="qr code" />
                <Typography variant="h6">tachelhit info</Typography>
                <Typography  className={styles.appBody}>
                  kchem s-tgmmi-negh tsunfut, 
                  ar-tsflidt i-lkhbar issfrahn, 
                  ar-taqrat iwaliwn mimnin, 
                  ar-tssmuqqult lfidyuwat fulkinin. 
                </Typography>
                <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo">
                  <img src={playStore} width={200} alt="play store" />
                </a>
              </div>
              <div>
                <img style={{ margin: 10 }} height={200} width={200} src={qr6} alt="qr code" />
                <Typography variant="h6" className={styles.appTitleArabic} >تاشلحيت ءينفو</Typography>
                <Typography  className={styles.appBodyArabic}>
                  كشم س-تگمّي-نغ تسونفوت،
                  ار-تسفليدت ءي-لخبار ءيسّفراحن،
                  ار-تاقرات ءيواليون ميمنين،
                  ار-تسّموقولت لفيديوات فولكينين.
                </Typography>
                <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo.arabic">
                  <img src={playStoreArabic} width={200} alt="play store arabic" />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : <div style={{ textAlign: 'center' }}><CircularProgress style={{ textAlign: 'center' }} /></div>}
    </div>
  );
};

export default Home;
