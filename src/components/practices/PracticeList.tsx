import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Practice } from 'model/core';

const PracticeList = ({ practices }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Code</th>
        <th>Postcode</th>
      </tr>
    </thead>
    <tbody>
      {practices.map((practice:Practice) => {
        return (
          <tr key={practice.id}>
            <td>{practice.id}</td>
            <td>{practice.name}</td>
            <td>{practice.code}</td>
            <td>{practice.postcode}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

PracticeList.propTypes = {
  practices: PropTypes.array.isRequired,
};

export default PracticeList;
