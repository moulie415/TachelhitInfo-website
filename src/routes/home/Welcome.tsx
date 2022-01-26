import {Typography} from '@material-ui/core';
import {FunctionalComponent, h} from 'preact';

const Welcome: FunctionalComponent = () => {
  return (
    <div style={{margin: 10, marginTop: 0}}>
      <Typography
        style={{
          fontFamily: 'ScheherazadeNew',
          fontSize: 25,
          textAlign: 'center',
        }}>
        اشكيد ا-ݣما <span style={{fontFamily: 'Ariel', fontSize: 26}}>ءولا </span>كمّي ا-ولّتما، تكشمت س-تݣمّي-نغ تسونفوت، تافت دارنغ
        رّاحت <span style={{fontFamily: 'Ariel', fontSize: 26}}>د-سّلامت،</span> ار-تسفليدت ءي-لخبار ءيفولكين
      </Typography>
    </div>
  );
};

export default Welcome;
