# AO-mobile-app
Mobile app for Anishnabeg Outreach volunteer project.



## Project Setup

Required:
    - Node.js (v20.12.2 LTS is preferred)
    - Expo Go app from app store(IOS or Android)


After cloning down repo, CD into "AoMobileApp" folder run `npx expo start`. A QR code will be created in the terminal, scan using your phone and it should take you into the expo app showing the default screen. If you see "Open up App.js to start working on your app!" then it worked!

https://reactnative.dev/docs/environment-setup

## Errors

### PROBLEM: DeprecationWarning - "punycode"


`(node:22281) [DEP0040] DeprecationWarning: The 'punycode' module is deprecated. Please use a userland alternative instead.
(Use 'node --trace-deprecation ...' to show where the warning was created)`

- Found 2 ways to resolve this issue, but changing the node version from the latest version to the LTS version is the only way the worked.  

Solution(Set Node to **V20.12.2 LTS** via * *Chocolatey in Windows Powershell* *):
    
    Step 1: In powershell enter `choco uninstall nodejs` . You may need to delete old node.js modules and files from C:programfiles & C:programfile(x86), if deleting files then restart machine just to be safe if it terminates running modules.

    Step 2: Enter `choco install nodejs.install --version 20.12.2`

    Step 3: Enter `node -v` to confirm version changed.

Chocolatey commands:

### PROBLEM: Expo Go  LAN URL connection error

`There was a problem loading the requested app. It looks like you may be using LAN URL. Make sure your device is on the sae network as the server or try using a tunnel.`

    Before proceeding with this solution ensure the Expo Go app has permission to access "Local Network" in your phones app settings and that VPN's are turned off. Rerun the `npx expo start command` if you had to change app settings.

    Solution(Run start command with tunnel flag)

    - After you completed the above steps with no success try entering `npx expo start --tunnel` 
    
    This is what worked for me and I didn't have to do any further digging.

https://stackoverflow.com/questions/56715203/there-was-problem-loading-requested-app-it-looks-like-you-may-be-using-lan-url/59155886#59155886


## Notes

#### Tab Bar file structure

- Tab bar initiated, creating a "(tabs)" folder inside of the "app" folder. Also create TWO "_layout.js" files one outside of the "(tabs)" folder and another inside the "(tabs)" folder.

Inside (tabs) e.g. `app/(tabs)/_layout.js`

Outside (tabs) e.g. `app/_layout.js`

- may not need the outer "_layout.js" , but this works for right now.


#### Adding new tab to the tab bar

- First add a .js file into the (tabs) folder. 

Note that the name of the file will automatically become the new Route name. For example, "settings.js" will create a "/settings" route the app will automatically use.


```
<Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
```

- The code snippet above, shows how we will call the file into the "_layout.js". 

- "name" refers to name of file in (tabs)
- "title" refers to the display name the tab will have on the Tab Bar.

## Emotions Config File

Stores all data for the emotions in an array of objects.
**Location**: app/constants/emotions

### Emotion Properties

- text **(required)**: The label that will show under the emoji
- emoji **(required)**:  UTF-8 character encoding of the emoji
- video: URL of the video for the emotion (from AO website)
- secondary: An array of emotions nested in a Primary emotion representing its Secondary emotions
- tertiary: An array of emotions nested in a Secondary emotion representing its Tertiary emotions

### Structure

```
    [{
      text: 'Surprised',
      emoji: '0x1F631',
      video: 'https://play.vidyard.com/bgwR6Ai7DNBi4Ho7ykczD9.html?',
      secondary: [{
        text: 'Amazed',
        emoji: '0x1F632',
        tertiary: [
          {
            text: 'Astonished',
            emoji: '0x1F632',
          },
        ]
      },
    ]
```

### Remarks
The video links were taken from the AO website. If the locations of these videos change, the “video” properties must be updated with the new URLs.
