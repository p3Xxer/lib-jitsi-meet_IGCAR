/* global $, JitsiMeetJS */
// const WebSocket = new WebSocket.server({server});

// const wss = new WebSocket.Server({server:server});
// wss.on('connection', function connection(ws){
//     console.log('A new client Connected!')
//     ws.send ("Welcome New Clinet!");
//     ws.on('message',function incoming(message) {
//     console.log('received: %s', message);
//     });
// });
var subdomain = "";
if (subdomain) {
    subdomain = subdomain.substr(0, subdomain.length - 1).split('.').join('_').toLowerCase() + '.';
}
const options = {
    hosts: {
        domain: 'meet.jit.si',

        muc: 'conference.' + subdomain + 'meet.jit.si', // FIXME: use XEP-0030
        focus: 'focus.meet.jit.si',
    },
    serviceUrl: 'wss://meet.jit.si/xmpp-websocket',
    disableSimulcast: false,
    enableRemb: true,
    enableTcc: true,
    resolution: 720,
    constraints: {
        video: {
            height: {
                ideal: 720,
                max: 720,
                min: 180
            },
            width: {
                ideal: 1280,
                max: 1280,
                min: 320
            }
        }
    },
    enableInsecureRoomNameWarning: true,
    externalConnectUrl: 'https://meet.jit.si/http-pre-bind',
    analytics: {
        amplitudeAPPKey: "fafdba4c3b47fe5f151060ca37f02d2f",
        whiteListedEvents: ['conference.joined', 'page.reload.scheduled', 'rejoined', 'transport.stats'],
    },
    enableP2P: true, // flag to control P2P connections
    // New P2P options
    p2p: {
        enabled: true,
        preferH264: true,
        disableH264: true,
        useStunTurn: true // use XEP-0215 to fetch STUN and TURN servers for the P2P connection
    },
    useStunTurn: true, // use XEP-0215 to fetch TURN servers for the JVB connection
    useTurnUdp: false,
    websocket: 'wss://meet.jit.si/xmpp-websocket', // FIXME: use xep-0156 for that


    clientNode: 'https://jitsi.org/jitsimeet', // The name of client node advertised in XEP-0115 'c' stanza
    //deprecated desktop sharing settings, included only because older version of jitsi-meet require them
    desktopSharing: 'ext', // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    chromeExtensionId: 'kglhbbefdnlheedjiejgomgmfplipfeb', // Id of desktop streamer Chrome extension
    desktopSharingSources: ['screen', 'window'],
    googleApiApplicationClientID: "39065779381-bbhnkrgibtf4p0j9ne5vsq7bm49t1tlf.apps.googleusercontent.com",
    microsoftApiApplicationClientID: "00000000-0000-0000-0000-000040240063",
    enableCalendarIntegration: true,
    //new desktop sharing settings
    desktopSharingChromeExtId: 'kglhbbefdnlheedjiejgomgmfplipfeb', // Id of desktop streamer Chrome extension
    desktopSharingChromeDisabled: false,
    desktopSharingChromeSources: ['screen', 'window', 'tab'],
    desktopSharingChromeMinExtVersion: '0.2.6.2', // Required version of Chrome extension
    desktopSharingFirefoxDisabled: false,
    useRoomAsSharedDocumentName: false,
    enableLipSync: false,
    disableRtx: false, // Enables RTX everywhere
    enableScreenshotCapture: false,
    openBridgeChannel: 'websocket', // One of true, 'datachannel', or 'websocket'
    channelLastN: -1, // The default value of the channel attribute last-n.
    startBitrate: "800",
    disableAudioLevels: false,
    disableSuspendVideo: true,
    stereo: false,
    forceJVB121Ratio: -1,
    enableTalkWhileMuted: true,

    enableNoAudioDetection: true,

    enableNoisyMicDetection: true,

    enableClosePage: true,

    disableLocalVideoFlip: true,

    hiddenDomain: 'recorder.meet.jit.si',
    dropbox: {
        appKey: '3v5iyto7n7az02w'
    },
    transcribingEnabled: false,
    enableRecording: true,
    liveStreamingEnabled: true,
    fileRecordingsEnabled: true,
    fileRecordingsServiceEnabled: false,
    fileRecordingsServiceSharingEnabled: false,
    requireDisplayName: false,
    enableWelcomePage: true,
    isBrand: false,
    dialInNumbersUrl: 'https://api.jitsi.net/phoneNumberList',
    dialInConfCodeUrl: 'https://api.jitsi.net/conferenceMapper',

    dialOutCodesUrl: 'https://api.jitsi.net/countrycodes',
    dialOutAuthUrl: 'https://api.jitsi.net/authorizephone',
    peopleSearchUrl: 'https://api.jitsi.net/directorySearch',
    inviteServiceUrl: 'https://api.jitsi.net/conferenceInvite',
    inviteServiceCallFlowsUrl: 'https://api.jitsi.net/conferenceinvitecallflows',
    peopleSearchQueryTypes: ['user', 'conferenceRooms'],
    startAudioMuted: 9,
    startVideoMuted: 9,
    enableUserRolesBasedOnToken: false,
    enableLayerSuspension: false,
    feedbackPercentage: 0,
    deploymentUrls: {
        userDocumentationURL: "https://jitsi.github.io/handbook/help",
    },
    chromeExtensionBanner: {
        url: "https://chrome.google.com/webstore/detail/jitsi-meetings/kglhbbefdnlheedjiejgomgmfplipfeb",
        chromeExtensionsInfo: [{ "path": "jitsi-logo-48x48.png", "id": "kglhbbefdnlheedjiejgomgmfplipfeb" }]
    },
    prejoinPageEnabled: false,
    hepopAnalyticsUrl: "",
    hepopAnalyticsEvent: {
        product: "lib-jitsi-meet",
        subproduct: "meet-jit-si",
        name: "jitsi.page.load.failed",
        action: "page.load.failed",
        actionSubject: "page.load",
        type: "page.load.failed",
        source: "page.load",
        attributes: {
            type: "operational",
            source: 'page.load'
        },
        server: "meet.jit.si"
    },
    deploymentInfo: {
        environment: 'meet-jit-si',
        envType: 'prod',
        releaseNumber: '735',
        shard: 'to meet-jit-si-ap-mumbai-1-s30',
        region: 'ap-mumbai-1',
        userRegion: 'ap-mumbai-1',
        crossRegion: 0
    },
    rttMonitor: {
        enabled: false,
        initialDelay: 30000,
        getStatsInterval: 10000,
        analyticsInterval: 60000,
        stunServers: { "us-east-1": "all-us-east-1-turn.jitsi.net:443", "ap-se-2": "all-ap-se-2-turn.jitsi.net:443", "ap-se-1": "all-ap-se-1-turn.jitsi.net:443", "us-west-2": "all-us-west-2-turn.jitsi.net:443", "eu-central-1": "all-eu-central-1-turn.jitsi.net:443", "eu-west-1": "all-eu-west-1-turn.jitsi.net:443" }
    },
    e2eping: {
        pingInterval: -1
    },
    abTesting: {
    },
    testing: {
        capScreenshareBitrate: 1,
        octo: {
            probability: 1
        }
    }
};
//initialize and integer with 0
////////////////////////////////////////////////////////////////////////////////////
const confOptions = {
};

let connection = null;
let isJoined = false;
let room = null;

let localTracks = [];
const remoteTracks = {};

/**
 * Handles local tracks.
 * @param tracks Array with JitsiTrack objects
 */
function onLocalTracks(tracks) {
    localTracks = tracks;
    for (let i = 0; i < localTracks.length; i++) {
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
            audioLevel => console.log(`Audio Level local: ${audioLevel}`));
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
            () => console.log('local track muted'));
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
            () => console.log('local track stoped'));
        localTracks[i].addEventListener(
            JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
            deviceId =>
                console.log(
                    `track audio output device was changed to ${deviceId}`));
        if (localTracks[i].getType() === 'video') {
            $('#local_video').append(
                //resize the below video to center and 30% of the screen width
                `<video class="local" autoplay id="localVideo${i}" style="width: 30%; height: 30%; position: absolute; top: 30%; left: 30%; transform: translate(-50%, -50%);"></video>`);
            // `<video autoplay='1' id='localVideo${i}' /></div>`
            localTracks[i].attach($(`#localVideo${i}`)[0]);
        } else {
            $('body').append(
                `<audio autoplay='1' muted='true' id='localAudio${i}' />`);
            localTracks[i].attach($(`#localAudio${i}`)[0]);
        }
        if (isJoined) {
            room.addTrack(localTracks[i]);
        }
    }
}


/**
 * Handles remote tracks
 * @param track JitsiTrack object
 */
var count = 1;
function onRemoteTrack(track) {
    if (track.isLocal()) {
        return;
    }
    const participant = track.getParticipantId();

    if (!remoteTracks[participant]) {
        remoteTracks[participant] = [];
    }
    const idx = remoteTracks[participant].push(track);
    track.addEventListener(
        JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
        audioLevel => console.log(`Audio Level remote: ${audioLevel}`));
    track.addEventListener(
        JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
        () => console.log('remote track muted'));
    track.addEventListener(
        JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
        () => console.log('remote track stoped'));
    track.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
        deviceId =>
            console.log(
                `track audio output device was changed to ${deviceId}`));
    const id = participant + track.getType() + idx;

    //if count = 1 append th video to the div with class custom_video1
    if (count == 1) {
        if (track.getType() === 'video') {
            //append video to the div with class name video1
            $('#custom_video1').append(
                `<video class='video1' autoplay='1' id='${participant}video${idx}' />`);
        } else {
            $('#custom_video1').append(
                `<audio class='audio1' autoplay='1' id='${participant}audio${idx}' />`);
        }
        count++;
    }
    else if (count == 2) {
        if (track.getType() === 'video') {
            //append video to the div with class name video1
            $('#custom_video2').append(
                `<video class='video2' autoplay='1' id='${participant}video${idx}' />`);
        } else {
            $('#custom_video2').append(
                `<audio class='audio2' autoplay='1' id='${participant}audio${idx}' />`);
        }
        count++;
    }
    else if (count == 3) {
        if (track.getType() === 'video') {
            //append video to the div with class name video1
            $('#custom_video3').append(
                `<video class='video3' autoplay='1' id='${participant}video${idx}' />`);
        } else {
            $('#custom_video3').append(
                `<audio class='audio3' autoplay='1' id='${participant}audio${idx}' />`);
        }
        count++;
    }
    else if (count == 4) {
        if (track.getType() === 'video') {
            //append video to the div with class name video1
            $('#custom_video4').append(
                `<video class='video4' autoplay='1' id='${participant}video${idx}' />`);
        } else {
            $('#custom_video4').append(
                `<audio class='audio4' autoplay='1' id='${participant}audio${idx}' />`);
        }
        count++;
    }
    // if (track.getType() === 'video') {
    //     $('body').append(
    //         `<video class='video${count}' autoplay='1' id='${participant}video${idx}' />`);
    // } else {
    //     $('body').append(
    //         `<audio class='audio${count}' autoplay='1' id='${participant}audio${idx}' />`);
    // }
    // if (getNumberOfParticipants() < 2) {
    //         if (track.getType() === 'video') {
    //             $('body').append(
    //                 `<video class="video1${count}" autoplay id='${participant}video${idx}' style="width: 30%; height: 30%; position: absolute; top: 30%; right: 30%;left: 70% transform: translate(-50%, -50%);"></video>`);
    //             }
    //     else{
    //         $('body').append(
    //             `<audio class="audio1${count} autoplay='1' id='${participant}audio${idx}' />`);
    //         }
    //     }
    // else {
    //     if (track.getType() === 'video') {
    //         $('body').append(
    //             `<video class="video2${count}" autoplay id='${participant}video${idx}' style="width: 30%; height: 30%; position: absolute; top: 30%; right: 30%;left: 70% transform: translate(-50%, -50%);"></video>`);
    //         }
    //         else{
    //     $('body').append(
    //         `<audio class="audio2${count} autoplay='1' id='${participant}audio${idx}' />`);
    //     }
    // }
    track.attach($(`#${id}`)[0]);
}

/**
 * That function is executed when the conference is joined
 */
function onConferenceJoined() {
    console.log('conference joined!');
    isJoined = true;
    for (let i = 0; i < localTracks.length; i++) {
        room.addTrack(localTracks[i]);
    }
}

/**
 *
 * @param id
 */
function onUserLeft(id) {
    console.log('user left');
    if (!remoteTracks[id]) {
        return;
    }

    const tracks = remoteTracks[id];
    var i = getNumberOfParticipants();
    // if (i < 2) {
    //     //remove div with id 
    //     //$(`#${id}`).remove();
    //     //remove video with class video1
    //     $(`.video1${count}`).remove();
    //     $(`.audio1${count}`).remove();
    //     count--;
    //     //remove video with class id
    //     // $(`.${id}`).remove();
    //     //remove video with class video1${participant} and id ${participant}video${idx}
    //     // $(``).remove();

    // }
    // //remove div with id jitsi-meet_more_than_2
    // else {
    //     //$(`#${id}`).remove();
    //     $(`.video2${count}`).remove();
    //     $(`.audio2${count}`).remove();
    //     count --;
    // }
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].detach($(`#${id}${tracks[i].getType()}`));
    }

}

/**
 * That function is called when connection is established successfully
 */

function onConnectionSuccess() {
    room = connection.initJitsiConference('khushil', confOptions);
    room.on(JitsiMeetJS.events.conference.TRACK_ADDED, onRemoteTrack);
    room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, track => {
        console.log(`track removed!!!${track}`);
    });
    room.on(
        JitsiMeetJS.events.conference.CONFERENCE_JOINED,
        onConferenceJoined);
    room.on(JitsiMeetJS.events.conference.USER_JOINED, id => {
        console.log('user join');
        remoteTracks[id] = [];
    });
    room.on(JitsiMeetJS.events.conference.USER_LEFT, onUserLeft);
    room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, track => {
        console.log(`${track.getType()} - ${track.isMuted()}`);
    });
    room.on(
        JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,
        (userID, displayName) => console.log(`${userID} - ${displayName}`));
    room.on(
        JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED,
        (userID, audioLevel) => console.log(`${userID} - ${audioLevel}`));
    room.on(
        JitsiMeetJS.events.conference.PHONE_NUMBER_CHANGED,
        () => console.log(`${room.getPhoneNumber()} - ${room.getPhonePin()}`));
    room.join();
    room.setDisplayName('IGCAR');
}

//function to return number of participants in conference
function getNumberOfParticipants() {
    console.log(room.getParticipants().length);
    return room.getParticipants().length;
}

/**
 * This function is called when the connection fail.
 */
function onConnectionFailed() {
    console.error('Connection Failed!');
}

/**
 * This function is called when the connection fail.
 */
function onDeviceListChanged(devices) {
    console.info('current devices', devices);
}

/**
 * This function is called when we disconnect.
 */
function disconnect() {
    console.log('disconnect!');
    connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
        onConnectionSuccess);
    connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_FAILED,
        onConnectionFailed);
    connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
        disconnect);
}

/**
 *
 */
function unload() {
    for (let i = 0; i < localTracks.length; i++) {
        localTracks[i].dispose();
    }
    room.leave();
    connection.disconnect();
}

let isVideo = true;

/**
 *
 */
function switchVideo() { // eslint-disable-line no-unused-vars
    isVideo = !isVideo;
    if (localTracks[1]) {
        localTracks[1].dispose();
        localTracks.pop();
    }
    JitsiMeetJS.createLocalTracks({
        devices: [isVideo ? 'video' : 'desktop']
    })
        .then(tracks => {
            localTracks.push(tracks[0]);
            localTracks[1].addEventListener(
                JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
                () => console.log('local track muted'));
            localTracks[1].addEventListener(
                JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
                () => console.log('local track stoped'));
            localTracks[1].attach($('#localVideo1')[0]);
            room.addTrack(localTracks[1]);
        })
        .catch(error => console.log(error));
}

/**
 *
 * @param selected
 */
function changeAudioOutput(selected) { // eslint-disable-line no-unused-vars
    JitsiMeetJS.mediaDevices.setAudioOutputDevice(selected.value);
}

$(window).bind('beforeunload', unload);
$(window).bind('unload', unload);

// JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);
const initOptions = {
    disableAudioLevels: true
};

JitsiMeetJS.init(initOptions);

connection = new JitsiMeetJS.JitsiConnection(null, null, options);

connection.addEventListener(
    JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
    onConnectionSuccess);
connection.addEventListener(
    JitsiMeetJS.events.connection.CONNECTION_FAILED,
    onConnectionFailed);
connection.addEventListener(
    JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
    disconnect);

JitsiMeetJS.mediaDevices.addEventListener(
    JitsiMeetJS.events.mediaDevices.DEVICE_LIST_CHANGED,
    onDeviceListChanged);

function Join_conference() {
    connection.connect();
}

JitsiMeetJS.createLocalTracks({ devices: ['audio', 'video'] })
    .then(onLocalTracks)
    .catch(error => {
        throw error;
    });

if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
    JitsiMeetJS.mediaDevices.enumerateDevices(devices => {
        const audioOutputDevices
            = devices.filter(d => d.kind === 'audiooutput');

        if (audioOutputDevices.length > 1) {
            $('#audioOutputSelect').html(
                audioOutputDevices
                    .map(
                        d =>
                            `<option value="${d.deviceId}">${d.label}</option>`)
                    .join('\n'));

            $('#audioOutputSelectWrapper').show();
        }
    });
}
