var LoLReplayAPI = require('./client.js');
var replay = new LoLReplayAPI();

replay.Game('kr', '1501093918', function(data){
  console.log(data);
});

replay.Timeline('kr', '1501093918', function(data){
  console.log(data);
});

