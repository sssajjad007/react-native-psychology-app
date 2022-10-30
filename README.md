# react-native-psychology-app

The Psychology-app project (which I named Taskyn) is designed to manage Psychoanalytic psychotherapy sessions. It needs a server to run, which I put in a separate repo.

This source code consists of various elements and best practices I learned while going though apps written by various talented developers in the React Native Community ⚡

While this mostly consists of how I organize my projects but can be easily extended to suit any workflow 😄

If you face any issue then feel free to open a issue so we can solve it together 😃

Feel free to leave a ⭐ as motivation if this was useful to you 😄



## <a name="getting-started"></a>🚀 Getting Started:

1. Clone the repository, by tying this command in terminal

    ```sh
    git clone https://github.com/sssajjad007/react-native-psychology-app.git && cd react-native-psychology-app
    ```

    > **Optional**: Make sure to remove the existing git history and initialize the project with your own 

    ``` bash
    rm -rf .git/
    git init
    git add .
    git commit -m 'project init'
    git remote add origin <your remote repo>
    git push -u origin master
    ```

2. Install the dependencies 

    ```bash
    npm install && ( cd ios && pod install )
    ```

### For Android

Run the following command while the emulator is open or a device is connected via adb.

``` 
npx react-native run-android
```

### For iOS

Run the following commands to install pods and run the app on iPhone simulator

``` 
cd ios && pod install && cd ..
npx react-native run-ios
```




## <a name="Content"></a>📦 Content:

    - React Native (0.64.3)
    - Clean Directory Layout
    - Theme Implementation 
    - TypeScript
    - Custom Component
    - Feature Based Architecture
    - Packages:
        - Expo 44
        - Mobx
        - React Navigation (version 5)
        - React Native Vector Icons
        - Reanimated
        - Gesture Handler
        - mmkv
        
 ## <a name="RenameProject"></a>📝 Rename the project:

Rename the project with the name and bundle identifier of your choosing
**Note**: it is advised to do so in a new branch

``` 
git checkout -b rename
npx react-native-rename <new_name> -b <bundle_identifier>
```

## 🔔 Updates

To use my application, I will add mock data, update packages, add beautiful animation soon. :v:




