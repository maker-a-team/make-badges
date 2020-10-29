import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class BadgeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      badge: null,
      AwardEarned: false,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.badge) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase.badge(this.props.match.params.id)
      .on("value", (snapshot) => {
        this.setState({
          badge: snapshot.val(),
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.badge(this.props.match.params.id).off();
  }

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
    // this.props.firebase.badge(this.props.match.params.id).push({"winner": this.state.authUser.uid});
  };

  render() {
    const { loading, badge, AwardEarned } = this.state;

    return (
      <div className="BadgeDetailsPage">
        {loading && <div>Loading ...</div>}

        {badge && (
          <div className="Badge-info">
            <h2>Badge ({this.props.match.params.id})</h2>
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
            <label>
              Earn this Award:
              <input
                name="AwardEarned"
                type="checkbox"
                checked={AwardEarned}
                onChange={this.onChangeCheckbox}
              />
            </label>
            <br />
            Have you earned this award yet: {(AwardEarned && "Yes") || "No"}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(BadgeItem);
