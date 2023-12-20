import { useEffect, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import If from 'src/UI/base/If';
import Loading from 'src/UI/base/Loading';
import useGamepad from 'src/hooks/useGamepad';
import useScreenState from 'src/hooks/useScreenState';
import { fetchImageData } from 'src/utils/images/imageCache';

import { fetchImages } from './services/fetchImages';
import { Image, ImageBox } from './styled';

export const ImageInputModal = (props: App.Props.InputField) => {
  const { active, sufix, value, onChange, onClose } = props;

  const onPressed = useGamepad();
  const { option, setOption, loading, setLoading } = useScreenState();
  const [lastQuery, setLastQuery] = useState('');
  const [urls, setUrls] = useState<string[]>([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (active) {
      const isLastOption = option < urls.length;
      onPressed('ArrowLeft', () => option && setOption(option - 1));
      onPressed('ArrowRight', () => isLastOption && setOption(option + 1));
      onPressed('ButtonA', onClose);
    }
  }, [onPressed]);

  useEffect(() => {
    const fetchUrls = async () => {
      setLoading(true);
      if (active && value.length >= 3 && value !== lastQuery) {
        const imgUrls = await fetchImages(value + sufix);
        setUrls(imgUrls);
        setLastQuery(value);
      }
    };

    fetchUrls()
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [active, value]);

  useEffect(() => {
    setLoading(true);
    onChange && onChange(urls[option]);
    fetchImageData(urls[option]).then(url => {
      setLoading(false);
      setUrl(url);
    });
  }, [option, urls.length]);

  return (
    <ImageBox>
      <If check={!loading}>
        <>
          <If check={active} true={<Icons type="arrow-left" size={14} />} />
          <Image src={url} />
          <If check={active} true={<Icons type="arrow-right" size={14} />} />
        </>
      </If>
      <Loading type="icon" show={loading} />
    </ImageBox>
  );
};
