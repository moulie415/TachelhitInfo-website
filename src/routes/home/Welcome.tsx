import {Typography} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';

const Welcome: FunctionalComponent = () => {
  return (
    <div style={{margin: 10, marginTop: 0}}>
      <Typography
        style={{
          fontFamily: 'Calibri',
          fontSize: 25,
          textAlign: 'center',
        }}>
        اشكيد &nbsp;ا-ݣما &nbsp;ءولا &nbsp;كمّي &nbsp;ا-ولّتما، &nbsp;تكشمت
        &nbsp;س-تݣمّي-نغ تسونفوت، &nbsp;تافت &nbsp;دارنغ رّاحت &nbsp;د-سّلامت،
        &nbsp;ار-تسفليدت &nbsp;ءي-لخبار &nbsp;ءيفولكين
      </Typography>
    </div>
  );
};

export default Welcome;
