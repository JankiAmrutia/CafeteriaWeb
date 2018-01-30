const User = require( './user.model');

var newUser = User({
  name: 'Peter Quill',
  contactNo: 12334,
  email: 'abc@xyz.com'
});


newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
