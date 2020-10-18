import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as r from '../../constants/routes';

class BadgeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      badges: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.badges().on('value', snapshot => {
      const badgesObject = snapshot.val();

      const badgesList = Object.keys(badgesObject).map(key => ({
        ...badgesObject[key],
        uid: key,
      }));

      this.setState({
        badges: badgesList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.badges().off();
  }

  render() {
    const { badges, loading } = this.state;

    return (
      <div>
        <h2>Badge List</h2>

        {loading && <div>Loading ...</div>}

        <ul className="BadgeList">
          {badges.map((badge) => (
            <li key={badge.uid} className="Badge">
              <strong>category: </strong> {badge.category}
              <br />
              <strong>name: </strong> {badge.name}
              <br />
              <strong>description: </strong> {badge.description}
              <br />
              <img
                className="Badge-image"
                src={`${process.env.PUBLIC_URL}images/${badge.image}`}
                alt="badge"
              />
              <br />
              <Link
                to={{
                  pathname: `${r.BADGES}/${badge.uid}`,
                  state: { badge },
                }}
              >
                Details
              </Link>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withFirebase(BadgeList);
