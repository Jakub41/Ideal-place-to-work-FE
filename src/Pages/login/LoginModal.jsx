import React from "react";
import ReactModalLogin from "react-modal-login";
import {facebookConfig, googleConfig} from "../login/social-config";
import Api from "../../Api"
import {connect} from "react-redux";
import User from "../../icons/User.png";
import ReactTooltip from "react-tooltip";
import "./Login.css"

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    setUserToken: base64 => dispatch({
        type: "SET_USERBASE64",
        payload: base64
    })
});


class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            loggedIn: null,
            loading: false,
            error: null,
            initialTab: null,
            errorText: "",
            recoverPasswordSuccess: null,
        };

    }

    onLogin() {
        console.log('__onLogin__');
        console.log('username: ' + document.querySelector('#username').value);
        console.log('password: ' + document.querySelector('#password').value);

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (!username || !password) {
            this.setState({
                error: true
            })
        } else {
            const base64usernameAndPassword = btoa(username + ":" + password);
            Api.fetch("/auth/login", 'POST', "", {
                "Authorization": "Basic " + base64usernameAndPassword
            })
                .then(res => {
                    console.log(res);
                    if (res.accessToken) {
                        this.onLoginSuccess('form');
                        localStorage.setItem("access_token", res.accessToken);
                        this.props.setUserToken(base64usernameAndPassword);
                        // TODO: redirect to home
                    }
                }).catch((error) => {
                this.setState({
                    error: true
                })
            })
        }
    }

    onRegister() {
        console.log('__onRegister__');

        console.log('username: ' + document.querySelector('#username').value);
        console.log('password: ' + document.querySelector('#password').value);

        const firstname = document.querySelector('#name').value;
        const lastname = document.querySelector('#surname').value;
        const email = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (!firstname || !lastname || !email || !password) {
            this.setState({
                error: true
            })
        } else {
            const base64usernameAndPassword = btoa(email + ":" + password);
            Api.fetch("/auth/register", 'POST', JSON.stringify({
                firstname, lastname, username: email,
                password
            }))

                .then(res => {
                    console.log(res);
                    if (res.user) {
                        this.onLoginSuccess('form');
                        localStorage.setItem("userBase64", base64usernameAndPassword);
                        this.props.setUserToken(base64usernameAndPassword);
                    }

                }).catch((res) => {
                console.log(res);
                this.setState({
                    error: true,
                    errorText: res.response?res.response.errors.message:null
                })

            })
        }
    }


    onRecoverPassword() {
        console.log('__onFotgottenPassword__');
        console.log('email: ' + document.querySelector('#username').value);

        const email = document.querySelector('username').value;


        if (!email) {
            this.setState({
                error: true,
                recoverPasswordSuccess: false
            })
        } else {
            this.setState({
                error: null,
                recoverPasswordSuccess: true
            });
        }
    }

    openModal(initialTab) {
        this.setState({
            initialTab: initialTab
        }, () => {
            this.setState({
                showModal: true,
            })
        });
    }

    onLoginSuccess(method, response) {

        this.closeModal();
        this.setState({
            loggedIn: method,
            loading: false
        })
    }

    onLoginFail(method, response) {

        this.setState({
            loading: false,
            error: response
        })
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    afterTabsChange() {
        this.setState({
            error: null,
            recoverPasswordSuccess: false,
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    render() {

        const isLoading = this.state.loading;

        return (
            <div>
                <ReactTooltip/>
                <img data-tip={this.state.loggedIn ? "You are signed in" : "You are signed out"} src={User} alt="Home"
                     onClick={() => this.openModal('login')}/>

                <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    loading={isLoading}
                    initialTab={this.state.initialTab}
                    error={this.state.error}
                    tabs={{
                        afterChange: this.afterTabsChange.bind(this)
                    }}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}
                    registerError={{label: this.state.errorText}}
                    form={{
                        onLogin: this.onLogin.bind(this),
                        onRegister: this.onRegister.bind(this),
                        onRecoverPassword: this.onRecoverPassword.bind(this),

                        recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
                            ? {
                                label: "New password has been sent to your mailbox!"
                            }
                            : null,
                        recoverPasswordAnchor: {
                            label: "Forgot your password?"
                        },
                        loginBtn: {
                            label: "Sign in"
                        },
                        registerBtn: {
                            label: "Sign up"
                        },
                        recoverPasswordBtn: {
                            label: "Send new password"
                        },
                        loginInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Username',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'username',
                                name: 'username',
                                placeholder: 'Username',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            }
                        ],
                        registerInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Name',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'name',
                                name: 'name',
                                placeholder: 'Name',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Surname',
                                type: 'text',
                                inputClass: 'RML-form-control',
                                id: 'surname',
                                name: 'surname',
                                placeholder: 'Surname',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'username',
                                name: 'username',
                                placeholder: 'Username',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            }
                        ],
                        recoverPasswordInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Email',
                            },
                        ],
                    }}
                    separator={{
                        label: "or"
                    }}
                    providers={{
                        facebook: {
                            config: facebookConfig,
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            inactive: isLoading,
                            label: "Continue with Facebook"
                        },
                        google: {
                            config: googleConfig,
                            onLoginSuccess: this.onLoginSuccess.bind(this),
                            onLoginFail: this.onLoginFail.bind(this),
                            inactive: isLoading,
                            label: "Continue with Google"
                        }
                    }}
                />
                {/*{loggedIn}*/}
            </div>

        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(LoginModal));

