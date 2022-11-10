function Header(props) {
  const headerStyle = {
    color: "white",
  };
  return (
    <>
      <nav style={headerStyle}>
        I am different file component {`hiii ${props.name}`}
      </nav>
    </>
  );
}

export default Header;
