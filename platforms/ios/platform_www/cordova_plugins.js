cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.tmantman.nativecamera.Camera",
    "file": "plugins/com.tmantman.nativecamera/www/CameraConstants.js",
    "pluginId": "com.tmantman.nativecamera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "com.tmantman.nativecamera.CameraPopoverOptions",
    "file": "plugins/com.tmantman.nativecamera/www/CameraPopoverOptions.js",
    "pluginId": "com.tmantman.nativecamera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "com.tmantman.nativecamera.camera",
    "file": "plugins/com.tmantman.nativecamera/www/Camera.js",
    "pluginId": "com.tmantman.nativecamera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "com.wezka.nativecamera.Camera",
    "file": "plugins/com.wezka.nativecamera/www/CameraConstants.js",
    "pluginId": "com.wezka.nativecamera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "com.wezka.nativecamera.CameraPopoverOptions",
    "file": "plugins/com.wezka.nativecamera/www/CameraPopoverOptions.js",
    "pluginId": "com.wezka.nativecamera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "com.wezka.nativecamera.camera",
    "file": "plugins/com.wezka.nativecamera/www/Camera.js",
    "pluginId": "com.wezka.nativecamera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-background-geolocation.BackgroundGeoLocation",
    "file": "plugins/cordova-plugin-background-geolocation/www/BackgroundGeoLocation.js",
    "pluginId": "cordova-plugin-background-geolocation",
    "clobbers": [
      "plugins.backgroundGeoLocation"
    ]
  },
  {
    "id": "cordova-plugin-console.console",
    "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "console"
    ]
  },
  {
    "id": "cordova-plugin-console.logger",
    "file": "plugins/cordova-plugin-console/www/logger.js",
    "pluginId": "cordova-plugin-console",
    "clobbers": [
      "cordova.logger"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.iosFileSystem",
    "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-is-debug.IsDebug",
    "file": "plugins/cordova-plugin-is-debug/www/isDebug.js",
    "pluginId": "cordova-plugin-is-debug",
    "clobbers": [
      "cordova.plugins.IsDebug"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
    "file": "plugins/cordova-plugin-request-location-accuracy/www/ios/RequestLocationAccuracy.js",
    "pluginId": "cordova-plugin-request-location-accuracy",
    "clobbers": [
      "cordova.plugins.locationAccuracy"
    ]
  },
  {
    "id": "cordova-plugin-qr-barcode-scanner.BarcodeScanner",
    "file": "plugins/cordova-plugin-qr-barcode-scanner/www/barcodescanner.js",
    "pluginId": "cordova-plugin-qr-barcode-scanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "cordova-gmv-barcode-scanner.cordova-gmv-barcode-scanner",
    "file": "plugins/cordova-gmv-barcode-scanner/www/main.js",
    "pluginId": "cordova-gmv-barcode-scanner",
    "clobbers": [
      "cordova.plugins.gmv-barcode-scanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.tmantman.nativecamera": "0.1.9",
  "com.wezka.nativecamera": "0.1.2",
  "cordova-plugin-android-permissions": "1.0.0",
  "org.apache.cordova.geolocation": "0.3.6",
  "cordova-plugin-background-geolocation": "1.0.6",
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-dialogs": "1.2.1",
  "cordova-plugin-file": "6.0.1",
  "cordova-plugin-is-debug": "1.0.0",
  "cordova-plugin-screen-orientation": "3.0.1",
  "cordova-plugin-statusbar": "2.1.3",
  "cordova-plugin-whitelist": "1.2.2",
  "es6-promise-plugin": "4.2.2",
  "phonegap-plugin-push": "1.11.1",
  "cordova-plugin-request-location-accuracy": "2.3.0",
  "cordova-plugin-qr-barcode-scanner": "8.0.3",
  "cordova-gmv-barcode-scanner": "1.4"
};
// BOTTOM OF METADATA
});