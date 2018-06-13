import React, {Component} from 'react'
import {ActivityIndicator, Dimensions, ListView, View, Text, Image, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {TWEETS} from '../actionTypes/tweetConstants'
import {asyncRequest} from '../util/asyncUtil'

const {width, height} = Dimensions.get('screen')

class Tweets extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: ds.cloneWithRows(props.twitter.tweets),
      loading: true
    }

    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    const {query} = this.props.navigation.state.params

    this.props.fetchTweets(`search/tweets.json?q=${query}`)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.twitter.tweets.length > 0) {
      return {
        dataSource: ds.cloneWithRows(nextProps.twitter.tweets),
        loading: false
      }
    }
    return null
  }

  renderRow(tweet) {
    console.log(tweet.user)
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.thumbnail} source={{uri: `${tweet.user.profile_image_url_https}`}} />
          <View>
            <Text style={styles.text}>{tweet.user.name}</Text>
            <Text style={styles.note}>{tweet.user.location}</Text>
          </View>
        </View>
        <Text>{tweet.text}</Text>
        {/* {tweet.media.length && <Image source={{uri: tweet.medis[0].media_url_https}} />} */}
      </View>
    )
  }

  render() {
    if (this.state.loading || this.props.twitter.loading) {
      return <ActivityIndicator animating={this.state.loading || this.props.twitter.loading} color='blue' size='large' />
    }
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
  twitter: state.tweets
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: endpoint => dispatch(asyncRequest(TWEETS, endpoint))
})

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFF',
    height: height * 0.28,
    marginBottom: height * 0.01
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#F7F7F7'
  },
  note: {
    fontSize: 12,
    color: 'grey'
  },
  text: {
    fontSize: 15
  },
  thumbnail: {
    width: (width * 0.15),
    height: (width * 0.15),
    borderRadius: (width * 0.15) / 2
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweets)
