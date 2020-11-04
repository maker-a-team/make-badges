import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import { AWARD_BADGE } from '../../constants/routes';

const AwardBadgePage = () => (
  <div id="content-wrap">
    <h1>AwardBadge</h1>
    <AwardBadgeForm />
  </div>
);

const INITIAL_STATE = {
  userID: '',
  badgeID: '',
  error: null,
};

class AwardBadgeFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { userID, badgeID } = this.state;

    this.props.firebase
      .doAwardBadge(userID, badgeID)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { userID, badgeID, error } = this.state;

    const isInvalid = userID = badgeID === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="userID"
          autoComplete="userID"
          value={this.state.userID}
          onChange={this.onChange}
          type="text"
          placeholder="User ID"
        />
        <input
          name="badgeID"
          autoComplete="badgeID"
          value={this.state.badgeID}
          onChange={this.onChange}
          type="text"
          placeholder="Badge ID"
        />
        <button disabled={isInvalid} type="submit">
          Earn This Badge
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const AwardBadgeLink = () => (
  <p>
    <Link to={AWARD_BADGE}>Apply For this Badge?</Link>
  </p>
);

export default AwardBadgePage;

const AwardBadgeForm = withFirebase(AwardBadgeFormBase);

export { AwardBadgeForm, AwardBadgeLink };
