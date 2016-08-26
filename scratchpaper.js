//_________straight up functions_____________//
var getProfilePic = function(username) {
  return 'https://photo.fb.com' + username
};

var getProfileLink = function(username) {
  return 'https://www.fb.com' + username
};

var getProfileData = function(username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  };
}

getProfileData('tylermcginnis');
//___________________end____________________//

//________same as above, but with UI________//
var ProfilePic = React.createClass({
  render: function() {
    return(
      <img src={'https://photo.fb.com/' + this.props.username} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    <a href={'https://www.fb.com/' + this.props.username}>
      {this.props.username}
    </a>
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    )
  }
});

<Avatar username='tylermcginnis' />
//___________________end____________________//

//______Stateless Funtional Components______//
var ProfilePic = function(props) {
  return <img src={'https://photo.fb.com/' + props.username} />
}

var ProfileLink = function(props) {
  return (
    <a href={'https://www.fb.com/' + props.username} />
      {props.username}
    </a>
  )
};

var Avatar = function(props) {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  )
}

<Avatar username='tylermcginnis' />
//___________________end____________________//
