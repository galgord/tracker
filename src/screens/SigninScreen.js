import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign in to your account."
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Login"
            />
            <NavLink
                text="Don't Have an account? Signup instead."
                routeName="Signup"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SigninScreen