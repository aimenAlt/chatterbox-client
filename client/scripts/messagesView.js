var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    
    var formattedMessage = _.template(
      `<div id='chats'>
        <div class='username'></div>
          <p><% message.username %></p>
        <div></div>
      </div>
    `);

    $('#chats').innerHTML += formattedMessage();
    $('#chats').append(formattedMessage());

    // var hello = _.template(`
    //   <h1>hello 
    //     <% if(subject) { $%> 
    //       <%= 'world' %>
    //     <% } %>
    //   </h1>`)

    // var formattedMessage = _.template(`
    //   <h1>
    // `)
  }
};


  // render: _.template(`
  //     <!--
  //     <div class="chat">
  //       <div class="username"></div>
  //       <div></div>
  //     </div>
  //     -->
  //   `)