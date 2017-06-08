const Counter = {

  rootElement: '#app',
  count: 0,
  userAmount: 1,

  start: function(){
    this.cacheDOM();
    this.initializeValues();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.addButton = document.querySelector('.increment');
    this.minusButton = document.querySelector('.decrement');
    this.deltaTextbox = document.querySelector('.userDelta');
    this.outpt = document.querySelector('.output');
  },

  bindEvents: function bindEvents(){
      this.addButton.addEventListener('click',()=>{
      //this.count+=1;
      //this.userDelta = Number(this.deltaTextbox.value); //this works same as parseInt()
      this.userAmount = parseInt(this.deltaTextbox.value);
      this.count += this.userAmount;
      this.render();
      //this.populateStorage(this.count);
      this.addStorage(this.outpt,this.count);
      this.addStorage(this.deltaTextbox,this.userAmount);
    });
    this.minusButton.addEventListener('click',()=>{
      //this.count -= 1;
      this.userAmount = parseInt(this.deltaTextbox.value);
      this.count -= this.userAmount;
      this.render();
      //this.populateStorage(this.count);
      this.addStorage(this.outpt,this.count);
      this.addStorage(this.deltaTextbox,this.userAmount);
    });
  },

  render: function (){
    this.outpt.textContent = this.count;
    this.deltaTextbox.value = this.userAmount;
  },
  //this worked but ....sort of hardcoding
  // populateStorage: function(myCount) {
  //   //localStorage.setItem('outpt',0);
  //   localStorage.setItem('outpt', myCount);
  // },
  addStorage: function(property,value) {
    localStorage.setItem(property, value);
  },
  retrieveStorage: function(property) {
    return (parseInt(localStorage.getItem(property)));
  },
  initializeValues: function(){
    if(this.retrieveStorage(this.outpt)){
      this.count = this.retrieveStorage(this.outpt);
    }
    else{
      this.count = 0;
    }

    if(this.retrieveStorage(this.userDelta)){
      this.userAmount = this.retrieveStorage(this.deltaTextbox);
    }
    else{
      this.userAmount = 1;
    }
  }


};

Counter.start();
