var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'http://avatars0.githubusercontent.com/u/2933430?v=36s=460'
};

var React         = require('react');
var ReactDOM      = require('react-dom');

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span
        style={{color: "blue", cursor: "pointer"}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

// var FriendsContainer = React.createClass({
//   render: function() {
//     var name = 'Marika Allely';
//     var friends = ['Thea Weinstein', 'Veronica Alley', 'Mollie Bootsma', 'Jacquie Braden'];
//     return (
//       <div>
//         <h3> Name: {name} </h3>
//         <ShowList names={friends} />
//       </div>
//     )
//   }
// });
//
// var ShowList = React.createClass({
//   render: function() {
//     var listItems = this.props.names.map(function(friend) {
//       return <li> {friend} </li>;
//     });
//     return(
//       <div>
//         <h3> Friends </h3>
//           <ul>
//             {listItems}
//           </ul>
//       </div>
//     )
//   }
// });

// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <div>
//         Hello World!  It's-a me! {this.props.name}!
//       </div>
//     )
//   }
// });

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
