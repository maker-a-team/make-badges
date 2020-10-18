import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class BadgeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      badge: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.badge) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase
      .badge(this.props.match.params.id)
      .on('value', snapshot => {
        this.setState({
          badge: snapshot.val(),
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.badge(this.props.match.params.id).off();
  }

  render() {
    const { badge, loading } = this.state;

    return (
      <div>
        {loading && <div>Loading ...</div>}

        {badge && (
          <div className="Badge">
            <h2>Badge ({this.props.match.params.id})</h2>
            <div>
              <img className="Badge-image" src={`${process.env.PUBLIC_URL}images/${badge.image}`} alt="badge" /><br />
            </div>

            <strong>Badge Name:</strong> {badge.name}
            <br />
            <strong>Badge Description:</strong> {badge.description}
            <br />
            <strong>Badge Category:</strong> {badge.category}
            <br />
            <a href={badge.link}>Badgr Page for this Badge</a>
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(BadgeItem);


// "category": "React",
// "description": "Earn this badge by completing the React + Redux Tetris Tutorial",
// "id": 3,
// "image": "react/react-tutorial-tetris.png",
// "link": "https://badgr.com/public/badges/wJj8D6zAQ5u_bVDKtG2NtQ",
// "name": "React + Redux Tetris Tutorial"