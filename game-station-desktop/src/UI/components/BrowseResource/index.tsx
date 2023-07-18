import { useEffect, useMemo, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import useGamepad from 'src/hooks/useGamepad';

import { getFolderList, getImageUrls } from './services/resources';
import {
  BrowseFolder,
  BrowseImage,
  BrowseItems,
  Browser,
  Container,
  Query,
  QueryBar,
} from './styled';

export const BrowserResources = () => {
  const [gamepad] = useGamepad();
  const [query] = useState({ type: 'bg', text: 'forza horizon 4' });
  const [items, setItems] = useState<string[]>([]);
  const [seleted, setSelected] = useState(0);

  useEffect(() => {
    if (gamepad.includes('ArrowUp')) seleted > 0 && setSelected(seleted - 1);
    if (gamepad.includes('ArrowDown')) seleted < items.length && setSelected(seleted + 1);
  }, [gamepad]);

  useEffect(() => {
    const gerItems = async () => {
      if (query.text.length < 5) return undefined;
      if (query.type === 'bg') return getImageUrls(query.text, 'background full hd');
      if (query.type === 'cover') return getImageUrls(query.text, 'cover full hd');
    };
    gerItems().then(setItems).catch(console.error);
  }, []);

  const renderItems = useMemo(() => {
    return items.map((item, i) => {
      if (['cover', 'bg'].includes(query.type)) {
        const isSelected = seleted === i;
        return (
          <BrowseImage
            ref={el => {
              if (isSelected) setTimeout(() => el?.focus(), 1000);
            }}
            key={item}
            selected={isSelected}
            src={item}
          />
        );
      }
      if (query.type === 'folders') {
        return (
          <BrowseFolder key={item} selected={seleted === i}>
            {item}
          </BrowseFolder>
        );
      }
    });
  }, [items, seleted]);

  return (
    <Container>
      <Browser>
        <QueryBar>
          <Icons type="folder" size={10} />
          <Query>{`#${query.text || '...'}`}</Query>
        </QueryBar>
        <BrowseItems>{renderItems}</BrowseItems>
      </Browser>
    </Container>
  );
};
