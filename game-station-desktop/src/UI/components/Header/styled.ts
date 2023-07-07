import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.size(3)} ${theme.size(8)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.high};

    @media ${theme.devices.tablet} {
      padding: ${theme.size(2)};
    }
  `
);

export const Left = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
  `
);

export const Right = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const Icon = styled.div(
  ({ theme }) => css`
    font-size: ${theme.size(9)};
  `
);

export const Title = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.h1};
    margin-bottom: ${theme.size(1)};
  `
);

export const LangSwitch = styled.div(
  ({ theme }) => css`
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    font-size: ${theme.fontSize.body};
    margin: 0 ${theme.size(2)};
  `
);

export const GitHub = styled.a(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${theme.size(10)};
    color: inherit;
  `
);
