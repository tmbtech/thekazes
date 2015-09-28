import Instafeed from "instafeed.js"

var feed = new Instafeed({
  get: 'tagged',
  tagName: 'jackieandderrick',
  clientId: 'aa60ab169b644fe3b783ce2b272a06f5'
});
feed.run();