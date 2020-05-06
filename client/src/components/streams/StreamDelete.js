import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <Link className="ui button secondary" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream?";
    }
    return (
      <div>
        <div className="">Are you sure you want to delete this stream?</div>
        <div className="">
          <h3>Title: {this.props.stream.title}</h3>
        </div>
      </div>
    );
  }
  render() {
    if (!this.props.stream) {
      return <div> Loading...</div>;
    }

    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          action={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
