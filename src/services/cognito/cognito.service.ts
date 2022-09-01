// import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
  CognitoUserPool,
  ICognitoUserData,
} from 'amazon-cognito-identity-js';
import { CONFIG } from "../../shared/config"
import { NextPageContext } from "next"
// import useCookies from "../../hooks/forms/useCookieStorage/cookies.hook"

class CognitoServices {
  private readonly userPool: CognitoUserPool;

  constructor(ctx?: NextPageContext) {
    // this.storage = useCookies();

    this.userPool = new CognitoUserPool({
      UserPoolId: CONFIG.COGNITO_USER_POOL_ID,
      ClientId: CONFIG.COGNITO_CLIENT_ID,
      // Storage: this.storage
    });
  }

  // Returns new instance on server and singleton on client
  // public static getInstance = (ctx?: NextPageContext) => {
  //   return NextUtil.isServer
  //     ? new CognitoServices(ctx)
  //     : SingletonCognitoService;
  // };

  // private _getCurrentUser = async (): Promise<CognitoUser | null> => {
  //   return this.userPool.getCurrentUser();
  // };

  private _getUserData = (email: string): ICognitoUserData => {
    return {
      Username: email,
      Pool: this.userPool,
      // Storage: this.storage
    };
  };

  public async authenticate(
    email: string,
    password: string
  ): Promise<CognitoUserSession> {
    // const storage = new CookieStorage();

    const authData = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    const userData = this._getUserData(email);

    const cognitoUser = new CognitoUser(userData);

    return new Promise((res, rej) => {
      cognitoUser.authenticateUser(authData, {
        onSuccess(session, userConfirmationNecessary) {
          if (userConfirmationNecessary) {
            rej({ userConfirmationNecessary });
          }
          res(session);
        },

        onFailure(error) {
          rej(error);
        }
      });
    });
  }
}
export default CognitoServices;