import {Button, Grid} from '@material-ui/core';
import {colors, psalmData} from '../../constants';
import {FunctionalComponent, h} from 'preact';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';

const Column4: FunctionalComponent<{
  tab: number;
  musicIndex: number;
  setMusicIndex: (index: number) => void;
  setMusicPlaying: (playing: boolean) => void;
  musicPlaying: boolean;
}> = ({tab, musicIndex, musicPlaying, setMusicPlaying, setMusicIndex}) => {
  const getName = (
    tab: number,
    name: string,
    arabicName: string,
    tifName: string,
  ) => {
    if (tab === 0) {
      return name;
    }
    if (tab === 1) {
      return tifName;
    }
    return arabicName;
  };

  const getFontSize = () => (tab === 2 ? 25 : 'inherit');

  const getFontFamily = () => {
    if (tab === 1) {
      return 'Tifinagh';
    }
    if (tab === 2) {
      return 'Scheherazade';
    }
    return 'inherit';
  };
  return (
    <Grid
      style={{
        border: '1px solid',
        borderColor: colors.red,
        backgroundColor: colors.cream,
        textAlign: 'center',
      }}
      xs={12}
      sm={3}
      md={3}
      item>
      {psalmData
        .slice(psalmData.length / 2)
        .map(({psalm, name, arabicName, tifName}, index) => {
          const actualIndex = index + 12;
          return (
            <div key={psalm} style={{fontSize: tab === 2 ? 20 : 'inherit'}}>
              <Button
                onClick={() => {
                  if (actualIndex === musicIndex) {
                    setMusicPlaying(!musicPlaying);
                  } else {
                    setMusicIndex(actualIndex);
                    setMusicPlaying(true);
                  }
                }}
                style={{
                  textTransform: 'inherit',
                  paddingTop: tab === 2 ? 0 : undefined,
                  paddingBottom: tab === 2 ? 0 : undefined,
                }}>
                {actualIndex === musicIndex && musicPlaying ? (
                  <Pause />
                ) : (
                  <PlayArrow />
                )}
                <span style={{color: colors.red}}>{psalm}</span>
                <span>&nbsp;</span>
                <span> </span>
                <span
                  style={{
                    fontSize: getFontSize(),
                    fontFamily: getFontFamily(),
                    direction: tab === 2 ? 'rtl' : 'inherit',
                  }}>
                  {getName(tab, name, arabicName, tifName)}
                </span>
              </Button>
            </div>
          );
        })}
    </Grid>
  );
};

export default Column4;
