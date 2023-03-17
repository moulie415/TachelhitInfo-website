import {Grid, Typography, Button, useMediaQuery} from '@material-ui/core';
import {FunctionalComponent, h, RefObject} from 'preact';
import {AZUZD, ISEQSITN, MATSSENT, NTHUNA} from '../../constants';
import {useRef, useState} from 'preact/hooks';
import AudioItem from './AudioItem';

const AudioSection: FunctionalComponent = () => {
  const player1 = useRef<HTMLAudioElement>(null);
  const player2 = useRef<HTMLAudioElement>(null);
  const player3 = useRef<HTMLAudioElement>(null);
  const player4 = useRef<HTMLAudioElement>(null);
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <Grid
      item
      xs={12}
      sm={matches ? 4 : 12}
      md={4}
      style={{marginTop: matches ? 0 : 10}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
          flex: 1,
          marginLeft: '2vw',
        }}>
        <AudioItem player={player1} src={MATSSENT} title="ما-تسّنت &nbsp;ف-والّي&nbsp; را-د-ياشك؟"/>
        <AudioItem player={player2} src={AZUZD} title="اژوژض &nbsp;ن-يمجلان &nbsp;ءي-وغاراس &nbsp;ن-تودرت" />
        <AudioItem player={player3} src={ISEQSITN} title="ءيسقسيتن &nbsp;ف-وغاراس &nbsp;ن-لماسيح" />
        <AudioItem
          player={player4}
          src={NTHUNA}
          title="سّا &nbsp;ن-تحونا &nbsp;غ-تݣمّي-نك &nbsp;لّجديد"
        />
      </div>
    </Grid>
  );
};

export default AudioSection;
