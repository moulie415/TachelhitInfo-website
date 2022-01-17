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
                    fontFamily: 'Scheherazade',
                    fontSize: 36,
                  }}>
                  اوال ءي-واسّ
                </Typography>
              </Button>
              <Typography
                style={{
                  margin: '0 2%',
                  textAlign: 'center',
                  fontFamily: 'Scheherazade',
                  fontSize: 26,
                }}>
                اسّ ف&#8209;واسّ ا&#8209;تاقرات يان&#8209;واوال ءيميمن
                غ&#8209;وارّاتن ن&#8209;سيدي ربّي، ار&#8209;تّزعامت س&#8209;رّجا
                ءيصحان
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
                style={{textTransform: 'none', fontSize: 30}}>
                المرشد للإيمان المسيحي والحياة المسيحية
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
              style={{textTransform: 'none', fontSize: 30}}>
              هل أنت مُستَعِدٌّ ؟
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
              style={{textTransform: 'none', fontSize: 30}}>
              حياتي بحال زربية
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
              style={{textTransform: 'none', fontSize: 30}}>
              المسيحية في شمال إفريقيا: دروس من التاريخ
            </Typography>
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

export default ThirdColumn;
