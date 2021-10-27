import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import collectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={collectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
