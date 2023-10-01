import styled, { css } from 'styled-components';

export const Container = styled.div(({ theme }) => {
  return css`
    width: 100%;
  `;
});

export const Path = styled.div(({ theme }) => {
  return css`
    padding: ${theme.size(1)} 0;
    font-size: ${theme.fontSize.small};
  `;
});

export const Directories = styled.div(({ theme }) => {
  return css`
    width: 100%;
  `;
});

export const Dir = styled.div<{ active: boolean }>(({ theme, active }) => {
  return css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${theme.size(0.5)} 0;
    opacity: ${active ? 1 : 0.6};
  `;
});

export const DirName = styled.div(({ theme }) => {
  return css`
    margin-left: ${theme.size(2)};
  `;
});
