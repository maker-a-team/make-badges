import React from "react";
import { Switch, Route } from "react-router-dom";
import { compose } from "recompose";
import * as r from '../../routes';

import './Badge.css'
import BadgeList from "./BadgeList";
import BadgeDetails from "./BadgeDetails";
import CreateBadgeForm from "./CreateBadgeForm";
import ImageUpload from "../UploadPage";

import { withAuthorization, withEmailVerification } from "../Session";

const BadgesPage = () => (
  <Switch>
    <Route exact path={r.BADGES} component={BadgeList} />
    <Route exact path={r.CREATE_BADGE_PHOTO} component={ImageUpload} />
    <Route exact path={r.CREATE_BADGE} component={CreateBadgeForm} />
    <Route exact path={r.BADGE_DETAILS} component={BadgeDetails} />
  </Switch>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(BadgesPage);
