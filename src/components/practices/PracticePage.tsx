import * as React from "react";
import * as practiceApi from "../../api/practiceApi";
import PracticeList from "./PracticeList";

class PracticePage extends React.Component {
  state = {
    practices: []
  };

  componentDidMount() {
    practiceApi.getPractices().then((_practices) => {
      this.setState({ practices: _practices });
    }).catch( (error) => {
        console.log("Error on api fetch:", error);
    });
  }

  render() {
    return (
      <>
        <h2>Practices</h2>
        <PracticeList practices={this.state.practices} />
      </>
    );
  }
}

export default PracticePage;
