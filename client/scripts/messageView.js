
/*
Input:
var message = {
          username: 'Mel Brooks',
          text: 'It\'s good to be the king',
          roomname: 'lobby'
        };

Output:
      `<div class="chat">
        <div class="username"> Mel Brooks </div>
        <div> `It's good to be the king` </div>
      </div>`

*/

var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"> <%= username %> </div>
        <div> <%= text %> </div>
      </div>

    `)
};

/*
- _.template takes a string and returns a function
- we can test this by 


      <div class="chat">
        <div class="username"> bob </div>
        <div> hello world </div>
      </div>

*/