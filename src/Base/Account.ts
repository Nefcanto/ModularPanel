// todo: redirect user to "403" page if his role is not equivalent to role in .env file
// https://keycloak.discourse.group/t/what-is-the-workflow-of-refreshing-the-token-in-an-api-client-scenario/12634/2
// https://github.com/dasniko/keycloak-reactjs-demo
import Keycloak from "keycloak-js"
import AccountProvider from "../AccountProvider"
import Globalization from "./Globalization";

let keycloak: any = null;

const Account: AccountProvider = {
    provider: () => {
        return keycloak || {};
    },
    token: () => {
        return Account.provider().token;
    },
    user: () => {
        if (Account.provider().tokenParsed["family_name"] || Account.provider().tokenParsed["given_name"]) {
            return Account.provider().tokenParsed["given_name"] + " " + Account.provider().tokenParsed["family_name"]
        } else {
            return Account.provider().tokenParsed.preferred_username;
        }
    },
    userGuid: () => {
        return Account.provider().subject;
    },
    checkSignInUrl: () => {
        if (typeof Account.provider().checkSignInUrl === "function") {
            const signInUrl = `${Account.provider().checkSignInUrl()}&kc_locale=${Globalization.getLocale().key}`
            console.log(signInUrl)
            return signInUrl
        }
        return "NA";
    },
    updateToken: async callback => {
        try {
            // Check if token needs to be refreshed
            const tokenRefreshed = await Account.provider().updateToken(4)
            if (tokenRefreshed) {
                // console.log("Token refreshed successfully");
            } else {
                // console.log("Token not refreshed, it is still valid");
            }
        } catch (error) {
            console.error("Failed to refresh token:", error);
            Account.checkSignIn()
        }
    },
    createAccountUrl: () => {
        if (typeof Account.provider().createAccountUrl === "function") {
            return Account.provider().createAccountUrl();
        }
        return "NA";
    },
    createSignOutUrl: () => {
        return Account.provider().createLogoutUrl();
    },
    signOut: () => {
        return Account.provider().logout();
    },
    role: () => {
        if (!Account.provider().tokenParsed) {
            return "User";
        }
        const role = Account.roles().filter(i => i.charAt(0) === i.charAt(0).toUpperCase());
        if (role.length > 0) {
            return role[0];
        }
        return "User";
    },
    roles: () => {
        let roles = Account.provider().tokenParsed.roles;
        if (!roles) {
            roles = Account.provider().tokenParsed.realm_access.roles;
        }
        if (!roles) {
            throw "Client mapper is not configured in KeyCloak"
        }
        return roles
    },
    isSuperAdmin: () => {
        if (!Account.provider().tokenParsed) {
            return false;
        }
        return Account.roles().includes("SuperAdmin");
    },
    checkSignIn: (callback) => {
        const conf = {
            url: window.settings.AccountsUrl,
            realm: window.settings.AccountsRealm,
            client: window.settings.AccountsClient
        };

        if (conf.url && conf.realm && conf.client) {
            keycloak = new Keycloak({
                url: conf.url,
                realm: conf.realm,
                clientId: conf.client,
                redirectUrl: document.location.origin
            });

            keycloak?.init({
                checkSignInIframe: false
            }).then(function (auth) {
                if (auth) {
                    window.security = keycloak;
                    // EventManager.emit(EventManager.accountUpdated);
                    if (callback && typeof callback === "function") {
                        callback();
                    }
                } else {
                    console.error("Not Authenticated");
                    keycloak.login();
                }
            }).catch(error => {
                console.log(error);
            });
        } else {
            throw new Error("Security is not configured.")
        }
    }
}

export default Account;
