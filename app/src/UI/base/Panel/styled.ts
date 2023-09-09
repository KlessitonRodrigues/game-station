import styled, { css } from 'styled-components';

export const Container = styled.div<{ active?: boolean }>(({ theme, active }) => {
  return css`
    width: 75%;
    margin: 0 auto;
    padding: ${theme.size(4)};
    margin-bottom: ${theme.size(4)};
    color: ${theme.colors.text3};
    background-color: ${theme.colors.bg4};
    border-radius: ${theme.radius.medium};
    transition: 0.5s;

    ${active &&
    css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.text1};
      ${Content} {
        max-height: ${theme.size(120)};
      }
    `}
  `;
});

export const Header = styled.div(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
  `;
});

export const Title = styled.div(({ theme }) => {
  return css`
    font-size: ${theme.fontSize.h4};
    font-weight: bold;
  `;
});

export const Value = styled.div(() => {
  return css`
    transition: 0.3s;
    width: 100%;
  `;
});

export const Content = styled.div(() => {
  return css`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s;
  `;
});
