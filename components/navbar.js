import styled from 'styled-components';
export default function Navbar() {
  const Header = styled.header`
  position: relative;
  text-align: center;
`;
const Wrapper = styled.div`
width: 80%;
margin: auto;
display: grid;
grid-template-colums: 1fr 1fr;
`;
const LinkList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
`;
const LinkItem = styled.a`
  text-decoration: none;
  padding: 5px;
`;
  return (
    <Header>
      <Wrapper>
      <h1>Ayden Jackson</h1>
      <LinkList>
      <li><LinkItem href="/about">About</LinkItem></li>
      <li><LinkItem href="/about">Store</LinkItem></li>
      <li><LinkItem href="/about">Listen</LinkItem></li>
      </LinkList>
      </Wrapper>
    </Header>
  )
}