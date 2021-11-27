import { Component } from "react";
import "./index.css";

class DisplayFile extends Component {
  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const fetchData = await fetch(
      "https://avinasht-backend.herokuapp.com/display/"
    );
    console.log(fetchData);
  };

  render() {
    const data = [];

    return (
      <div className="form-list-container">
        <ul className="display-ul-list">
          {data.map((eachData) => (
            <li key={eachData.id} className="list-style">
              <h1 className="id-style">{eachData.id}</h1>
              <h2 className="title-style">{eachData.title.toUpperCase()}</h2>
              <p className="body-style">"{eachData.body}"</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DisplayFile;
