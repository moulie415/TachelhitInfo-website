import {Button, Card, Grid, Typography} from '@material-ui/core';
import {h} from 'preact';

function SecondColumn() {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card
        style={{
          padding: 5,
          marginRight: 10,
          height: '100%',
        }}>
        <div style={{textAlign: 'center'}}>
          <img src="../../assets/images/15.png" height={200} />
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/امودّو ن-ومسيكّل.pdf');
            }}>
            <Typography
              variant="h4"
              style={{
                textTransform: 'none',
                fontFamily: 'Calibri',
                fontSize: 30,
              }}>
              امودّو &nbsp;ن
              <span style={{fontFamily: 'sans-serif'}}>&#8209;</span>
              ومسيݣّل
            </Typography>
          </Button>
        </div>
        <Typography
          style={{
            paddingBottom: 5,
            margin: '0 2%',
            textAlign: 'center',
            fontSize: 22,
            fontFamily: 'Calibri',
            direction: 'rtl',
          }}>
          لقيست &nbsp;ن<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>يان
          &nbsp;ءيݣومّين &nbsp;لهنا &nbsp;د
          <span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تايري &nbsp;د
          <span style={{fontFamily: 'sans-serif'}}>&#8209;</span>سّلامت،
          <br />
          ءيفتو &nbsp;ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>سرسن
          <span style={{fontFamily: 'sans-serif'}}>&#8209;</span>يسيݣّيل
        </Typography>

        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/amuddu-n-umsiggel.pdf');
            }}>
            <Typography variant="h5" style={{textTransform: 'none'}}>
              amuddu n-umsiggel
            </Typography>
          </Button>
        </div>
        <Typography
          style={{paddingBottom: 5, margin: '0 2%', textAlign: 'center'}}>
          lqist-ad, ay-aytma, tga tin yan igummin lhna t-tayri d-sslamt, iftu
          ar-sersn-isiggil.
        </Typography>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/amsiggel-tif.pdf');
            }}>
            <Typography
              variant="h5"
              style={{textTransform: 'none', fontFamily: 'Tifinagh'}}>
              amuddu n-umsiggel
            </Typography>
          </Button>
        </div>
        <Typography
          style={{
            paddingBottom: 5,
            margin: '0 20%',
            fontFamily: 'Tifinagh',
            textAlign: 'center',
          }}>
          lqist n-yan igummin lhna t-tayri d-sslamt, iftu ar-sersn-isiggil.
        </Typography>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/le-voyage-dAmsiggel.pdf');
            }}>
            <Typography variant="h5" style={{textTransform: 'none'}}>
              Le voyage d’Amsiggel
            </Typography>
          </Button>
        </div>
        <Typography
          style={{paddingBottom: 5, margin: '0 2%', textAlign: 'center'}}>
          L’histoire d’un jeune qui désire ardemment la paix, la bonté et la
          sécurité, et qui se met en route à leur recherche.
        </Typography>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/the-seekers-quest.pdf');
            }}>
            <Typography variant="h5" style={{textTransform: 'none'}}>
              The Seeker’s Quest
            </Typography>
          </Button>
        </div>
        <Typography
          style={{paddingBottom: 5, margin: '0 2%', textAlign: 'center'}}>
          A story about a young man who longs for peace, kindness and security,
          and sets out on a journey in search of them.
        </Typography>
      </Card>
    </Grid>
  );
}

export default SecondColumn;
