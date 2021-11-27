import { Component } from "react";
import Files from "react-files";
import "./index.css";
class UploadFIle extends Component {
  constructor() {
    super();
    this.state = {
      jsonFile: {},
    };
    this.fileReader = new FileReader();
    this.fileReader.onload = (event) => {
      this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
        console.log(this.state.jsonFile);
      });
    };
  }

  postData = async () => {
    const jsonFile = this.state;
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(jsonFile),
    };
    const updateFetch = await fetch(
      " https://avinasht-backend.herokuapp.com/upload/",
      options
    );
    console.log(updateFetch);
  };

  submitFilesData = () => {
    this.postData();
  };

  render() {
    return (
      <div className="upload-background">
        <Files
          className="files-dropzone"
          onChange={(file) => {
            this.fileReader.readAsText(file[0]);
          }}
          onError={(err) => console.log(err)}
          accepts={[".json"]}
          multiple
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
        <button type="button" className="button" onClick={this.submitFilesData}>
          Submit
        </button>
      </div>
    );
  }
}

export default UploadFIle;
