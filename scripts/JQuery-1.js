'using strict'

$(document).ready(function() {


	/*OnClick Change Reservation*/
	$('#changeReservation').on('click', function() {
		/* Act on the event */

		/* Open Disabled Inputs*/
		$('.formInputs').prop('disabled',false);

		/*Change Text Field of Buttons*/
		$('#changeReservation').addClass('editReservation').text('Place Reservation');
		$('#cancelReservation').addClass('cancleChange').text('Cancel Changes');


		/*OnClick Place Reservation*/
		$('#changeReservation').on('click',function() {

			var editConfirm = confirm('Confirm Edit', function(){});

			if(editConfirm)
			{
				alert('Congratulations! Your Reservation Has Been Updated');
			}

		});


		/*OnClick Cancel Change*/
		$('#cancelReservation').on('click',function(){

			$('#editReservation').text('Change Reservation');
			$('#cancleChange').text('Cancel Reservation');

		});

	});

	/*onClick Cancel Reservation*/
	$('#cancelReservation').on('click',function(){

		var cancelConfirmed = confirm('Confirm Cancelation',function(){});

		if(cancelConfirmed)
		{
			alert('Reservation Cancelled');
		}

	});

});