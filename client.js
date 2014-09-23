var request = require('request');

function LoLReplayAPI (opts) {
  this.opts = {
    host: 'acs.leagueoflegends.com',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36',
      'Accept-Language': 'en-GB,en-US;q=0.8,en;q=0.6'
    }
  };
}

LoLReplayAPI.prototype.request = function(url, callback) {
  var options = this.opts;
  options.url = url;

  request(options, function(error, res, body) {
    if (error) {
      callback({'status':'error','error':error+' when connecting to op.gg-api server'});
      return;
    } else {
      var json = JSON.parse(body);
      if (typeof json.status === 'undefined') {
        callback({'status':'error','error':'return was not json, wtf'});
        return;
      }
      callback(json);
    }
  });
}

/* Public Methods */
LoLReplayAPI.prototype.Game = function(region, gameid, callback){
  var url = 'http://'+this.opts.host+'/v1/stats/game/'+region+'/'+gameid;
  this.request(url,callback);
}

opggClient.prototype.Timeline = function(region, gameid, callback){
  var url = 'http://'+this.opts.host+'/v1/stats/game/'+region+'/'+gameid+'/timeline';
  this.request(url,callback);
}
/* End Public Methods */

module.exports = LoLReplayAPI;