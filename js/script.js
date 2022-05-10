const app = new Vue({

  el: '#app',

  data:{

    userMoves: 0,
    isTheGameOver: false,

    gridCells: [
      {
        number: 0,
        entity: undefined
      },
      {
        number: 1,
        entity: undefined
      },
      {
        number: 2,
        entity: undefined
      },
      {
        number: 3,
        entity: undefined
      },
      {
        number: 4,
        entity: undefined
      },
      {
        number: 5,
        entity: undefined
      },
      {
        number: 6,
        entity: undefined
      },
      {
        number: 7,
        entity: undefined
      },
      {
        number: 8,
        entity: undefined
      },
    ],

    circles: [],

    crosses: []
  },


  methods:{

    init(cell, Index){
      if(this.isTheGameOver === false){
        if (cell.entity === undefined){
          cell.entity = 'circle';
        }else if(cell.entity === undefined){
          cell.entity = 'cross'
        }
        this.circlePush(Index)  
      }else{
        alert('il gioco è terminato');
      }
      
    },
    
    circlePush(index){

      if (!this.crosses.includes(this.gridCells[index].number)) {
        
        if(this.isTheGameOver === false){
          this.circles.push(this.gridCells[index].number);
        }else{
          alert('il gioco è terminato');
        }

       console.log('array cerchi', this.circles);
       this.verifyWin(this.circles);
       
       if(this.isTheGameOver === false){
        this.crossPush(); 
      }else{
        alert('il gioco è terminato');
      }
       
       this.userMoves++
      }else{
        alert('non puoi cliccare una cella già presa dal pc')
      }
    },

    crossPush(){
      if(this.crosses.length < 4){
        while(this.crosses.length === this.userMoves){
          let number = this.pickRandomCell(0, 9);
          if(!this.circles.includes(number) && !this.crosses.includes(number)){
            this.crosses.push(number)
            console.log('array croci', this.crosses);
            this.gridCells[0 + number].entity = 'cross';
            this.verifyWin(this.crosses);
          }   
        }
      }
    },

    verifyWin(entity){
      let winner = '';
      switch (entity) {
        case this.circles:
          winner = 'user'
          break;
        
        default:
          winner = 'pc'
          break;
      }

      if(entity.includes(0)
        && entity.includes(1)
        && entity.includes(2)){
          alert(`${winner} wins!`);
          console.log('vittoria 0,1,2');
          this.isTheGameOver = true;
      }else if(entity.includes(3)
        && entity.includes(4)
        && entity.includes(5)){
          alert(`${winner} wins!`);
          console.log('vittoria 3,4,5');
          this.isTheGameOver = true;
      }else if(entity.includes(6)
        && entity.includes(7)
        && entity.includes(8)){
          alert(`${winner} wins!`);
          console.log('vittoria 6,7,8');
          this.isTheGameOver = true;
      }else if(entity.includes(0)
        && entity.includes(3)
        && entity.includes(6)){
          alert(`${winner} wins!`);
          console.log('vittoria 0,3,6');
          this.isTheGameOver = true;
      }else if(entity.includes(1)
        && entity.includes(4)
        && entity.includes(7)){
          alert(`${winner} wins!`);
          console.log('vittoria 1,4,7');
          this.isTheGameOver = true;
      }else if(entity.includes(2)
        && entity.includes(5)
        && entity.includes(8)){
          alert(`${winner} wins!`);
          console.log('vittoria 2,5,8');
          this.isTheGameOver = true;
      }else if(entity.includes(0)
        && entity.includes(4)
        && entity.includes(8)){
          alert(`${winner} wins!`);
          console.log('vittoria 0,4,8');
          this.isTheGameOver = true;
      }else if(entity.includes(2)
        && entity.includes(4)
        && entity.includes(6)){
          alert(`${winner} wins!`);
          console.log('vittoria 2,4,6');
          this.isTheGameOver = true;
      }
    },

   pickRandomCell(min, max){
     return Math.floor(Math.random() * (max - min - 1) + min)
   }
  },


  mounted(){
  }
});