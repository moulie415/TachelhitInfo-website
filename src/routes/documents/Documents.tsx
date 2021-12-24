import {Button, Card, Grid, Typography, useMediaQuery} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';

function Documents() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 10,
      }}>
      <Grid container style={{marginBottom: 20}}>
        <Grid item xs={12} sm={5} md={5}>
          <Card
            style={{
              padding: 5,
              marginRight: 10,
              height: '100%',
            }}>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'flex',
              }}>
              <div>
                <Button
                  onClick={() => {
                    window.open('../../assets/pdfs/التراث المسيحي.pdf');
                  }}>
                  <Typography variant="h5">
                    التراث المسيحي في شمال إفريقيا
                  </Typography>
                </Button>
                <Typography
                  style={{
                    paddingBottom: 20,
                    textAlign: 'center',
                    marginLeft: '5%',
                    fontSize: 20,
                  }}>
                  في كثير من أجزاء شمال إفريقيا توجد أطلال بنايات مسيحية عريقة.
                  ترى ماذا نعرف عن الحضارة المتقدِّمة والدِّين المتطور الذين
                  تشهد لهما هذه الآثار؟ وعلى رفوف خزاناتنا كتابات علماء مسيحيين
                  من شمال إفريقيا كأُغسطينوس وكبريانوس وترتوليانوس. ترى بماذا
                  كان أسلافنا هؤلاء يؤمنون؟
                </Typography>
              </div>
              <a
                onClick={() =>
                  window.open('../../assets/pdfs/التراث المسيحي.pdf')
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 2%',
                  cursor: 'pointer',
                }}>
                <img src="../../assets/images/13.png" height={150} />
              </a>
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'flex',
              }}>
              <div>
                <Button
                  onClick={() => {
                    window.open('../../assets/pdfs/afrique-du-nord.pdf');
                  }}>
                  <Typography variant="h6" style={{textTransform: 'none'}}>
                    L'héritage chrétien en Afrique du Nord
                  </Typography>
                </Button>

                <Typography
                  style={{
                    paddingBottom: 20,
                    textAlign: 'center',
                    marginLeft: '5%',
                    fontSize: 14,
                  }}>
                  Dans bien des régions de l’Afrique du Nord subsistent des
                  ruines d’anciens édifices chrétiens. Que savons-nous de la
                  civilisation complexe et la religion élaborée dont témoignent
                  si clairement ces restes ? Sur les rayons de nos bibliothèques
                  nous rencontrons bon nombre d’œuvres écrites par des savants
                  nord-africains tels Augustin, Cyprien et Tertullien.  Quelles
                  étaient les croyances de nos célèbres ancêtres ? Ce livre
                  fascinant nous éclaire sur une partie fondamentale de notre
                  héritage culturel et religieux.
                </Typography>
              </div>
              <a
                onClick={() =>
                  window.open('../../assets/pdfs/afrique-du-nord.pdf')
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 2%',
                  cursor: 'pointer',
                }}>
                <img src="../../assets/images/L'heritage.png" height={150} />
              </a>
            </div>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'flex',
              }}>
              <div>
                <Button
                  onClick={() => {
                    window.open('../../assets/pdfs/this-holy-seed.pdf');
                  }}>
                  <Typography variant="h6" style={{textTransform: 'none'}}>
                    This Holy Seed
                  </Typography>
                </Button>

                <Typography
                  style={{
                    paddingBottom: 20,
                    marginLeft: '5%',
                    textAlign: 'center',
                    fontSize: 14,
                  }}>
                  One of the great centres of evangelical Christianity in the
                  age after the apostles, NORTH AFRICA has become “the land of
                  the vanished church”. Four hundred years of dramatic Christian
                  growth gave way to slow decay and death. What were the secrets
                  of success? And what were the eventual causes of failure?
                </Typography>
              </div>
              <a
                onClick={() =>
                  window.open('../../assets/pdfs/this-holy-seed.pdf')
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 2%',
                  cursor: 'pointer',
                }}>
                <img src="../../assets/images/THS png.png" height={150} />
              </a>
            </div>
          </Card>
        </Grid>
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
                  style={{textTransform: 'none', fontFamily: 'Scheherazade'}}>
                  امودّو نومسيگّل
                </Typography>
              </Button>
            </div>
            <Typography
              style={{
                paddingBottom: 10,
                margin: '0 2%',
                textAlign: 'center',
                fontSize: 23,
                fontFamily: 'Scheherazade',
              }}>
              لقيست-اد، اي-ايتما، تگا تين يان ءيگومّين لهنا ت-تايري د-سّلامت،
              ءيفتو ار-سرسن-يسيگّيل
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
              style={{paddingBottom: 10, margin: '0 2%', textAlign: 'center'}}>
              lqist-ad, ay-aytma, tga tin yan igummin lhna t-tayri d-sslamt,
              iftu ar-sersn-isiggil.
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
                paddingBottom: 10,
                margin: '0 20%',
                fontFamily: 'Tifinagh',
                textAlign: 'center',
              }}>
              lqist-ad, ay-aytma, tga tin yan igummin lhna t-tayri d-sslamt,
              iftu ar-sersn-isiggil.
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
              style={{paddingBottom: 10, margin: '0 2%', textAlign: 'center'}}>
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
              style={{paddingBottom: 10, margin: '0 2%', textAlign: 'center'}}>
              A story about a young man who longs for peace, kindness and
              security, and sets out on a journey in search of them.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Card
            style={{
              padding: 5,
              marginBottom: 10,
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
                      }}>
                      اوال ءي-واسّ
                    </Typography>
                  </Button>
                  <Typography
                    style={{
                      margin: '0 2%',
                      textAlign: 'center',
                      fontFamily: 'Scheherazade',
                      fontSize: 20,
                    }}>
                    اسّ ف-واسّ ا-تاقرات يان-واوال ءيميمن غ-وارّاتن ن-سيدي ربّي،
                    ار-تّزعامت س-رّجا ءيصحان. ار-تسفليد ولا تمغارت د-تاروا،
                    ار-كولّو-تّفراحم ءي-نگراتون س-تايري ن-ربّي.
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
                    paddingBottom: 10,
                    margin: '2% 2%',
                    textAlign: 'center',
                    fontFamily: 'Tashelhayt',
                  }}>
                  ass f-wass a-taqrat yan-wawal imimn å-warratn n-sidi rbbi,
                  ar-ttzøamt s-rrja isæan. ar-tsflid ula tmåart d-tarwa
                  ar-kullu-ttfraæm i-ngratun s-tayri n-rbbi.
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
                paddingBottom: 10,
                margin: '2% 2%',
                fontFamily: 'Tifinagh',
                textAlign: 'center',
              }}>
              ass f-wass a-taqrat yan-wawal imimn v-warratn n-sidi rbbi,
              ar-ttzoamt s-rrja ispan. ar-tsflid ula tmvart d-tarwa
              ar-kullu-ttfrapm i-ngratun s-tayri n-rbbi.
            </Typography>
          </Card>

          <Card
            style={{
              padding: 5,
              marginBottom: 10,
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
                  <Typography variant="h5" style={{textTransform: 'none'}}>
                    المرشد للإيمان المسيحي والحياة المسيحية
                  </Typography>
                </Button>
              </div>
            </div>
          </Card>
          <Card
            style={{
              padding: 5,
              marginBottom: 10,
            }}>
            <div style={{textAlign: 'center'}}>
              <Button
                onClick={() => {
                  window.open('../../assets/pdfs/هل أنت مُستَعِدٌّ ؟.pdf');
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  هل أنت مُستَعِدٌّ ؟
                </Typography>
              </Button>
            </div>
          </Card>
          <Card
            style={{
              padding: 5,
              marginBottom: 10,
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  window.open('../../assets/pdfs/دروس من التاريخ.pdf');
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  المسيحية في شمال إفريقيا: دروس من التاريخ
                </Typography>
              </Button>
            </div>
          </Card>
          <Card
            style={{
              padding: 5,
              marginBottom: 10,
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  window.open('../../assets/pdfs/taalim-el-kitab.pdf');
                }}>
                <Typography
                  variant="h5"
                  style={{textTransform: 'none', fontFamily: 'Tashelhayt'}}>
                  taølim el-kitâb el-mqaddas
                </Typography>
              </Button>
            </div>
          </Card>
          <Card
            style={{
              padding: 5,
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  window.open('../../assets/pdfs/الدرّاز.pdf');
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  حياتي بحال زربية
                </Typography>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Documents;
