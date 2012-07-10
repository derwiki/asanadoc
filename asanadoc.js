console.log('Loading AsanaDoc...');
gapi.client.load('drive', 'v2', function() { console.log('Google Drive v2 API loaded.'); });

gapi.client.setApiKey('AIzaSyA5qP2bUFobXRT9q0ZozAvPb86iAV6XZNg');

$('a').each(function(idx, link) {
  if ( ! link.html().match(/\.doc/) ) { return; }

  console.log(link);
});
