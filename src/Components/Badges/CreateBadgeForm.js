import React, { Component } from "react";

import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
import BadgeList from "./BadgeList";

class CreateBadgeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode:false,
      loading: false,

      limit: 25,
      category: "",
      description: "",
      image: "",
      link: "",
      name: "",
    };
  }

  componentDidMount() {
    this.onListenForBadges();
  }

  onListenForBadges = () => {
    this.setState({ loading: true });

    this.props.firebase
      .badges()
      .orderByChild("createdAt")
      .limitToLast(this.state.limit)
      .on("value", (snapshot) => {
        const badgeObject = snapshot.val();

        if (badgeObject) {
          const badgeList = Object.keys(badgeObject).map((key) => ({
            ...badgeObject[key],
            uid: key,
          }));

          this.setState({
            badges: badgeList,
            loading: false,
          });
        } else {
          this.setState({ badges: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.badges().off();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onCreateBadge = (event, authUser) => {
    this.props.firebase.badges().push({
      createdAt: this.props.firebase.serverValue.TIMESTAMP,

      category: this.state.category,
      description: this.state.description,
      image: this.state.image,
      link: this.state.link,
      name: this.state.name,
      ownerID: authUser,
    });

    this.setState({
      category: "",
      description: "",
      image: "",
      link: "",
      name: "",
    });

    event.preventDefault();
  };

  onEditBadge = (badge, category, description, image, link, name) => {
    const { uid, ...badgeSnapshot } = badge;

    this.props.firebase.badge(this.state.companyID, badge.uid).set({
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

  onNextPage = () => {
    this.setState(
      (state) => ({ limit: state.limit + 5 }),
      this.onListenForBadges
    );
  };

  render() {
    const {
      category,
      description,
      image,
      link,
      name,
      badges,
      loading,
    } = this.state;

    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div className="text-center">
            <h1>Create A New Badge</h1>

            <form onSubmit={(event) => this.onCreateBadge(event, authUser)}>
              <div className="">
                <div className="form-group ">
                  <input
                    className="form-control form-input col-10"
                    type="text"
                    placeholder="Badge Name"
                    value={name}
                    name="name"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-input col-10"
                    type="text"
                    placeholder="Badge Category"
                    value={category}
                    name="category"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-input col-10"
                    type="text"
                    placeholder="Badge Description"
                    value={description}
                    name="description"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-input col-10"
                    type="text"
                    placeholder="Badge Image URL"
                    value={image}
                    name="image"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-input col-10"
                    type="text"
                    placeholder="Badge Link"
                    value={link}
                    name="link"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  Add Badge
                </button>
              </div>
            </form>

            {loading && <div>Loading ...</div>}

            {badges && (
              <BadgeList
                authUser={authUser}
                badges={badges}
                onEditBadge={this.onEditBadge}
                onRemoveBadge={this.onRemoveBadge}
              />
            )}

            {!loading && badges && (
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this.onNextPage}
              >
                Show More
              </button>
            )}

            {!badges && <div>There are no badges ...</div>}
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(CreateBadgeForm);
