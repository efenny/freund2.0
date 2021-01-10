import { createGlobalStyle } from "styled-components"

import WremenaLight from "./Wremena-Light.woff"
import WremenaRegular from "./Wremena-Regular.woff"
import WremenaBold from "./Wremena-Bold.woff"

export default createGlobalStyle`
@font-face {
  font-family: 'Wremena';
  src: local('Font Name'), local('FontName'),
  url(${WremenaLight});
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Wremena';
  src: local('Font Name'), local('FontName'),
  url(${WremenaRegular});
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Wremena';
  src: local('Font Name'), local('FontName'),
  url(${WremenaBold});
  font-weight: 500;
  font-style: normal;
}
`
