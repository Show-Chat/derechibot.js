// (c) 2011 Richard Carter
// This code is licensed under the MIT license; see LICENSE.txt for details.

global.nodebot_prefs = {
    realname: 'iLOG',
    nickname: 'iLOG',
    username: 'iLOG',
    serverpass: null,

    /* NickServ details, case-insensitive.
     * Note: regex characters must be escaped, as these values are placed
     * into a regex (not the password).
     */
    nickserv_nickname: 'NickServ',
    nickserv_hostname: 'NickServ@services\\.',
    nickserv_password: 'password',

    command_prefix: '~',
    server: 'irc.ilog.kiwichat.ml',
    port: 6667,
    secret: 'secret', /* password to become admin */

    ping_interval: 58000, /* ms to pass before sending a PING to stay connected */

    default_location: '90210',

    /* bitly.js */
    bitly_username: '',
    bitly_apikey: '',

    /* Google API - https://code.google.com/apis/console/?noredirect
     * Currently used for the goo.gl library. Visit the above URL and register
     * an application. Enable the URL Shortener API. Copy and paste the API key
     * from the API Access page into here.
     */
    google_api_key: '',

    /* twitter */
    twitter_consumerkey: '',
    twitter_secret: ''
};
