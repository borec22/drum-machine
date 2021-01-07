import React, {useState} from 'react';
import './App.css';
import {createStyles, Grid, makeStyles, Slider, Switch, Theme} from '@material-ui/core';
import {VolumeDown, VolumeUp} from '@material-ui/icons';
import {Keyboard} from './components/Keaboard/Keaboard';
import {isBoolean} from 'util';

// const useStyles = makeStyles((theme: Theme) =>
//    createStyles({
//       drumMachine: {
//
//       },
//    }),
// );
// import './assets/audio/piano-cords/Chord_1.mp3'

export type Pad = {
   key: string,
   audio: string,
   title: string,
}
type PropsType = {data: Array<Pad>}



function App(props: PropsType) {
   const [displayText, setDisplayText] = useState<string>('');

   return (
      <Grid id='drum-machine' container direction="row" justify="center" alignItems="center">
         <Grid id="wrapper" container item sm={8} md={4} spacing={9}>
            <Keyboard pads={props.data} setDisplayText={setDisplayText} />
            <Grid sm={6} item container justify='center' alignContent='center' spacing={1}>
               <Grid item container direction='row' justify='center' style={{marginTop: '5px'}}>
                  <div id='display'>
                     {displayText}
                  </div>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
}

export default App;
