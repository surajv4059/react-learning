function Header(props) {
  const headerStyle = {
    // backgroundColor: "blueviolet",
    // padding: "4vmax",
    // border: "5px solid red",
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
