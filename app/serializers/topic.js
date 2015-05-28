import DS from 'ember-data';
// 1. http://andycrum.github.io/ember-data-model-maker/
// 2. https://gist.github.com/opsb/730188df99173bff3fc7
// 3. https://github.com/emberjs/data/blob/master/packages/ember-data/tests/integration/serializers/embedded-records-mixin-test.js

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: {embedded: 'always'}
  },

  serialize(record, options) {
    console.log('YES ITS BLOODY USING THE REST SERIALIZER');
    return this._super(record, options);
  },
  extract(store, type, payload, id, requestType) {
    console.log(id + "解析 json 到 object:" + payload);
    return this._super(store, type, payload, id, requestType);
  },

  extractSingle(store, type, payload, id) {
    console.log(id + "extractSingle..." + id);
    return this._super(store, type, payload, id);
  },

  normalizePayload(preload) {
    if(preload['topic']) {
      var topic = preload['topic'];
      topic.links = {
        replies: `replies.json`
      };
      console.log(preload);
    }
    return preload;
  }
});
