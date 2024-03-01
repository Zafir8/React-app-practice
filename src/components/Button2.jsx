
function Button2() {

  const clickHandler = () => {
    console.log("Button2 clicked");
  }

  const clickHandler2 = (name) => {
    console.log("Button2 clicked", name);
  }




    const buttonStyle = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        fontSize: "20px",
        margin: "10px"
    }



  return <button onClick={clickHandler} style={buttonStyle}>Button2</button>;
}

export default Button2;
