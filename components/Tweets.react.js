import React, {Component} from 'react'
import {ActivityIndicator, Dimensions, ListView, View, Text, Image, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {TWEETS} from '../actionTypes/tweetConstants'
import {asyncRequest} from '../util/asyncUtil'
import NotFound from './NotFound.react'

const {width, height} = Dimensions.get('screen')

class Tweets extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: ds.cloneWithRows(props.twitter.tweets),
      loading: true,
      twitterLoading: props.twitter.loading
    }

    this.renderRow = this.renderRow.bind(this)
  }

  componentDidMount() {
    const {query} = this.props.navigation.state.params

    this.props.fetchTweets(`search/tweets.json?q=${query}`)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.twitter.loading !== prevState.twitterLoading) {
      return {
        dataSource: ds.cloneWithRows(nextProps.twitter.tweets),
        loading: false
      }
    }
    return null
  }

  renderRow(tweet) {
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
        {tweet.extended_entities && tweet.extended_entities.media.length && <Image style={styles.image} source={{uri: tweet.extended_entities.media[0].media_url_https}} />}
      </View>
    )
  }

  render() {
    if (this.state.loading || this.props.twitter.loading) {
      return <ActivityIndicator animating={this.state.loading || this.props.twitter.loading} color='blue' size='large' />
    } else if (!this.props.twitter.tweets.length) {
      return <NotFound term={this.props.navigation.state.params.query} />
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
    justifyContent: 'flex-start',
    marginBottom: height * 0.01,
    width: width * 0.95,
    marginLeft: width * 0.02
  },
  cardHeader: {
    flexDirection: 'row'
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
  image: {
    width: width * 0.95,
    height: Math.round(width * 9 / 16)
  },
  thumbnail: {
    width: (width * 0.15),
    height: (width * 0.15),
    borderRadius: (width * 0.15) / 2,
    marginRight: width * 0.05
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweets)
