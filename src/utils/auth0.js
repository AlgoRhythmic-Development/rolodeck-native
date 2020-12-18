import React from "react";
import { AuthSession } from "expo";
const auth0Domain = "https://dev-9860cwcx.us.auth0.com";
const auth0ClientId = "MA6N01sa3Mx6y1bvREwgIODWR10oj4RH";

class Auth0Login extends React.Component<Props, State> {
  _loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    let authUrl =
      `${auth0Domain}/authorize` +
      toQueryString({
        client_id: auth0ClientId,
        response_type: "token",
        scope: "openid profile email",
        redirect_uri: redirectUrl,
      });
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
    console.log(`AuthURL is:  ${authUrl}`);
    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    });

    if (result.type === "success") {
      console.log(result);
      let token = result.params.access_token;
      this.props.setToken(token);
      this.props.navigation.navigate("Next Screen");
    }
  };

  render() {
    return (
      <Login
        navigation={this.props.navigation}
        onLogin={() => this._loginWithAuth0()}
      />
    );
  }
}

export default Auth0Login;
