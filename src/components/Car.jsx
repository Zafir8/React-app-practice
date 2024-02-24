function Car() {
  let car = "Mercedes-Benz";
  let car2 = "BMW";
  let car3 = "Audi";

    return (
        <div>
            <h1>List of cars</h1>
            <ul>
            <li>{car}</li>
            <li>{car2}</li>
            <li>{car3}</li>
            </ul>
        </div>

  );
}

export default Car;