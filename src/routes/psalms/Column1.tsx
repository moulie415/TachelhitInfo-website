import {Button, Grid} from '@material-ui/core';
import {colors, psalmData} from '../../constants';
import {FunctionalComponent, h} from 'preact';

const Column1: FunctionalComponent<{
  setPsalmIndex: (index: number) => void;
  setAudio: (audio: string) => void;
  openModal: () => void;
  tab: number;
}> = ({setPsalmIndex, setAudio, openModal, tab}) => {
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
    <Grid xs={12} sm={3} md={3} item>
      {psalmData
        .slice(0, psalmData.length / 2)
        .map(
          (
            {
              psalm,
              name,
              arabicName,
              tifName,
              pdfLat,
              pdfArabic,
              pdfTif,
              audio,
            },
            index,
          ) => {
            return (
              <div key={psalm}>
                <Button
                  onClick={() => {
                    setPsalmIndex(index);
                    setAudio(audio);
                    openModal();
                  }}
                  style={{
                    textTransform: 'inherit',
                    paddingTop: tab === 2 ? 0 : undefined,
                    paddingBottom: tab === 2 ? 0 : undefined,
                  }}>
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
          },
        )}
    </Grid>
  );
};

export default Column1;
