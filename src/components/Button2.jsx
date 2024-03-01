
function Button2() {

  const buttonclick =  (e) => e.target.textContent = "Button2 Clicked";
    const buttonStyle = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        fontSize: "20px",
        margin: "10px"
    }



  return <button onClick={(e) => buttonclick(e)} style={buttonStyle}>Button2</button>;
}

export default Button2;
