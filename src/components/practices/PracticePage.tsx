import * as React from "react";
import PracticeList from "./PracticeList";
import { connect } from "react-redux";
import * as practiceActions from "../../redux/actions/practiceActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ReactPaginate from "react-paginate";

class PracticePage extends React.Component {
  state = {
    pageCount: 10,
  };

  componentDidMount() {
    const { practices, actions, perPage } = this.props;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated() && practices.length === 0) {
      actions.loadPractices(1, perPage).catch((error) => {
        alert("Loading practices failed " + error);
      });
    }
  }

  handlePageClick = (data) => {
    const { actions, perPage } = this.props;
    let selected = data.selected;
    actions.loadPractices(selected, perPage).catch((error) => {
      alert("Loading consultants failed " + error);
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <>
        {!isAuthenticated() ? (
          <div />
        ) : (
          <div className="container-fluid">
            <h2>Practices</h2>
            {this.props.loading ? (
              <Spinner />
            ) : (
              <div>
                <PracticeList practices={this.props.practices} />

                <ReactPaginate
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  subContainerClassName={"pages pagination"}
                />
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

PracticePage.propTypes = {
  practices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  perPage: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    practices: state.practices,
    loading: state.apiCallsInProgress > 0,
    perPage: 10,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPractices: bindActionCreators(
        practiceActions.loadPractices,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticePage);
