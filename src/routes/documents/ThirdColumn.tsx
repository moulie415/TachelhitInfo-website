import {Button, Card, Grid, Typography} from '@material-ui/core';
import {h} from 'preact';

function ThirdColumn() {
  return (
    <Grid item xs={12} sm={3} md={3}>
      <Card
        style={{
          marginBottom: 5,
        }}>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', width: '100%'}}>
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Button
                onClick={() => {
                  window.open('../../assets/pdfs/awal-i-wass-abc.pdf');
                }}>
                <Typography
                  variant="h4"
                  style={{
                    textTransform: 'none',
                    fontFamily: 'Calibri',
                    fontSize: 34,
                  }}>
                  اوال &nbsp;ءي<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>واسّ
                </Typography>
              </Button>
              <Typography
                style={{
                  margin: '0 2%',
                  textAlign: 'center',
                  fontFamily: 'Calibri',
                  fontSize: 24,
                }}>
                اسّ &nbsp;ف<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>واسّ &nbsp;ا<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تاقرات
                &nbsp;يان<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>واوال &nbsp;ءيميمن &nbsp;غ<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>وارّاتن
                &nbsp;ن<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>سيدي &nbsp;ربّي، &nbsp;ار<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>تّزعامت
                &nbsp;س<span style={{fontFamily: 'sans-serif'}}>&#8209;</span>رّجا &nbsp;ءيصحان
              </Typography>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', width: '100%'}}>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Button
              onClick={() => {
                window.open('../../assets/pdfs/awal-i-wass-lat.pdf');
              }}>
              <Typography
                variant="h5"
                style={{textTransform: 'none', fontFamily: 'Tashelhayt'}}>
                awal i-wass
              </Typography>
            </Button>
            <Typography
              style={{
                paddingBottom: 5,
                margin: '2% 2%',
                textAlign: 'center',
                fontFamily: 'Tashelhayt',
              }}>
              ass f-wass a-taqrat yan-wawal imimn å-warratn n-sidi rbbi,
              ar-ttzøamt s-rrja isæan.
            </Typography>
          </div>
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/awal-i-wass-tif.pdf');
            }}>
            <Typography
              variant="h5"
              style={{
                textTransform: 'none',
                fontFamily: 'Tifinagh',
              }}>
              awal i-wass
            </Typography>
          </Button>
        </div>
        <Typography
          style={{
            paddingBottom: 5,
            margin: '2% 2%',
            fontFamily: 'Tifinagh',
            textAlign: 'center',
          }}>
          ass f-wass a-taqrat yan-wawal imimn v-warratn n-sidi rbbi, ar-ttzoamt
          s-rrja ispan.
        </Typography>
      </Card>

      <Card
        style={{
          marginBottom: 5,
        }}>
        <div style={{display: 'flex'}}>
          <a
            onClick={() => window.open('../../assets/pdfs/المرشد.pdf')}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}>
            <img src="../../assets/images/Murshid cover.png" height={150} />
          </a>
          <div
            style={{
              display: 'flex',
              alignItem: 'center',
              justifyContent: 'center',
            }}>
            <Button
              onClick={() => {
                window.open('../../assets/pdfs/المرشد.pdf');
              }}>
              <Typography
                variant="h5"
                style={{
                  textTransform: 'none',
                  fontSize: 28,
                  fontFamily: 'Calibri',
                }}>
                المرشد &nbsp;للإيمان &nbsp;المسيحي &nbsp;والحياة &nbsp;المسيحية
              </Typography>
            </Button>
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: 5,
        }}>
        <div style={{textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/هل أنت مُستَعِدٌّ ؟.pdf');
            }}>
            <Typography
              variant="h5"
              style={{
                textTransform: 'none',
                fontSize: 28,
                fontFamily: 'Calibri',
              }}>
              هل &nbsp;أنت &nbsp;مُستَعِدٌّ &nbsp;؟
            </Typography>
          </Button>
        </div>
      </Card>
      <Card style={{}}>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/الدرّاز.pdf');
            }}>
            <Typography
              variant="h5"
              style={{
                textTransform: 'none',
                fontSize: 28,
                fontFamily: 'Calibri',
              }}>
              حياتي &nbsp;بحال &nbsp;زربية
            </Typography>
          </Button>
        </div>
      </Card>
      <Card
        style={{
          marginTop: 5,
        }}>
        <div style={{width: '100%', textAlign: 'center'}}>
          <Button
            onClick={() => {
              window.open('../../assets/pdfs/دروس من التاريخ.pdf');
            }}>
            <Typography
              variant="h5"
              style={{
                textTransform: 'none',
                fontSize: 28,
                fontFamily: 'Calibri',
              }}>
              المسيحية &nbsp;في &nbsp;شمال &nbsp;إفريقيا: &nbsp;دروس &nbsp;من
              &nbsp;التاريخ
            </Typography>
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

export default ThirdColumn;
