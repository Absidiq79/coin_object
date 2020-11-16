let coin = {
    state: 0,
    flip: function() {
        coin.state = Math.floor(Math.random() * 2)
        return this.state
        

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
      },
      
    toString: function() {
        if(this.state == 0) {
           return 'head'
        }
      else {
          return 'tail'
        //   console.log(toString);
      }      
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let images = document.createElement('img');
        if (this.state == 0) {
            images.src = './images/Heads.jpg'
        }
         else{
             images.src = './images/Tail.jpg'
         }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return images;
    }
};
 
  let container = document.createElement('div');
      container.append(coin.toHTML());

    document.body.append(container)

    console.log(coin.toHTML());
// console.log(coin.toString());




function display20Flips() {
  for(let i = 0; i <=20; i++) {
    let newDiv = document.createElement('div');
    newDiv.append(coin.toString());
    document.body.append(newDiv);
    coin.flip()
  }

/*use a loop to flip the coin 20 times. 
Each time the coin flips, display the result of each flip as a string on the page 
(make use of your toString() method)*/
}

function display20Images() {
    let container = document.createElement('div');
        container.append(coin.toHTML());
        document.body.append(container);
     
        console.lo(coin.flip());
        console.log(coin.toString());
        console.log(coin.toHTML());
    /* using a loop to flip the coin 20 times…
    but this time instead of displaying the result as a string, 
    display the result of each flip as an HTML IMG element on the page (
    (make use of your toHTML() method).*/
}