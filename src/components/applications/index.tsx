import { Grid, Typography, Card } from '@material-ui/core';
import { FunctionalComponent, h } from 'preact';
import styles from '../../routes/home/styles.css';

const QR_SIZE = 100;

const playStore = '/assets/images/google-play-badge.png';
const playStoreArabic = '/assets/images/google-play-badge-arabic.png';

const qr1 = '/assets/images/16.jpg';
const qr2 = '/assets/images/17.jpg';
const qr3 = '/assets/images/18.jpg';
const qr4 = '/assets/images/19.jpg';
const qr5 = '/assets/images/20.jpg';
const qr6 = '/assets/images/21.jpg';

const Applications: FunctionalComponent = () => (
  <Card style={{ marginTop: 40, marginBottom: 20 }}>
    <div style={{display: 'flex', backgroundColor: 'rgb(238, 28, 37)', alignItems: 'center', padding: 10, width: '100%', marginBottom: 20}}>
      <Typography  style={{color: '#fff', marginRight: 10}} variant="h5">applications</Typography>
      <Typography className={styles.arabic} style={{ color: '#fff' }} variant="h4">تطبيقات</Typography>
    </div>
    <Grid container justifyContent="space-evenly" style={{marginBottom: 20}}>
      <Grid style={{ textAlign: 'center' }} item xs={12} sm={3} md={3}>
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
      </Grid>
      <Grid  style={{ textAlign: 'center' }} item xs={12} sm={3} md={3}>

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
          </Grid>
      

      <Grid style={{ textAlign: 'center' }} item xs={12} sm={3} md={3}>
  
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
    
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12} sm={3} md={3}>

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
        </Grid>
      <Grid style={{ textAlign: 'center' }} item xs={12} sm={3} md={3}>
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
        </Grid>
        <Grid style={{ textAlign: 'center' }} item xs={12} sm={3} md={3}>
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
          </Grid>
    </Grid>
  </Card>
  );

  export default Applications;
