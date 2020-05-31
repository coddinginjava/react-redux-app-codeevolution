import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

const UserContainer = ({ userData, fetchUsersDispatch }) => {
  useEffect(() => {
    fetchUsersDispatch();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>userData.error</h2>
  ) : (
    <div>
      <h2>userList</h2>
      <div>
        {userData.users && userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersDispatch: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
