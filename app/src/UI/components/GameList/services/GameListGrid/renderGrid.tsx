import If from 'src/UI/base/If';

import { Content, Description, GridItem, GridItemImg, Label, StartButton, Title } from './styled';

export const renderGridItems = (props: App.Props.GameListScreen) => {
  const { active, list, index, onChangeGame, onActiveGame } = props;

  return list.map((game, i) => (
    <GridItem
      key={game.name}
      focus={index === i}
      onClick={() => (i === index ? onActiveGame(i) : onChangeGame(i))}
      ref={ref => ref && index === i && ref.scrollIntoView({ block: 'center' })}
    >
      <GridItemImg src={game.cover} />
      <If check={active && index === i}>
        <Description>
          <Content>
            <Title>{game.name}</Title>
            <Label>{game.publisher}</Label>
          </Content>
          <StartButton>Start</StartButton>
        </Description>
      </If>
    </GridItem>
  ));
};
