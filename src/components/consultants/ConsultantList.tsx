import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consultant } from "model/core";

function ConsultantList({ consultants }) {
  const [filtered, setFiltered] = useState([...consultants]);

  const onChange = (event) => {
    const { value } = event.target;
    if (value.length !== 0) {
      let ss = value.trim().toLowerCase();
      let ff = consultants.filter((c: Consultant) => {
        return c.name.toLowerCase().indexOf(ss) >= 0 || c.gmc.toLowerCase().indexOf(ss) >=0;
      });
      setFiltered(ff);
    } else {
      setFiltered(consultants);
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
      <table className="table table-sm table-striped bg-info">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>GMC Code</th>
            <th>Practices</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((consultant: Consultant) => {
            return (
              <tr key={consultant.id}>
                <th scope="row">{consultant.name}</th>
                <td>{consultant.gmc}</td>
                <td>{consultant.practices}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

ConsultantList.propTypes = {
  consultants: PropTypes.array.isRequired,
};

export default ConsultantList;
