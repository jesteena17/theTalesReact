import styled ,{css} from 'styled-components';
import { Link } from 'react-router-dom';


export const MenuContainerStyles=css`
padding: 10px 15px;
color:white !important;
text-decoration: none;
cursor: pointer;
`;
export const HeaderContainer=styled.div`

height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
background-color: black;
position: fixed;
z-index:10;

`;

 

export const LogoContainer=styled(Link)`
height: 100%;
padding-left: 25px;
color: white !important;
text-decoration: none;
font-weight: 900;
font-size: 36pt;
`;

export const MenusContainer=styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
color:white !important;
`;

export const MenuLink=styled(Link)`

${MenuContainerStyles}
`;

export const MenuDiv=styled.div`

${MenuContainerStyles}
`;