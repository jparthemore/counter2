const Counter = {

  rootElement: '#app',
  count: 0,

  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.button = document.querySelector('#increment');
    this.outpt = document.querySelector('#output');
  },

  bindEvents: function bindEvents(){
    this.button.addEventListener('click',()=>{
      this.count+=1;
      this.render();
    });
  },

  render: function (){
    this.outpt.textContent = this.count;
  }


};

Counter.start();
