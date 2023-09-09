import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useUIState from 'src/hooks/useUIState';

import { fetchImages } from './services/fetchImages';
import { Image, ImageBox } from './styled';

export const ImageInputModal = (props: App.Props.InputModal) => {
  const { active, value, onChange } = props;

  const onPressed = useGamepad();
  const { option, setUI } = useUIState();
  const [lastQuery, setLastQuery] = useState('');
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    if (active) {
      onPressed('ArrowLeft', () => setUI('option', option - 1));
      onPressed('ArrowRight', () => {
        option < urls.length && setUI('option', option + 1);
      });
    }
  }, [onPressed]);

  useEffect(() => {
    const fetchUrls = async () => {
      const imgUrls = await fetchImages(value);
      setUrls(imgUrls);
      setLastQuery(value);
    };
    if (active && value.length >= 3 && value !== lastQuery) {
      fetchUrls().catch(console.error);
    }
  }, [active, value]);

  useEffect(() => {
    onChange && onChange(urls[option]);
  }, [option, urls.length]);

  return (
    <ImageBox>
      <Image src={urls[option]} />
    </ImageBox>
  );
};
