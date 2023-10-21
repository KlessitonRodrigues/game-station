import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';
import { fetchImageData } from 'src/utils/images/imageCache';

import { fetchImages } from './services/fetchImages';
import { Image, ImageBox } from './styled';

export const ImageInputModal = (props: App.Props.InputField) => {
  const { active, value, onChange } = props;

  const onPressed = useGamepad();
  const { option, setOption } = useScreenState();
  const [lastQuery, setLastQuery] = useState('');
  const [urls, setUrls] = useState<string[]>([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (active) {
      onPressed('ArrowLeft', () => setOption(option - 1));
      onPressed('ArrowRight', () => {
        option < urls.length && setOption(option + 1);
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
    fetchImageData(urls[option]).then(setUrl);
  }, [option, urls.length]);

  return (
    <ImageBox>
      <Image src={url} />
    </ImageBox>
  );
};
