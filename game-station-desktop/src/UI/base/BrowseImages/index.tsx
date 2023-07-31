import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import Icons from '../Icons';
import { fetchImages } from './services/fetchImages';
import { Container, Image, ImageBox, SlideBox } from './styled';

export const BrowseImages = (props: BrowseImagesProps) => {
  const { query, active, sufix, onChange } = props;
  const [pressed] = useGamepad();
  const [items, setItems] = useState(['']);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (active) {
      if (pressed.includes('ArrowLeft') && selected > 0) setSelected(selected - 1);
      if (pressed.includes('ArrowRight') && selected < items.length) setSelected(selected + 1);
    }
  }, [pressed]);

  useEffect(() => {
    if (active && query.length >= 3) fetchImages(query, sufix).then(setItems).catch(console.error);
  }, [active, query]);

  useEffect(() => {
    onChange && onChange(items[selected]);
  }, [selected, items.length]);

  return (
    <Container>
      <SlideBox>
        <Icons type="arrow-left" size={12} />
        <ImageBox>
          <Image src={items[selected]} />
        </ImageBox>
        <Icons type="arrow-right" size={12} />
      </SlideBox>
    </Container>
  );
};

export default BrowseImages;
