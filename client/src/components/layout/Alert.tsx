import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from '../../actions/constants';

type Props = {
    alerts: any
}

const AlertView: React.FC<Props> = ({ alerts }) => 
    alerts !== null && alerts.length > 0 && alerts.map(({id, alertType, msg}: Message) => (
        <div key={id} className={`alert alert-${alertType}`}>
            { msg }
        </div>
    )
);

AlertView.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = (state: any) => ({
    alerts: state.alert
})

const Alert = connect(mapStateToProps)(AlertView)

export {
    Alert
};