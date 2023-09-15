import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const Container = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    animation: ${Keyframes.slideUp} 0.2s ease-out;
  `;
});

export const Grid = styled.div(({ theme }) => {
  return css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(400)};
    display: grid;
    align-content: flex-start;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${theme.size(8)};
    padding: 0 ${theme.size(16)};
  `;
});

export const GridItem = styled.div<{ focus: number; img: string }>(({ theme, focus, img }) => {
  return css`
    width: ${theme.size(80)};
    height: ${theme.size(110)};
    background-color: transparent;
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.high};
    border: 2px solid ${theme.colors.bg2};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: ${theme.size(10)};
    transition: 0.2s;
    ${img && 'color: transparent;'}

    :nth-child(${focus + 1}) {
      border: 2px solid ${theme.colors.gray};
    }
  `;
});
