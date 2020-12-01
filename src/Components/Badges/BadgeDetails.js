import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class BadgeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      badge: null,
      AwardEarned: false,
      BADGE_ID: this.props.match.params.id,
      authUser: this.props.authUser,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.badge) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase.badge(this.state.BADGE_ID).on("value", (snapshot) => {
      this.setState({
        badge: snapshot.val(),
        AwardEarned: false,
        BADGE_ID: this.props.match.params.id,
        authUser: this.props.authUser,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.badge(this.state.BADGE_ID).off();
  }

  onSubmit = (event) => {
    const { authUser, BADGE_ID, badge } = this.state;
    
    this.props.firebase.doAwardBadge(authUser.uid, authUser.userName, BADGE_ID, badge.name)
    this.setState({ AwardEarned: true });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const { loading, badge, AwardEarned } = this.state;

    return (
      <div id="content-wrap" className="BadgeDetailsPage">
        {loading && <div>Loading ...</div>}

        {badge && (
          <div className="Badge-info">
            <h3>Badge ({this.state.BADGE_ID})</h3>
            <img
              className={(AwardEarned && "Earned") || "Badge-image"}
              src={badge.image}
              alt="badge"
            />
            <strong>Badge Name:</strong> {badge.name}
            <br />
            <strong>Badge Description:</strong> {badge.description}
            <br />
            <strong>Badge Category:</strong> {badge.category}
            <br />
            <a href={badge.link}>Badgr Page for this Badge</a>
            <br />
            <br />
            <br />
            Have you earned this award yet:
            {("Yes" && AwardEarned) ||
              ("No" && (
                <button onClick={this.onSubmit} type="submit">
                  Earn This Badge
                </button>
              ))}
            <br />
            <label>
              Overide Request:
              <input
                name="AwardEarned"
                type="checkbox"
                checked={AwardEarned}
                onChange={this.onChangeCheckbox}
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(BadgeItem);
