# AO-mobile-app
Mobile app for Anishnabeg Outreach volunteer project.



## Project Setup

Required:
    - Node.js (v20.12.2 LTS is preferred)
    - Expo Go app from app store(IOS or Android)


After cloning down repo, CD into "AoMobileApp" folder run `npx expo start`. A QR code will be created in the terminal, scan using your phone and it should take you into the expo app showing the default screen. If you see "Open up App.js to start working on your app!" then it worked!

https://reactnative.dev/docs/environment-setup

## Errors

### PROBLEM: DeprecationWarning - 'punycode'

```(node:22281) [DEP0040] DeprecationWarning: The 'punycode' module is deprecated. Please use a userland alternative instead.
(Use 'node --trace-deprecation ...' to show where the warning was created)```

- Found 2 ways to resolve this issue, but changing the node version from the latest version to the LTS version is the only way the worked.  

Solution(Set Node to **V20.12.2 LTS** via * *Chocolatey in Windows Powershell* *):
    
    Step 1: In powershell enter `choco uninstall nodejs` . You may need to delete old node.js modules and files from C:programfiles & C:programfile(x86), if deleting files then restart machine just to be safe if it terminates running modules.

    Step 2: Enter `choco install nodejs.install --version 20.12.2`

    Step 3: Enter `node -v` to confirm version changed.

Chocolatey commands:

### PROBLEM: Expo Go  LAN URL connection error

```There was a problem loading the requested app. It looks like you may be using LAN URL. Make sure your device is on the sae network as the server or try using a tunnel.```

    Before proceeding with this solution ensure the Expo Go app has permission to access "Local Network" in your phones app settings and that VPN's are turned off. Rerun the `npx expo start command` if you had to change app settings.

    Solution(Run start command with tunnel flag)

    - After you completed the above steps with no success try entering `npx expo start --tunnel` 
    
    This is what worked for me and I didn't have to do any further digging.

https://stackoverflow.com/questions/56715203/there-was-problem-loading-requested-app-it-looks-like-you-may-be-using-lan-url/59155886#59155886





