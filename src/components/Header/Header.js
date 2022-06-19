import { Container } from '../Container';
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher.js';
import { HeaderEl, Title, Wrapper } from './Header.styles';

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
