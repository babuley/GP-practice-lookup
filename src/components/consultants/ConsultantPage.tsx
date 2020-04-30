import * as React from "react";
import * as consultantActions from "../../redux/actions/consultantActions";
import ConsultantList from "./ConsultantList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

class ConsultantPage extends React.Component {
  state = {
    pageCount: 10
  };

  componentDidMount() {
    const { consultants, actions, perPage } = this.props;

    if (consultants.length === 0) {
      actions.loadConsultants(0,perPage).catch((error) => {
        alert("Loading consultants failed " + error);
      });
    }
  }

  handlePageClick = (data) => {
    const { actions, perPage } = this.props;
    let selected = data.selected;  
    actions.loadConsultants(selected, perPage).catch((error) => {
      alert("Loading consultants failed " + error);
    });
  };

  render() {
    return (
      <>
        <h2>Consultants</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <ConsultantList consultants={this.props.consultants} />
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
      </>
    );
  }
}

ConsultantPage.propTypes = {
  consultants: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  perPage: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    consultants: state.consultants,
    loading: state.apiCallsInProgress > 0,
    perPage: 10,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadConsultants: bindActionCreators(
        consultantActions.loadConsultants,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsultantPage);
