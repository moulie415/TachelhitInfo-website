import {Button, Card, Grid, Typography, useMediaQuery} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';
import {useState} from 'preact/hooks';
import Modal from 'react-modal';
import SocialsFooter from '../../components/socialsFooter';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
  },
  overlay: {
    zIndex: 9999,
  },
};

function Documents() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');
  const matches = useMediaQuery('(min-width:600px)');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      style={{
        minHeight: '100%',
        padding: 32,
      }}>
      <Grid container style={{marginBottom: 20}}>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            style={{
              padding: 20,
              marginRight: 10,
              height: '100%',
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/التراث المسيحي.pdf');
                  openModal();
                }}>
                <Typography variant="h5">
                  التراث المسيحي في شمال إفريقيا
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              في كثير من أجزاء شمال إفريقيا توجد أطلال بنايات مسيحية عريقة. ترى
              ماذا نعرف عن الحضارة المتقدِّمة والدِّين المتطور الذين تشهد لهما
              هذه الآثار؟ وعلى رفوف خزاناتنا كتابات علماء مسيحيين من شمال
              إفريقيا كأُغسطينوس وكبريانوس وترتوليانوس. ترى بماذا كان أسلافنا
              هؤلاء يؤمنون؟
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/afrique-du-nord.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  L'héritage chrétien en Afrique du Nord
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              Dans bien des régions de l’Afrique du Nord subsistent des ruines
              d’anciens édifices chrétiens. Que savons-nous de la civilisation
              complexe et la religion élaborée dont témoignent si clairement ces
              restes ? Sur les rayons de nos bibliothèques nous rencontrons bon
              nombre d’œuvres écrites par des savants nord-africains tels
              Augustin, Cyprien et Tertullien.  Quelles étaient les croyances de
              nos célèbres ancêtres ? Ce livre fascinant nous éclaire sur
              une partie fondamentale de notre héritage culturel et religieux.
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/this-holy-seed.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  This Holy Seed
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              One of the great centres of evangelical Christianity in the age
              after the apostles, NORTH AFRICA has become “the land of the
              vanished church”. Four hundred years of dramatic Christian growth
              gave way to slow decay and death. What were the secrets of
              success? And what were the eventual causes of failure?
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            style={{
              padding: 20,
              marginLeft: 10,
              height: '100%',
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/امودّو ن-ومسيكّل.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  امودّو نومسيگّل
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              لقيست-اد، اي-ايتما، تگا تين يان ءيگومّين لهنا ت-تايري د-سّلامت،
              ءيفتو ار-سرسن-يسيگّيل
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/amuddu-n-umsiggel.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  amuddu n-umsiggel
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              lqist-ad, ay-aytma, tga tin yan igummin lhna t-tayri d-sslamt,
              iftu ar-sersn-isiggil.
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/amuddu-n-umsiggel.pdf');
                  openModal();
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
                paddingBottom: 20,
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
                  setPdfSrc('../../assets/pdfs/le-voyage-dAmsiggel.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  Le voyage d’Amsiggel
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              L’histoire d’un jeune qui désire ardemment la paix, la bonté et la
              sécurité, et qui se met en route à leur recherche.
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/the-seekers-quest.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  The Seeker’s Quest
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              A story about a young man who longs for peace, kindness and
              security, and sets out on a journey in search of them.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            style={{
              padding: 20,
              marginRight: 10,
              height: '100%',
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/awal-i-wass-abc.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  اوال ءي-واسّ
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              اوال نربّي ءيكرايگاتّ اسّ
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/awal-i-wass-lat.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  awal i-wass
                </Typography>
              </Button>
            </div>
            <Typography
              style={{paddingBottom: 20, margin: '0 20%', textAlign: 'center'}}>
              awal nrbbi ikraygatt ass
            </Typography>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/awal-i-wass-tif.pdf');
                  openModal();
                }}>
                <Typography
                  variant="h5"
                  style={{textTransform: 'none', fontFamily: 'Tifinagh'}}>
                  awal i-wass
                </Typography>
              </Button>
            </div>
            <Typography
              style={{
                paddingBottom: 20,
                margin: '0 20%',
                fontFamily: 'Tifinagh',
                textAlign: 'center',
              }}>
              awal nrbbi ikraygatt ass
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            style={{
              padding: 20,
              marginLeft: 10,
              height: '100%',
            }}>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/المرشد.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  المرشد للإيمان المسيحي والحياة المسيحية
                </Typography>
              </Button>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/هل أنت مُستَعِدٌّ ؟.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  هل أنت مُستَعِدٌّ ؟
                </Typography>
              </Button>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/دروس من التاريخ.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  المسيحية في شمال إفريقيا: دروس من التاريخ
                </Typography>
              </Button>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/taalim-el-kitab.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  taølim el-kitâb el-mqaddas
                </Typography>
              </Button>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
              <Button
                onClick={() => {
                  setPdfSrc('../../assets/pdfs/حياتي بحال زربية.pdf');
                  openModal();
                }}>
                <Typography variant="h5" style={{textTransform: 'none'}}>
                  حياتي بحال زربية
                </Typography>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf modal">
        <div style={{height: matches ? '80vh' : '30vh'}}>
          <iframe src={pdfSrc} width="100%" height="100%" />
        </div>
      </Modal>
    </div>
  );
}

export default Documents;
