import {Grid, useMediaQuery} from '@material-ui/core';
import {h} from 'preact';
import {colors} from '../../constants';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import ThirdColumn from './ThirdColumn';

function Documents() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: 10,
        backgroundColor: colors.paleTurquoise,
      }}>
      <Grid container style={{marginBottom: 20}}>
        <FirstColumn />
        <SecondColumn />
        <ThirdColumn />
      </Grid>
    </div>
  );
}

export default Documents;
