import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { BrowseImage, BrowseItems, BrowseLink, BrowserTitle, Container } from '../styled';
import { fetchImages } from './fetchImages';

export const RenderImages = (props: BrowserResourcesProps) => {
  const { query, type } = props;
  const [pressed] = useGamepad();
  const [items, setItems] = useState(['']);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (pressed.includes('ArrowLeft') && selected > 0) setSelected(selected - 1);
    if (pressed.includes('ArrowRight') && selected < items.length) setSelected(selected + 1);
  }, [pressed]);

  useEffect(() => {
    const gerItems = async () => {
      if (type === 'background') return fetchImages(`${query.toLocaleLowerCase()} background HD`);
      if (type === 'cover') return fetchImages(`${query.toLocaleLowerCase()} cover`);
    };
    gerItems().then(setItems).catch(console.error);
  }, []);

  return (
    <Container>
      <BrowserTitle>{`${selected} of ${items.length}`}</BrowserTitle>
      <BrowseItems>
        <BrowseImage src={items[selected]} />
      </BrowseItems>
      <BrowseLink>{items[selected]}</BrowseLink>
    </Container>
  );
};
