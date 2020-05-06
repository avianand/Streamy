import React from "react";
import { Field, reduxForm, clearSubmitErrors } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className=" ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    //to shorten th new one even further we can destructure input
    const className = `field ${meta.error && meta.touched ? "error" : ""} `;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          //new
          {...input}
          autoComplete="off"
          //old
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  //this is the last onsubmit
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues); //this form values contains all the values from fields
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    //only run if user did not enter the title
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    //only run if user did not enter the description
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({ form: "StreamForm", validate: validate })(
  StreamForm
);
