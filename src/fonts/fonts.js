import { createGlobalStyle } from 'styled-components'
import FuturaHandwritten from './FuturaHandwritten.ttf'
export default createGlobalStyle`
  @font-face {
    font-family: 'Futura Handwritten';
    src: url(${FuturaHandwritten}) format('truetype'),
    local('Futura Handwritten');
    font-weight: 300;
    font-style: normal;
  }
`;