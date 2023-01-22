/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // AutoTheme.getTheme(function (isdark) {
    //     console.log("Is dark mode: " + isdark)
    // })
    //    window.onThemeChange = function(isdark) {
    //     console.log("Dark mode changed. Is dark mode: "+isdark)
    // }
    // window.matchMedia('(prefers-color-scheme:dark)').addListener(function() {
    //     var isdark = window.matchMedia('(prefers-color-scheme:dark)').matches;
    // });
 
    window.open = cordova.InAppBrowser.open;
    //alert(`Running cordova-${cordova.platformId}@${cordova.version}`);
    var ref = cordova.InAppBrowser.open('https://pongvarid.github.io/probation_client_nuxt', '_blank', 'hidenavigationbuttons=yes,location=no,zoom=no,toolbar=no,fullscreen=yes,mediaPlaybackRequiresUserAction=no,allowInlineMediaPlayback=yes');
  
    ref.show();
}
