# Twitter-Trends
Mobile Application that consumes Twitter's API to provide features as follows
- Fetch all trends in Nigeria.
- Fetch tweets associated to a trend.
- Search for tweets.

# Getting Started
## Prerequisite
- Mac OS X
  - Homebrew
  - NodeJS
  - Yarn (Optional)
- Windows
  - NodeJS
  - Yarn (Optional)
## Requirements
- Mac OS X
  - Download Xcode v9 and above from `App Store`
  - Download Android Studio (Optional)
  - Install `watchman` with `$ brew install watchman`
  - Install `react-native-cli` with `$ npm i -g react-native-cli`
- Windows
  - Download Android Studio (Optional)
  - Install `watchman` [here](https://facebook.github.io/watchman/docs/install.html)
  - Install `react-native-cli` with `$ npm i -g react-native-cli`
## Installation
- Ensure you have completed all the steps above
- Clone this repository
- Change directory with `$ cd Twitter-Trends`
- Install dependencies with `$ npm i` or `$ yarn`
- Add `settings.json` to `private/data/` as described in `private/data/settings.example.json`

# Usage
- iOS

  ### React-Native CLI
  - `$ react-native run-ios`

  ### Xcode
  - Open `ios/`
  - Find `trends.xcodproj`
  - Click `play` icon in Xcode

- Android
  ### React Native CLI
  - `$ react-native run-android`
  ### Android Studio
  - Open `android/` in Android Studio
  - Allow `gradle` build to be completed

  # External Resources
  - Android APK can be downloaded [here](https://drive.google.com/file/d/1ujTebXiO_wv4U98t9EsqXe-TbRI1tjF6/view)