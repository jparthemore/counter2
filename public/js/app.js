const Counter = {

  rootElement: '#app',
  count: 0,
  userDelta: 1,

  start: function(){
  //  sessionStorage.getItem('key', 'value');

    this.cacheDOM();
    if(!localStorage.getItem('outpt')) {
      console.log('ha');
      }
   else{
     //console.log('got it');
     if(localStorage.getItem('outpt')){
       //console.log('really got it');
       var hee = localStorage.getItem('outpt');
       console.log('hee is: ',hee);
       this.count = hee;
     }
     else{
       console.log('did not really get it');
     }

     console.log(this.junk);
     //this.outpt.textContent = localStorage.getItem('outpt');
   }
    //this.output.value = localStorage.getItem('#output');
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
      this.populateStorage(this.count);
    });
    this.minusbutton.addEventListener('click',()=>{
      //this.count -= 1;
      this.userDelta = Number(this.delta_textbox.value);
      this.count -= this.userDelta;
      this.render();
      this.populateStorage(this.count);
    });
    // this.delta_textbox.addEventListener('onChange',()=>{
    //   this.userDelta -= 1;
    // });
  },

  render: function (){
    this.outpt.textContent = this.count;
    this.delta_textbox.value = this.userDelta;
  },
  populateStorage: function(myCount) {
    //var j = document.querySelector('#output').value;
    var j = myCount;
    //console.log('j is: ',j);
    //localStorage.setItem('outpt', document.querySelector('#output').value);
    //console.log('myCount is: ',myCount);
    localStorage.setItem('outpt', myCount);
  }


};

Counter.start();
