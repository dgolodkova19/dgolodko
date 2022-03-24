@@ -6,7 +6,8 @@ require('./bootstrap-modal')
require('./search')
require('./entry')

var $ = require('unopinionate').selector
$(document).on('click', '.js-userLogoutBtn', function() {
	$('#userLogoutForm').submit()
	return false
  $('#userLogoutForm').submit()
  return false
})
