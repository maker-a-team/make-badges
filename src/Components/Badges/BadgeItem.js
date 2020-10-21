import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import * as r from "../../constants/routes";

class BadgeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editBadgeCategory: this.props.badge.category,
      editBadgeDescription: this.props.badge.description,
      editBadgeImage: this.props.badge.image,
      editBadgeLink: this.props.badge.link,
      editBadgeName: this.props.badge.name,
    };
  }

  onToggleEditMode = () => {
    this.setState((state) => ({
      editMode: !state.editMode,
      editBadgeCategory: this.props.badge.category,
      editBadgeDescription: this.props.badge.description,
      editBadgeImage: this.props.badge.image,
      editBadgeLink: this.props.badge.link,
      editBadgeName: this.props.badge.name,
    }));
  };

  onChangeEditBadge = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSaveEditBadge = () => {
    this.props.onEditBadge(
      this.props.badge,
      this.state.editBadgeCategory,
      this.state.editBadgeDescription,
      this.state.editBadgeImage,
      this.state.editBadgeLink,
      this.state.editBadgeName
    );

    this.setState({ editMode: false });
  };

  render() {
    const { authUser, badge, onRemoveBadge } = this.props;
    const {
      editMode,
      editBadgeCategory,
      editBadgeDescription,
      editBadgeImage,
      editBadgeLink,
      editBadgeName,
    } = this.state;

    return (
      <li key={badge.uid} className="row">
        {editMode ? (
          <div className="text-center">
            <input
              type="text"
              className="form-control form-input col-10"
              placeholder="Name Your Badge!"
              value={editBadgeName}
              name="editBadgeName"
              onChange={this.onChangeEditBadge}
            />
            <input
              type="text"
              className="form-control form-input col-10"
              placeholder="Badge's Category?"
              value={editBadgeCategory}
              name="editBadgeCategory"
              onChange={this.onChangeEditBadge}
            />
            <input
              type="text"
              className="form-control form-input col-10"
              placeholder="Badge's Description?"
              value={editBadgeDescription}
              name="editBadgeDescription"
              onChange={this.onChangeEditBadge}
            />
            <input
              type="text"
              className="form-control form-input col-10"
              placeholder="Badge's Image URL?"
              value={editBadgeImage}
              name="editBadgeImage"
              onChange={this.onChangeEditBadge}
            />
            <input
              type="text"
              className="form-control form-input col-10"
              placeholder="Badge's Badgr Link?"
              value={editBadgeLink}
              name="editBadgeLink"
              onChange={this.onChangeEditBadge}
            />
          </div>
        ) : (
          <div className="Badge col-10">
            <strong>category: </strong> {badge.category}
            <br />
            <strong>name: </strong> {badge.name}
            <br />
            <strong>description: </strong> {badge.description}
            <br />
            <img
              className="Badge-image"
              src={`${badge.image}`}
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
            <p className="comp-item">
              <sub>{badge.editedAt && <span>(Edited)</span>}</sub>
            </p>
            <hr />
          </div>
        )}

        {authUser.uid === badge.ownerID && (
          <div className="">
            {editMode ? (
              <div className="justify-me">
                <button
                  className="btn btn-secondary btn-bot"
                  onClick={this.onSaveEditBadge}
                >
                  Save Changes
                </button>
                <button
                  className="btn btn-secondary btn-bot"
                  onClick={this.onToggleEditMode}
                >
                  Cancel Edit
                </button>
              </div>
            ) : (
              <div>
                <button className="btn-li" onClick={this.onToggleEditMode}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="btn-li"
                  onClick={() => onRemoveBadge(badge.uid)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            )}
          </div>
        )}
      </li>
    );
  }
}

export default BadgeItem;
