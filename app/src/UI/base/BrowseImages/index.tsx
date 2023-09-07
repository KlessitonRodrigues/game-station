import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import Icons from '../Icons';
import { fetchImages } from '../InputModal/services/ImageInput/services/fetchImages';
import { Container, Image, ImageBox, SlideBox } from './styled';

export const BrowseImages = (props: App.Props.BrowseImages) => {
  const { query, active, sufix, onChange } = props;
  const onPressed = useGamepad();
  const [imageLinks, setImageLinks] = useState({ lastQuery: '', urls: [''] });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (active) {
      onPressed('ArrowLeft', () => {
        selected > 0 && setSelected(selected - 1);
      });
      onPressed('ButtonLeft', () => {
        selected < imageLinks.urls.length && setSelected(selected + 1);
      });
    }
  }, [onPressed]);

  useEffect(() => {
    if (active && query.length >= 3 && query !== imageLinks.lastQuery)
      fetchImages(query)
        .then(urls => setImageLinks({ lastQuery: query, urls }))
        .catch(console.error);
  }, [active, query]);

  useEffect(() => {
    onChange && onChange(imageLinks.urls[selected]);
  }, [selected, imageLinks.urls.length]);

  return (
    <Container>
      <SlideBox>
        <Icons type="arrow-left" size={12} />
        <ImageBox>
          <Image src={imageLinks.urls[selected]} />
        </ImageBox>
        <Icons type="arrow-right" size={12} />
      </SlideBox>
    </Container>
  );
};

export default BrowseImages;
