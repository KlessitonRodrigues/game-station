import styled, { css } from 'styled-components';

export const Container = styled.div<{ active?: boolean }>(({ theme, active }) => {
  const onActive = css`
    background-color: ${theme.colors.bg2};
    color: ${theme.colors.text1};
    ${Content} {
      height: ${theme.size(150)};
    }
    ${Value} {
      opacity: 0;
    }
  `;

  return css`
    width: 75%;
    margin: 0 auto;
    padding: ${theme.size(4)};
    margin-bottom: ${theme.size(4)};
    color: ${theme.colors.text3};
    background-color: ${theme.colors.bg4};
    border-radius: ${theme.radius.medium};
    transition: 0.1s;

    ${active && onActive}
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
    font-size: ${theme.fontSize.h5};
    text-transform: capitalize;
  `;
});

export const Value = styled.div(() => {
  return css`
    transition: 0.3s;
  `;
});

export const Content = styled.div(() => {
  return css`
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: 0.3s;
  `;
});
