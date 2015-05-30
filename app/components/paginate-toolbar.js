import Ember from 'ember';

export default Ember.Component.extend({

  pages: function() {
    var links = [];
    var totalPages = Math.ceil(this.attrs.totalCount.value / 50);
    for(var i = 1; i <= totalPages; i++) {
      links.push(i);
    }
    console.log(links);
    return links;
  }.property('attrs.totalCount'),

  actions: {
    nextPage: function() {
      // 将 Component 中的事件, 传递到 Controller 中去
      // next: 绑定的参数名字, 非 action 名字
      this.sendAction('next');
    },
    prevPage: function() {
      this.sendAction('prev')
    }
  }
});
