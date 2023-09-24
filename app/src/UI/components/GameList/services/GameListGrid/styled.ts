import styled, { css } from 'styled-components';

export const Container = styled.div(
  () =>
    css`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `
);

export const Grid = styled.div(
  props =>
    css`
      height: 100%;
      display: grid;
      align-content: flex-start;
      justify-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: ${props.theme.size(6)};
      scroll-behavior: smooth;
      overflow-y: auto;
    `
);

export const GridItem = styled.div<{ focus: boolean; active: boolean }>(
  props => css`
    position: relative;
    width: ${props.theme.size(80)};
    height: ${props.theme.size(110)};
    background-color: transparent;
    border-radius: ${props.theme.radius.large};
    font-size: ${props.theme.size(10)};
    transition: opacity 0.2s;
    overflow: hidden;
    border: 2px solid transparent;
    ${props.focus && `border: 2px solid ${props.theme.colors.gray};`}
    ${props.active && !props.focus && `opacity: 0.2;`};
    ${props.active && props.focus && `opacity: 1;`};

    ${Description} {
      ${props.active && props.focus && `opacity: 1;`};
    }
  `
);

export const GridItemImg = styled.img(
  () => css`
    width: 100%;
    height: 100%;
  `
);

export const Description = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0008;
    padding: ${props.theme.size(4)};
    backdrop-filter: blur(15px);
    transition: opacity 0.3s;
  `
);

export const Content = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.size(2)};
  `
);

export const Title = styled.h3(
  props => css`
    color: ${props.theme.colors.text1};
  `
);

export const Label = styled.p(
  props => css`
    font-size: ${props.theme.fontSize.small};
    color: ${props.theme.colors.text3};
  `
);

export const StartButton = styled.p(
  props => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props.theme.size(2)};
    font-size: ${props.theme.fontSize.h3};
    width: 100%;
  `
);
