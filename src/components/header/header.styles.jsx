import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;


export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    padding: 0;
    top: 25px;
    height: auto;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    justify-content: space-between;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionStyles}
`;

export const OptionDiv = styled.div`
  ${OptionStyles}
`;
