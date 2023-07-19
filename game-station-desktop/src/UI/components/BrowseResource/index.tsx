import { useEffect, useMemo, useState } from 'react';
import Icons from 'src/UI/base/Icons';
import { Row } from 'src/UI/base/Styles';
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
  const [query] = useState({ type: 'bg', text: 'Call  of Dutty Modern Warfire 2' });
  const [items, setItems] = useState({ arr: [''], selected: 0 });

  useEffect(() => {
    if (gamepad.includes('ArrowUp') && items.selected > 0)
      setItems({ ...items, selected: items.selected - 1 });
    if (gamepad.includes('ArrowDown') && items.selected < items.arr.length - 1)
      setItems({ ...items, selected: items.selected + 1 });
  }, [gamepad]);

  useEffect(() => {
    const gerItems = async () => {
      if (query.text.length < 5) return undefined;
      if (query.type === 'bg') return getImageUrls(query.text, 'bg');
      if (query.type === 'cover') return getImageUrls(query.text, 'cover');
    };
    gerItems()
      .then(arr => setItems({ arr, selected: 0 }))
      .catch(console.error);
  }, []);

  const renderItem = useMemo(() => {
    const item = items.arr[items.selected];
    if (query.type === 'cover') return <BrowseImage src={item} />;
    if (query.type === 'bg') return <BrowseImage src={item} />;
    if (query.type === 'bg') return <BrowseFolder>{item}</BrowseFolder>;
  }, [items]);

  return (
    <Container>
      <Browser>
        <QueryBar>
          <Row centered>
            <Icons type="image" size={12} />
            <Query>{query.text}</Query>
          </Row>
          <Row centered>{`${items.selected + 1} of ${items.arr.length}`}</Row>
        </QueryBar>
        <BrowseItems>{renderItem}</BrowseItems>
      </Browser>
    </Container>
  );
};
