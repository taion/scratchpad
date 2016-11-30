import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Grid from 'react-bootstrap/lib/Grid';

import Shows from './Shows';

import { museums, shows } from './data.json';

const MUSEUMS_BY_NAME = {};
museums.forEach((museum) => {
  MUSEUMS_BY_NAME[museum.name] = museum;
});

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      museumName: null,
      name: null,
      date: null,
      endDate: null,
    };
  }

  onChangeMuseumName = (e) => {
    this.setState({ museumName: e.target.value });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeDate = (e) => {
    this.setState({ date: e.target.value });
  };

  renderFieldGroup(id, label, type, onChange) {
    return (
      <FormGroup controlId={id}>
        <Col componentClass={ControlLabel} sm={3}>
          {label}
        </Col>
        <Col sm={9}>
          <FormControl type={type} onChange={onChange} />
        </Col>
      </FormGroup>
    );
  }

  render() {
    const { museumName, name, date } = this.state;
    let filteredShows = shows;

    if (museumName) {
      filteredShows = filteredShows.filter(show => (
        show.museumName.toLowerCase().indexOf(museumName.toLowerCase()) !== -1
      ));
    }
    if (name) {
      filteredShows = filteredShows.filter(show => (
        show.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      ));
    }
    if (date) {
      filteredShows = filteredShows.filter(show => (
        show.startDate <= date && show.endDate >= date
      ));
    }

    return (
      <Grid>
        <Form horizontal>
          {this.renderFieldGroup(
            'museumName', 'Museum name', 'string', this.onChangeMuseumName,
          )}
          {this.renderFieldGroup(
            'name', 'Name', 'string', this.onChangeName,
          )}
          {this.renderFieldGroup(
            'date', 'Date', 'date', this.onChangeDate,
          )}
        </Form>

        <Shows shows={filteredShows} />
      </Grid>
    );
  }
}

export default App;
