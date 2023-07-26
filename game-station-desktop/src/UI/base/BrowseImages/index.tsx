import { useEffect, useState } from 'react';
import useGamepad from 'src/hooks/useGamepad';

import { fetchImages } from './services/fetchImages';
import { Browse, Image } from './styled';

export const BrowseImages = (props: BrowseImagesProps) => {
  const { query, active, sufix } = props;
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
    if (query.length < 3) return undefined;
    const gerItems = async () => fetchImages(`${query.toLocaleLowerCase()} ${sufix}`);
    gerItems().then(setItems).catch(console.error);
  }, [query]);

  return (
    <Browse>
      <Image src={items[selected]} />
    </Browse>
  );
};

export default BrowseImages;
