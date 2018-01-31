const User = require( './user.model');

var newUser = User({
  name: 'testing1',
  contactNo: 8989,
  email: 'abc8989@xyz.com'
});


newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
