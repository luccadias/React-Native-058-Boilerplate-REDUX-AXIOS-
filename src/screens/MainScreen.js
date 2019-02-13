import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { actionName } from '../store/actions/index';
import { bindActionCreators } from 'redux';

class MainScreen extends Component {

    componentDidMount() {
        this.props.actionName('teste redux')
    }

    render() {
        return (
            <View>
                <Text> {this.props.testState} </Text>
            </View>
        )
    }
}

const mapStateToProps = store => ({
    testState: store.reducerName.testState
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ actionName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
