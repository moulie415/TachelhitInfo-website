import {Typography} from '@material-ui/core';
import {Fragment, FunctionalComponent, h} from 'preact';

const Welcome: FunctionalComponent = () => {
  return (
    <Fragment>
      <Typography style={{fontFamily: 'Scheherazade', fontSize: 25, textAlign: 'center'}}>
        اشكيد ا-گما ءولا كمّي ا-ولّتما، تكشمت س-تگمّي-نغ تسونفوت، تافت دارنغ
        رّاحت د-سّلامت، ار-تسفليدت ءي-لخبار ءيفولكين.
      </Typography>
      <Typography style={{fontFamily: 'Scheherazade', fontSize: 25, textAlign: 'center'}}>
        اشكو ءيلّا دارنغ يان ءيسّيتّين تيكساض د-شّكّ، ءيگ-اغ غ-لامان ءيدومن.
      </Typography>
      <Typography style={{fontFamily: 'Scheherazade', fontSize: 25, textAlign: 'center'}}>
        ءينّا: «نكّين ا-يگان تيفاوت ن-دّونيت. وانّا ديدي ءيتمونون راد-اس-تيلي
        تيفاوت ن-تودرت، ءور-را-سار-يفتّو غ-تيلّاس.»
      </Typography>
    </Fragment>
  );
};

export default Welcome;
