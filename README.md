# fbdevcircle
Dev Setup for React Native


# Setup environment for React Native (Prefered way for Code along)


  - Download and Install Node.js and npm 
  - Install Android Studio if you want to use react native on Android
  - Install Xcode for iOS
  - Set $JAVA_HOME environmental properly
  - Install react-native-cli
 ```sh
$ sudo npm install -g react-native-cli
```

# Alternative way to setup environment (Follow this if you are not able to setup the above env)

  - Install [Expo](https://docs.expo.io/versions/latest/introduction/installation.html) (110MB) Expo and it doesn't require Android Studio/ Xcode

# Testing the environment
 Creating react native project:
```sh
$ react-native init fbdevcircle
```

cd to the project directory:
```sh
$ cd fbdevcircle
```

Install dependency:
```sh
$  npm install
```

Running the server: 
```sh
$ react-native start
```
In another tab:
```sh
$ cd android/
$ sudo ./gradlew assembleDebug
```
if you see build successfull in the terminal, your good to go. Ping me @ [fahidroid@gmail.com](mailto://fahidroid@gmail.com) if you are not able to setup 

Refer this docs: https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies

For Account Kit:
  * Active FB Account
