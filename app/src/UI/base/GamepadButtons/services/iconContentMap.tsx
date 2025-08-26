import React from 'react';

import { RoundedIcon } from './Icons';

export const iconContentMap = (button: App.Gamepad.Buttons) => {
  const content: Record<typeof button, React.ReactElement> = {
    LeftStick: <RoundedIcon content={'A'} />,
    LeftStickUp: <RoundedIcon content={'A'} />,
    LeftStickDown: <RoundedIcon content={'A'} />,
    LeftStickLeft: <RoundedIcon content={'A'} />,
    LeftStickRight: <RoundedIcon content={'A'} />,
    RightStick: <RoundedIcon content={'A'} />,
    RightStickUp: <RoundedIcon content={'A'} />,
    RightStickDown: <RoundedIcon content={'A'} />,
    RightStickLeft: <RoundedIcon content={'A'} />,
    RightStickRight: <RoundedIcon content={'A'} />,
    TriggerLeft: <RoundedIcon content={'A'} />,
    TriggerRight: <RoundedIcon content={'A'} />,
    ButtonLeft: <RoundedIcon content={'A'} />,
    ButtonRight: <RoundedIcon content={'A'} />,
    ButtonA: <RoundedIcon content={'A'} />,
    ButtonB: <RoundedIcon content={'B'} />,
    ButtonX: <RoundedIcon content={'X'} />,
    ButtonY: <RoundedIcon content={'Y'} />,
    ArrowUp: <RoundedIcon content={'Up'} />,
    ArrowDown: <RoundedIcon content={'Down'} />,
    ArrowLeft: <RoundedIcon content={'Left'} />,
    ArrowRight: <RoundedIcon content={'Right'} />,
    ButtonStart: <RoundedIcon content={'A'} />,
    ButtonSelect: <RoundedIcon content={'A'} />,
    ButtonHome: <RoundedIcon content={'A'} />,
  };

  return content[button];
};
