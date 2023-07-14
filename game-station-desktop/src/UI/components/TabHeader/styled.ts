import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(500)};
    display: flex;
    align-items: center;
    padding: ${theme.size(4)};
    margin: ${theme.size(2)} auto;
    margin-bottom: ${theme.size(8)};
  `
);

export const LeftIcons = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const RightIcons = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const MiddleTabs = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

export const TabsItemLabel = styled.span(
  ({ theme }) => css`
    padding: 0 ${theme.size(2)};
    font-size: ${theme.fontSize.h1};
  `
);

export const TabsItem = styled.label<{ selected?: boolean }>(
  ({ theme, selected }) => css`
    display: flex;
    position: relative;
    align-items: center;
    color: ${theme.colors.bg2};
    transition: 0.75s ease-out;

    ${selected &&
    css`
      color: ${theme.colors.white};
      margin-left: ${theme.size(15)};
      margin-right: ${theme.size(15)};
    `}

    ${TabsItemLabel} {
      width: 0;
      ${!selected && `opacity: 0;`}
      ${selected && `width: ${theme.size(25)}`}
    }
  `
);
