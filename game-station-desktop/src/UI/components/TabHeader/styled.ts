import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.size(2)};
    margin-bottom: ${theme.size(8)};
  `
);

export const LeftButtons = styled.div(
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

export const TabsItem = styled.label<{ selected?: boolean }>(
  ({ theme, selected }) => css`
    display: flex;
    position: relative;
    align-items: center;
    color: ${theme.colors.bg1};
    padding-bottom: ${theme.size(3)};
    transition: 0.75s ease-out;

    ${selected &&
    css`
      color: ${theme.colors.text1};
      margin-left: ${theme.size(4)};
      margin-right: ${theme.size(4)};
    `}

    ${TabsItemLabel} {
      width: 0;
      font-size: ${theme.fontSize.label};
      ${!selected && `opacity: 0;`}
      ${selected && `width: auto;`}
    }
  `
);

export const TabsItemLabel = styled.span(
  ({ theme }) => css`
    padding: 0 ${theme.size(2)};
  `
);

export const RightButtons = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);
