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
    this.addbutton = document.querySelector('#increment');
    this.minusbutton = document.querySelector('#decrement');
    this.outpt = document.querySelector('#output');
  },

  bindEvents: function bindEvents(){
    this.addbutton.addEventListener('click',()=>{
      this.count+=1;
      this.render();
    });
    this.minusbutton.addEventListener('click',()=>{
      this.count -= 1;
      this.render();
    });
  },

  render: function (){
    this.outpt.textContent = this.count;
  }


};

Counter.start();
