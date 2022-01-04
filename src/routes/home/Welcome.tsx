import {Typography} from '@material-ui/core';
import {Fragment, FunctionalComponent, h} from 'preact';

const Welcome: FunctionalComponent = () => {
  return (
    <div style={{margin: 10}}>
      <Typography
        style={{
          fontFamily: 'ScheherazadeNew',
          fontSize: 25,
          textAlign: 'center',
        }}>
        اشكيد ا-ݣما ءولا كمّي ا-ولّتما، تكشمت س-تݣمّي-نغ تسونفوت، تافت دارنغ
        رّاحت د-سّلامت، ار-تسفليدت ءي-لخبار ءيفولكين.
      </Typography>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography
          style={{
            fontFamily: 'ScheherazadeNew',
            fontSize: 25,
            border: '1px solid #000',
            padding: 5,
          }}>
          اشكو ءيلّا ديدنغ يان ءيسّيتّين تيكساض د-شّكّ، ءيݣ-اغ غ-لامان ءيدومن.
        </Typography>
      </div>
      <Typography
        style={{
          fontFamily: 'ScheherazadeNew',
          fontSize: 25,
          textAlign: 'center',
        }}>
        ءينّا: «نكّين ايݣان تيفاوت ندّونيت. وانّا ديدي ءيتمونون راداستيلي تيفاوت
        نتودرت، ءورراساريفتّو غتيلّاس.»
      </Typography>
    </div>
  );
};

export default Welcome;
