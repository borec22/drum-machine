import './DrumPad.css';
import React, {useEffect, useRef, useState} from 'react';
import {Pad} from '../../App';

type PropsType = {
   data: Pad
   setDisplayText: (text: string) => void
}

export const DrumPad: React.FC<PropsType> = (props) => {
   const {data: {key, audio, title}} = props;
   const audioElement = useRef<HTMLAudioElement>(null);

   const [isActivePad, setIsActivePad] = useState<boolean>(false);

   const activatePadButton = () => {
      setIsActivePad(true);
      setTimeout(() => {
         setIsActivePad(false);
      }, 200)
   }

   const stylesActiveButton = {
      backgroundColor: '#42a5f5'
   }

   useEffect(() => {
      document.addEventListener('keydown', onKeyPressHandler)

      return () => {
         document.removeEventListener('keydown', onKeyPressHandler)
      }
   })

   const onClickHandler = () => {
      if (audioElement && audioElement.current) {
         audioElement.current.play();
      }
      props.setDisplayText(title);
      activatePadButton();
   };

   const onKeyPressHandler = (e: KeyboardEvent) => {
      if (e.key === key.toLowerCase() || e.key === key) {
         if (audioElement && audioElement.current) {
            audioElement.current.play();

            activatePadButton();
         }
         props.setDisplayText(title);
      }
   }

   return (
      <div className="drum-pad" onClick={onClickHandler} id={title} style={isActivePad ? stylesActiveButton : {}}>
         {key}
         <audio ref={audioElement} src={audio} className="clip" id={key}>
            <source src={audio}/>
         </audio>
      </div>
   );
}

// https://assets.coderrocketfuel.com/pomodoro-times-up.mp3