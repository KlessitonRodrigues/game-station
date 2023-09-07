import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';

import { fetchImages } from './services/fetchImages';
import { Image, ImageBox } from './styled';

export const ImageInputModal = (props: App.Props.InputModal) => {
  const { active, value, onChange } = props;
  const onPressed = useGamepad();
  const { option, setUI } = useUIState();
  const [imageLinks, setImageLinks] = useState({ lastQuery: '', urls: [''] });

  useEffect(() => {
    if (active) {
      onPressed('ArrowLeft', () => setUI('option', option - 1));
      onPressed('ArrowRight', () => {
        option < imageLinks.urls.length && setUI('option', option + 1);
      });
    }
  }, [onPressed]);

  useEffect(() => {
    if (active && value.length >= 3 && value !== imageLinks.lastQuery)
      fetchImages(value)
        .then(urls => setImageLinks({ lastQuery: value, urls }))
        .catch(console.error);
  }, [active, value]);

  useEffect(() => {
    onChange && onChange(imageLinks.urls[option]);
  }, [option, imageLinks.urls.length]);

  return (
    <ImageBox>
      <Image src={imageLinks.urls[option]} />
    </ImageBox>
  );
};
