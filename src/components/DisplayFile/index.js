import { Component } from "react";
import "./index.css";

class DisplayFile extends Component {
  state = {
    uploadedData: [],
  };
  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const { uploadedData } = this.state;
    const dataLength = uploadedData.length;
    if (dataLength > 0) {
      const fetchData = await fetch("http://localhost:3008/get/");
      console.log(fetchData);
    }
  };

  render() {
    const { uploadedData } = this.state;
    const dataLength = uploadedData.length;
    return (
      <div className="form-list-container">
        <ul className="display-ul-list">
          {uploadedData.map((eachData) => (
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
