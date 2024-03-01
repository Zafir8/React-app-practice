import PropTypes from 'prop-types';

function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign up.</h1>;

    
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
};

export default UserGreeting;