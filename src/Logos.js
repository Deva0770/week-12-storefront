import React from "react";
class Logo extends React.Component {
  constructor() {
    super();
    this.state = {
      response: [],
    };
  }
  componentDidMount() {
    this.callApi()
      .then((response) => {
        this.setState({ response });
      })
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("http://localhost:3001/logo");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    let logo = this.state.response
    return (
      <div>
          {logo.map((logo) =>
            <p key={logo._id}>{logo.title}</p>
          )}
      </div>
    );
    //test comment
  }
}
export default Logo;