import {Grid} from '@material-ui/core';
import {DrumPad} from '../DrumPad/DrumPad';
import React from 'react';
import {Pad} from '../../App';

type PropsType = {
   pads: Array<Pad>
   setDisplayText: (text: string) => void
};

export const Keyboard: React.FC<PropsType> = (props) => {
   const {pads, ...restProps} = props;

   let padsRows = [];

   for (let i = 0; i < pads.length; i += 3) {
      let array = [];

      for (let j = i; j < i + 3; j++) {
         array.push(pads[j]);
      }

      padsRows.push(array);
   }

   return (
      <>
         <Grid id='keyboard' sm={6} item container spacing={1} alignContent='center' style={{marginLeft: '3px'}}>
            {
               padsRows.map((row, index) => {
                  return (
                     <Grid key={index} container item>
                        {row.map((pad, index) =>
                           <Grid key={index} sm={4}>
                              <DrumPad data={pad} setDisplayText={props.setDisplayText} />
                           </Grid>)
                        }
                     </Grid>
                  );
               })
            }
         </Grid>
      </>
   )
}