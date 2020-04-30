import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Practice } from "model/core";

function PracticeList({ practices }) {
  const [filtered, setFiltered] = useState([...practices]);

  const onChange = (event) => {
    const { value } = event.target;
    if (value.length !== 0) {
      let ss = value.trim().toLowerCase();
      let ff = practices.filter((p: Practice) => {
        return (
          p.name.toLowerCase().indexOf(ss) >= 0 ||
          p.code.toLowerCase().indexOf(ss) >= 0
        );
      });
      setFiltered(ff);
    } else {
      setFiltered(practices);
    }
  };

  return (
    <>
      <input
        className="form-control"
        id="consultantSearch"
        type="text"
        placeholder="Search.."
        onChange={onChange}
      />
      <br />
      <table className="table table-sm table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Postcode</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((practice: Practice) => {
            return (
              <tr key={practice.id}>
                <th scope="row">{practice.name}</th>
                <td>{practice.code}</td>
                <td>{practice.postcode}</td>
                <td>{practice.address}</td>
                <td>{practice.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

PracticeList.propTypes = {
  practices: PropTypes.array.isRequired,
};

export default PracticeList;
