import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions'


export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { currentUser } = this.props

    if(currentUser == undefined) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{currentUser.name} is loggedin</Text>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
