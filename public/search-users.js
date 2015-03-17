$(document).ready(function() {
		$('#searchUsers').on('submit', function(e) {
			e.preventDefault();
			$.post('/searchUsers', $(this).serialize(), function(data){
				$('#searchinput').text(data.username);
			});
		});
})