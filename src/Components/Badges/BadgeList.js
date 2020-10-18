import React, { Component } from 'react';

import { AuthUserContext } from "../Session";
import { withFirebase } from '../Firebase';
import BadgeItem from './BadgeItem';

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

    this.props.firebase.badges().on("value", (snapshot) => {
      const badgesObject = snapshot.val();

      if (badgesObject) {
        const badgesList = Object.keys(badgesObject).map((key) => ({
          ...badgesObject[key],
          uid: key,
        }));

        this.setState({
          badges: badgesList,
          loading: false,
        });
      } else {
        this.setState({ badges: null, loading: false });
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.badges().off();
  }

  onEditBadge = (badge, category, description, image, link, name) => {
    const { uid, ...badgeSnapshot } = badge;

    this.props.firebase.badge(badge.uid).set({
      ...badgeSnapshot,
      category,
      description,
      image,
      link,
      name,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveBadge = (uid) => {
    this.props.firebase.badge(uid).remove();
  };

  render() {
    const { badges, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div>
            <h2>Badge List</h2>

            {loading && <div>Loading ...</div>}

            {badges && (
              <ul className="BadgeList">
                {badges.map((badge) => (
                  <BadgeItem
                    authUser={authUser}
                    key={badge.uid}
                    badge={badge}
                    onEditBadge={this.onEditBadge}
                    onRemoveBadge={this.onRemoveBadge}
                  />
                ))}
              </ul>
            )}

            {!badges && <div>There are no badges ...</div>}
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(BadgeList);
