import React, { Component } from "react";

class Profile extends Component {
  state = {
    profile: null,
    error: "",
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }

  render() {
    const { profile } = this.state;
    if (!profile) return <><div></div></>;
    return (
      
        <div className="container-fluid p-2">
            <div className="card">
                <div className="card-header">
                    <h2>Profile</h2>
                    <p>{profile.nickname}</p>
                </div>
                <div className="card-body">
                    <img style={{ maxWidth: 50, maxHeight: 50 }}
                    src={profile.picture}
                    alt="profile picture"
                    />
                    <pre>{JSON.stringify(profile, null, 2)}</pre>
                </div>
            </div>
        </div>

      
    );
  }
}

export default Profile;
