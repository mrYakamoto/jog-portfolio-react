import css from 'styled-jsx/css'
import { colors } from 'variables'

export default css`
.accordion {
  text-align: left;
  width: 100%;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
}

.publication-logo {
  max-height: 2rem;
}

.panel {
  overflow: hidden;
  transition: max-height .2s ease-out;
}

.articles {
  list-style: none;
  padding: 0;
}

.article-link {
  color: ${colors.black};
  text-decoration: none;
}
`
