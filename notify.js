const prettyjson = require('prettyjson');
const notifier = require('node-notifier');

module.exports = function(body) {
    var data = {};

    data.branch = getBranch(body);
    data.pusher = getPusher(body);
    data.avatar = getAvatar(body);
    data.repo_name = getRepositoryName(body);

    var notification = {};

    notification.title = `${data.pusher}`;
    notification.message = `just pushed commit to ${data.repo_name}`;
    notification.icon = data.avatar;

    notifier.notify(notification);

}

function getBranch (body) {
    return body.ref.split('/').pop();
}

function getPusher (body) {
    return body.pusher.name;
}

function getAvatar (body) {
    return body.sender.avatar_url;
}

function getRepositoryName(body) {
    return body.repository.name;
}