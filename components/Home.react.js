import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ListView,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {connect} from 'react-redux'

import {TRENDS} from '../actionTypes/tweetConstants'
import {asyncRequest} from '../util/asyncUtil'

const {width, height} = Dimensions.get('screen')


class App extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: ds.cloneWithRows(props.trends.trends),
      loading: true
    }

    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrends('trends/place.json?id=23424908')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.trends.trends.length > 0) {
      return {
        dataSource: ds.cloneWithRows(nextProps.trends.trends),
        loading: false
      }
    }
    return null
  }

  renderRow(trend) { return <View style={styles.card}><Text style={styles.instructions}>{trend.name}</Text></View> }

  render() {
    if (this.state.loading || this.props.trends.loading)
      return <ActivityIndicator animating={this.state.loading || this.props.trends.loading} color='blue' size='large' />
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  trends: state.trends
})

const mapDispatchToProps = dispatch => ({
  fetchTrends: (endpoint) => dispatch(asyncRequest(TRENDS, endpoint))
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#F7F7F7',
  },
  card: {
    backgroundColor: '#FFFF',
    width: width * 0.9,
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
    height: height * 0.1,
    justifyContent: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
