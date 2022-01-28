import {Grid, Typography, Card} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {CustomHistory} from 'preact-router';
import {colors} from '../../constants';
import styles from '../../routes/home/styles.css';
import SocialsFooter from '../socialsFooter';

const QR_SIZE = 100;
const GOOGLE_PLAY_SIZE = 50;

const playStore = '/assets/images/google-play-badge.png';
const playStoreArabic = '/assets/images/google-play-badge-arabic.png';

const qr1 = '/assets/images/16.jpg';
const qr2 = '/assets/images/17.jpg';
const qr3 = '/assets/images/18.jpg';
const qr4 = '/assets/images/19.jpg';
const qr5 = '/assets/images/20.jpg';
const qr6 = '/assets/images/21.jpg';

const Applications: FunctionalComponent<{history: CustomHistory}> = ({
  history,
}) => (
  <div
    style={{
      padding: 15,
      backgroundColor: colors.paleTurquoise,
      minHeight: '100vh',
    }}>
    <SocialsFooter history={history} />
    <Card style={{marginTop: 15}}>
      <Grid container justifyContent="space-evenly" style={{padding: 20}}>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr1}
            alt="qr code"
          />
          <Typography variant="h6">awal i<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>wass</Typography>
          <Typography className={styles.appBody}>
            ass f<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>wass rad<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>ak<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>ntazn awal imimn
            gh<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>warratn n<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>sidi rbbi. sfeld<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>as ar<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>ttzaamt
            s<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>rrja ishan.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday">
            <img src={playStore} height={GOOGLE_PLAY_SIZE} alt="play store" />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr2}
            alt="qr code"
          />
          <Typography  className={styles.appTitleArabic}>
            اوال &nbsp;ءي<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>واسّ
          </Typography>
          <Typography className={styles.appBodyArabic}>
            اسّ &nbsp;ف<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>واسّ &nbsp;راد<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>اك<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>نتازن &nbsp;اوال
            &nbsp;ءيميمن &nbsp;غ<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>وارّاتن &nbsp;ن<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>سيدي &nbsp;ربّي.
            &nbsp;سفلد<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>اس &nbsp;ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تّزعامت &nbsp;س<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>رّجا
            &nbsp;ءيصحان.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.wordofgodforeachday.arabic">
            <img
              src={playStoreArabic}
              height={GOOGLE_PLAY_SIZE}
              alt="play store arabic"
            />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr3}
            alt="qr code"
          />
          <Typography variant="h6">amuddu n<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>umsiggel</Typography>
          <Typography className={styles.appBody}>
            lqist n<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>yan igummin lehna d<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>tayri d<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>sslamt, iftu
            ar<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>sersn<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>isiggil.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.amsiggel">
            <img src={playStore} height={GOOGLE_PLAY_SIZE} alt="play store" />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr4}
            alt="qr code"
          />
          <Typography className={styles.appTitleArabic}>
            امودّو &nbsp;ن<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>ومسيݣّل
          </Typography>
          <Typography className={styles.appBodyArabic}>
            لقيست &nbsp;ن<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>يان &nbsp;ءيݣومّين &nbsp;لهنا
            &nbsp;د<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تايري &nbsp;د<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>سّلامت، &nbsp;ءيفتو
            ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>سرسن<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>يسيݣّيل.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.amsiggel.arabic">
            <img
              src={playStoreArabic}
              height={GOOGLE_PLAY_SIZE}
              alt="play store arabic"
            />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr5}
            alt="qr code"
          />
          <Typography variant="h6">tachelhit info</Typography>
          <Typography className={styles.appBody}>
            kchem s<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>tgmmi<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>negh tsunfut, ar<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>tsflidt
            i<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>lkhbar issfrahn, ar<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>taqrat iwaliwn mimnin,
            ar<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>tssmuqqult lfidyuwat fulkinin.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo">
            <img src={playStore} height={GOOGLE_PLAY_SIZE} alt="play store" />
          </a>
        </Grid>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={3} md={2}>
          <img
            style={{margin: 10}}
            height={QR_SIZE}
            width={QR_SIZE}
            src={qr6}
            alt="qr code"
          />
          <Typography className={styles.appTitleArabic}>
            تاشلحيت &nbsp;ءينفو
          </Typography>
          <Typography className={styles.appBodyArabic}>
            كشم &nbsp;س<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تݣمّي<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>نغ &nbsp;تسونفوت،
            &nbsp;ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تسفليدت &nbsp;ءي<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>لخبار &nbsp;ءيسّفراحن،
            ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تاقرات &nbsp;ءيواليون &nbsp;ميمنين،
            &nbsp;ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تسّموقولت &nbsp;لفيديوات &nbsp;فولكينين.
          </Typography>
          <a href="https://play.google.com/store/apps/details?id=com.tachelhitinfo.arabic">
            <img
              src={playStoreArabic}
              height={GOOGLE_PLAY_SIZE}
              alt="play store arabic"
            />
          </a>
        </Grid>
      </Grid>
    </Card>
  </div>
);

export default Applications;
