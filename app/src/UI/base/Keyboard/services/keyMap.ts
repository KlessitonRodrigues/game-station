export const getKeyId = (x: number, y: number) => {
  const keyMap = [
    ['esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ''],
    ['capslk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter', 'enter'],
    ['shift-l', 'shift-l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'shift-r', 'shift-r'],
    [
      '',
      'space',
      'space',
      'space',
      'space',
      'space',
      'space',
      'space',
      'space',
      'space',
      'dot',
      '',
    ],
  ];

  return keyMap[y || 0][x || 0];
};
