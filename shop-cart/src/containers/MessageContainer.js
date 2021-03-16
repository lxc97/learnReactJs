import React, { Component } from "react";
import Message from "../components/Message";
import { connect } from "react-redux";

class MessageContainer extends Component {
  render() {
    let { message } = this.props;
    return (
      <>
        <Message message={message} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};
export default connect(mapStateToProps, null)(MessageContainer);
