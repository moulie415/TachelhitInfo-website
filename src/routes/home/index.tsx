import { FunctionalComponent, h } from 'preact';
import {  Grid, Typography, Card } from '@material-ui/core';
import { useEffect, useState } from 'preact/hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Email, Facebook, WhatsApp } from '@material-ui/icons';
import {
  colors, GODS_STORY, PHONE_NUMBER,
} from '../../constants';
import styles from './styles.css';
import AudioSection from '../../components/audioSection';
import BibleSection from '../../components/bibleSection';

const QR_SIZE = 150;

const IS_DEV  = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';


const Home: FunctionalComponent = () => {
  const qr1 = '/assets/images/16.jpg';
  const qr2 = '/assets/images/17.jpg';
  const qr3 = '/assets/images/18.jpg';
  const qr4 = '/assets/images/19.jpg';
  const qr5 = '/assets/images/20.jpg';
  const qr6 = '/assets/images/21.jpg';
  const rbbi = '/assets/images/14.jpg';
  const amsiggel = '/assets/images/15.PNG';
  const jesusFilm = 'assets/images/22.jpg';
  const playStore = '/assets/images/google-play-badge.png';
  const playStoreArabic = '/assets/images/google-play-badge-arabic.png';

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div style={{
      minHeight: '100%',
      padding: 32,
      backgroundColor: '#f2f3f4'
    }}>
      {ready ? (
        <div>
          <AudioSection />
          <BibleSection />

          <Card style={{ marginTop: 40, paddingBottom: 20 }} >
            <div style={{display: 'flex', backgroundColor: 'rgb(238, 28, 37)', alignItems: 'center', padding: 10, width: '100%', marginBottom: 20}}>
              <Typography style={{color: '#fff', marginRight: 10}} variant="h5">videos</Typography>
              <Typography className={styles.arabic} style={{ color: '#fff' }} variant="h4">فيديو</Typography>
            </div>
            <Grid justifyContent="space-evenly" container spacing={2}>
              <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
                <Typography variant="h6">maylli iqsad rbbi</Typography>
                <Typography className={styles.arabic} style={{ marginBottom: 10 }} variant="h4">مايلّي ءيقصاد ربّي</Typography>
                <video style={{ maxHeight: 200 }} poster={rbbi} controls>
                  <source src={GODS_STORY} type="video/mp4" />
                </video>
              </Grid>
              <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
                <Typography variant="h6">amuddu n-umsiggel</Typography>
                <Typography className={styles.arabic} style={{ marginBottom: 10 }} variant="h4">امودّو ن-ومسيگّل</Typography>
                <a href="https://www.amsiggel.com/" target="_blank" rel="noreferrer">
                  <img style={{ maxHeight: 200 }} src={amsiggel} alt="Amsiggel" />
                </a>
              </Grid>
              <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
                <Typography variant="h6">tudert l-lmasih</Typography>
                <Typography className={styles.arabic} style={{ marginBottom: 10 }} variant="h4">تودرت لّماسيح</Typography>
                <a href="https://www.jesusfilm.org/watch/jesus.html/tachelhit.html" target="_blank" rel="noreferrer">
                  <img style={{ maxHeight: 200 }} src={jesusFilm} alt="Jesus Film" />
                </a>
              </Grid>
            </Grid>
          </Card>
          <Card style={{ marginTop: 40, marginBottom: 20 }}>
            <div style={{display: 'flex', backgroundColor: 'rgb(238, 28, 37)', alignItems: 'center', padding: 10, width: '100%', marginBottom: 20}}>
              <Typography  style={{color: '#fff', marginRight: 10}} variant="h5">applications</Typography>
              <Typography className={styles.arabic} style={{ color: '#fff' }} variant="h4">تطبيقات</Typography>
            </div>
            <Grid container spacing={2} justifyContent="space-evenly" style={{marginBottom: 20}}>
              <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
                <div>
                  <img style={{ margin: 10 }} height={QR_SIZE} width={QR_SIZE} src={qr1} alt="qr code" />
                  <Typography variant="h6">awal i-wass</Typography>
                  <Typography className={styles.appBody}>
                    ass f-wass
                    rad-ak-ntazn awal imimn
                    gh-warratn n-sidi rbbi.
                    sfeld-as ar-ttzaamt s-rrja ishan.
                  </Typography>
                  <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday">
                    <img src={playStore} width={QR_SIZE} alt="play store" />
                  </a>
                </div>
                <div>
                  <img style={{ margin: 10 }} height={QR_SIZE} width={QR_SIZE} src={qr2} alt="qr code" />
                  <Typography variant="h6" className={styles.appTitleArabic} >اوال ءيواسّ</Typography>
                  <Typography  className={styles.appBodyArabic}>
                    اسّ ف-واسّ
                    راد-اك-نتازن اوال ءيميمن
                    غ-وارّاتن ن-سيدي ربّي.
                    سفلد-اس ار-تّزعامت س-رّجا ءيصحان.
                  </Typography>
                  <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday.arabic">
                    <img src={playStoreArabic} width={QR_SIZE} alt="play store arabic" />
                  </a>
                </div>
              </Grid>

              <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
                <div>
                <img style={{ margin: 10 }} height={QR_SIZE} width={QR_SIZE} src={qr3} alt="qr code" />
                <Typography variant="h6">amuddu n-umsiggel</Typography>
                <Typography className={styles.appBody}>
                  lqist n-yan igummin 
                  lehna d-tayri d-sslamt,
                  iftu ar-sersn-isiggil.
                  </Typography>
                  <a href="https://play.google.com/store/apps/details?id=com.amsiggel">
                    <img src={playStore} width={QR_SIZE} alt="play store" />
                  </a>
                  </div>
                  <div>
                <img style={{ margin: 10 }} height={QR_SIZE} width={QR_SIZE} src={qr4} alt="qr code" />
                <Typography variant="h6" className={styles.appTitleArabic} >امسيگّل</Typography>
                  <Typography  className={styles.appBodyArabic}>
                    لقيست ن-يان ءيگومّين
                    لهنا ت-تايري د-سّلامت،
                    ءيفتو ار-سرسن-يسيگّيل.
                  </Typography>
                  <a href="https://play.google.com/store/apps/details?id=com.amsiggel.arabic">
                    <img src={playStoreArabic} width={QR_SIZE} alt="play store arabic" />
                  </a>
                  </div>
              </Grid>
              <Grid style={{ textAlign: 'center' }} item xs={12} sm={6} md={3}>
                <div>
                  <img style={{ margin: 10 }} height={QR_SIZE} width={QR_SIZE} src={qr5} alt="qr code" />
                  <Typography variant="h6">tachelhit info</Typography>
                  <Typography  className={styles.appBody}>
                    kchem s-tgmmi-negh tsunfut, 
                    ar-tsflidt i-lkhbar issfrahn, 
                    ar-taqrat iwaliwn mimnin, 
                    ar-tssmuqqult lfidyuwat fulkinin. 
                  </Typography>
                  <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo">
                    <img src={playStore} width={QR_SIZE} alt="play store" />
                  </a>
                </div>
                <div>
                  <img style={{ margin: 10 }} height={QR_SIZE} width={QR_SIZE} src={qr6} alt="qr code" />
                  <Typography variant="h6" className={styles.appTitleArabic} >تاشلحيت ءينفو</Typography>
                  <Typography  className={styles.appBodyArabic}>
                    كشم س-تگمّي-نغ تسونفوت،
                    ار-تسفليدت ءي-لخبار ءيسّفراحن،
                    ار-تاقرات ءيواليون ميمنين،
                    ار-تسّموقولت لفيديوات فولكينين.
                  </Typography>
                  <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo.arabic">
                    <img src={playStoreArabic} width={QR_SIZE} alt="play store arabic" />
                  </a>
                </div>
              </Grid>
            </Grid>
          </Card>
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
        </div>
      ) : <div style={{ textAlign: 'center' }}><CircularProgress style={{ textAlign: 'center' }} /></div>}
    </div>
  );
};

export default Home;
