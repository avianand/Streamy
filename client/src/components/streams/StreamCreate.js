import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
//reduxForm is function hence smallcase, Field is a component hence capital

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues); //this form values contains all the values from fields
  };
  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// name is mandatory in Field , field doesn't knwo how to show chekbox, textimput or anything to show on screen
// to tel fiel dhow to chow element on screen we pass prop to field : component

export default connect(null, { createStream })(StreamCreate);
