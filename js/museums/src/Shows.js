import React from 'react';
import Table from 'react-bootstrap/lib/Table';

const propTypes = {
  shows: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      museumName: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      startDate: React.PropTypes.string.isRequired,
      endDate: React.PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

function Shows({ shows }) {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Museum name</th>
          <th>Name</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
      </thead>

      <tbody>
        {shows.map(show => (
          <tr key={JSON.stringify(show)}>
            <td>{show.museumName}</td>
            <td>{show.name}</td>
            <td>{show.startDate}</td>
            <td>{show.endDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

Shows.propTypes = propTypes;

export default Shows;
