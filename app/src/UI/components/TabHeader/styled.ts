import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(500)};
    display: flex;
    align-items: center;
    padding: ${theme.size(4)};
    margin: ${theme.size(2)} auto;
  `
);

export const LeftIcons = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const RightIcons = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
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
    text-transform: capitalize;
  `
);

export const TabsItem = styled.label<{ selected?: boolean }>(
  props => css`
    display: flex;
    position: relative;
    align-items: center;
    color: ${props.theme.colors.bg1};
    transition: 0.3s ease-out;
    cursor: pointer;

    :hover {
      color: ${props.theme.colors.text2};
    }

    ${props.selected &&
    css`
      color: ${props.theme.colors.text1};
      margin-left: ${props.theme.size(15)};
      margin-right: ${props.theme.size(15)};
    `}

    ${TabsItemLabel} {
      width: 0;
      ${!props.selected && `opacity: 0;`}
      ${props.selected && `width: ${props.theme.size(25)};`}
    }
  `
);
