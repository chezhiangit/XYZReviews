import * as React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseStyles from '../../CommonComponents/BaseStyles';
import I18n from '../../Localization/i18n';
import Footer from '../../CommonComponents/Footer/footerComponent';
import EmailInputComponent from '../../CommonComponents/Email/emailInputComponent';
import PasswordInputComponent from '../../CommonComponents/Password/passwordInputComponent';
import PrimaryButton from '../../CommonComponents/PrimaryButton/primaryButton';
import LinkBtnComponent from '../../CommonComponents/LinkBtn/linkBtnComponent';
import styles from './styles';
import {authenticateUser} from '../../AppActions/ComponentActions/Login/loginActions';
import WarningDialog from '../../CommonComponents/WarningDialog/warningDialog';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      error: '',
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
  }

  onSubmitLogin = () => {
    if (this.state.userName === '' || this.state.password === '') {
      this.setState({
        showDlg: true,
        dlgMsg: I18n.t('login.errorMsg'),
      });
      return;
    }

    this.setState({isLoading: true});
    const userCredential = {
      userName: this.state.userName,
      password: this.state.password,
    };
    console.log('onSubmitLogin....', userCredential);
    // this.props.authenticateUser(
    //   userCredential,
    //   this.onLoginSuccess,
    //   this.onLoginFailed,
    // );
  };

  onLoginSuccess = () => {
    this.setState({isLoading: false});
  };

  onLoginFailed = errorMsg => {
    this.setState({isLoading: false, dlgMsg: errorMsg, showDlg: true});
    console.log(errorMsg);
  };

  onSignUp = () => {
    // this.props.navigation.navigate('UserRegistration');
  };

  onForgotPassword = () => {
    // this.props.navigation.navigate('ForgotPassword');
  };

  onEmailEntered = userName => {
    console.log('userName ...', userName);
    this.setState({
      userName,
    });
  };

  onPassworEntered = password => {
    console.log('password ...', password);
    this.setState({
      password,
    });
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    // this.setState({showDlg: false, userName: '', password: ''});
    this.setState({showDlg: false});
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <Header headerName={I18n.t('login.headerTitle')} /> */}
        <View style={styles.loginViewContainer}>
          <View style={styles.loginUserInfo}>
            <Text style={styles.loginUserInfoTxt}>
              {I18n.t('login.userInfo')}
            </Text>
          </View>
          <EmailInputComponent
            placeholder={I18n.t('login.emailPlaceHolder')}
            autoFocus={false}
            onEmailEntered={this.onEmailEntered}
            email={this.state.userName}
          />
          <PasswordInputComponent
            placeholder={I18n.t('login.passwordPlaceHolder')}
            autoFocus={false}
            onPassworEntered={this.onPassworEntered}
            password={this.state.password}
          />
          <View style={styles.signinContainer}>
            <PrimaryButton
              btnName={I18n.t('login.loginBtnName')}
              onSubmit={this.onSubmitLogin}
            />
            <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent
              btnName={I18n.t('login.signUpNow')}
              onClick={this.onSignUp}
            />
            <LinkBtnComponent
              btnName={I18n.t('login.forgotPwd')}
              onClick={this.onForgotPassword}
            />
          </View>
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from login ', state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  authenticateUser: (userCredential, onSuccessCallback, onErrorCallback) =>
    dispatch(
      authenticateUser(userCredential, onSuccessCallback, onErrorCallback),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
