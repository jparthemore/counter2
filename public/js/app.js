const Counter = {

  rootElement: '#app',
  count: 0,
  userDelta: 1,

  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.addbutton = document.querySelector('#increment');
    this.minusbutton = document.querySelector('#decrement');
    this.delta_textbox = document.querySelector('#userDelta');
    this.outpt = document.querySelector('#output');
  },

  bindEvents: function bindEvents(){
    this.addbutton.addEventListener('click',()=>{
      //this.count+=1;
      this.userDelta = Number(this.delta_textbox.value);
      this.count += this.userDelta;
      this.render();
    });
    this.minusbutton.addEventListener('click',()=>{
      //this.count -= 1;
      this.userDelta = Number(this.delta_textbox.value);
      this.count -= this.userDelta;
      this.render();
    });
    // this.delta_textbox.addEventListener('onChange',()=>{
    //   this.userDelta -= 1;
    // });
  },

  render: function (){
    this.outpt.textContent = this.count;
    this.delta_textbox.value = this.userDelta;
  }


};

Counter.start();
