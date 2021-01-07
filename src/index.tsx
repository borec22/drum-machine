import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {Pad} from './App';
import reportWebVitals from './reportWebVitals';

import audioFile1 from './assets/audio/piano-cords/Chord_1.mp3';
import audioFile2 from './assets/audio/piano-cords/Chord_2.mp3';
import audioFile3 from './assets/audio/piano-cords/Chord_3.mp3';
import audioFile4 from './assets/audio/piano-cords/Chord_4.mp3';
import audioFile5 from './assets/audio/piano-cords/Chord_5.mp3';
import audioFile6 from './assets/audio/piano-cords/Chord_6.mp3';
import audioFile7 from './assets/audio/piano-cords/Chord_7.mp3';
import audioFile8 from './assets/audio/piano-cords/Chord_8.mp3';
import audioFile9 from './assets/audio/piano-cords/Chord_9.mp3';

const data: Array<Pad> = [
   {
      key: 'Q',
      audio: audioFile1,
      title: 'Chord 1'
   },
   {
      key: 'W',
      audio: audioFile2,
      title: 'Chord 2'
   },
   {
      key: 'E',
      audio: audioFile3,
      title: 'Chord 3'
   },
   {
      key: 'A',
      audio: audioFile4,
      title: 'Chord 4'
   },
   {
      key: 'S',
      audio: audioFile5,
      title: 'Chord 5'
   },
   {
      key: 'D',
      audio: audioFile6,
      title: 'Chord 6'
   },
   {
      key: 'Z',
      audio: audioFile7,
      title: 'Chord 7'
   },
   {
      key: 'X',
      audio: audioFile8,
      title: 'Chord 8'
   },
   {
      key: 'C',
      audio: audioFile9,
      title: 'Chord 9'
   },
]

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
