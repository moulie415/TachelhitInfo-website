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
        اشكيد ا-ݣما ءولا كمّي ا-ولّتما، تكشمت س-تݣمّي-نغ تسونفوت، تافت دارنغ
        رّاحت د-سّلامت، ار-تسفليدت ءي-لخبار ءيفولكين
      </Typography>
    </div>
  );
};

export default Welcome;
