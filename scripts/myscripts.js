function formValidation() {


	//Assigning values
	var newRID = Math.floor(Math.random() * (699999-600000) + 600000);
	var newUID = Math.floor(Math.random() * (999-100) + 100);
	var newDate = document.getElementById("reserveDate").value;
	var newTime = document.getElementById("reserveTime").value;
	var newFName = document.getElementById("reserveFName").value;
	var newLName = document.getElementById("reserveLName").value;
	var newSpecial = document.getElementById("reserveSpecial").value;

	var flag = true; //Validation Flag

	//Validating Phone Number
	var phoneNo = document.getElementById("reservePhone").value;
	var validnumb = /^\d{10}$/;
	if(!phoneNo.match(validnumb))
	{
		flag = false;
		document.getElementById("phoneClass").className = "form-group has-error";
		
	}

	//Validating E-Mail
	var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var emailid = document.getElementById("reserveEmail").value;
	if(!emailid.match(emailregex))
	{
		flag = false;
		document.getElementById("emailClass").className = "form-group has-error";
	}

	//Validating Guest Count
	var guestcount = document.getElementById("reserveSize").value;
	if((guestcount<1) || (guestcount >100))
	{
		flag = false;
		document.getElementById("guests").className = "form-group has-error";
	}

	//Sending Valid Data
	if(flag)
	{

		//Creating JSON object
		var jsonNewReservation = {
			"RID" : newRID,
			"UID" : newUID,
			"Date" : newDate,
			"Time" : newTime,
			"FirstName" : newFName,
			"LastName" : newLName,
			"Phone" : phoneNo,
			"Email" : emailid,
			"GuestCount" : guestcount,
			"Preferences" : newSpecial
		};

		//localStorage.setItem('jsonNewReservation', JSON.stringify(jsonNewReservation));

		//console.log(jsonNewReservation);

		//Posting Reservation values to MyReservation.html
		$.ajax({
			async : true,
			cache : false,
			data : jsonNewReservation,
			datatype: "json",
			error: function(jqXHR, textStatus, error) {
				/* Act on the event */
				console.log(error);
			},
			success: function(data, textStatus, jqXHR){
				console.log(data);
			},
			type: "POST",
			url: "http://localhost:15021/Service1.svc/AddReservation"
		});

		//window.location = "myReservation.html";
	}

}

// function formFill(){

// 	//Retrieving JSON object from localstorage
// 	var retrievedJSON = JSON.parse(localStorage.getItem("jsonNewReservation"));

// 	//Setting values to the form for the customer.
// 	$("#custRid").text(retrievedJSON.RID);
// 	$("#custReserveDate").val(retrievedJSON.Date);
// 	$("#custReserveTime").val(retrievedJSON.Time);
// 	$("#custReserveFName").val(retrievedJSON.FirstName);
// 	$("#custReserveLName").val(retrievedJSON.LastName);
// 	$("#custReservePhone").val(retrievedJSON.Phone);
// 	$("#custReserveEmail").val(retrievedJSON.Email);
// 	$("#custReserveSize").val(retrievedJSON.GuestCount);
// 	$("#custReserveSpecial").val(retrievedJSON.Preferences);
// }