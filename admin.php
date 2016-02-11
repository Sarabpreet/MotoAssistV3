<?php 




if(($_POST['username']=='mohit') && $_POST['password']=='motocredr') {




?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Admin</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> 	

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>  
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="https://cdn.firebase.com/v0/firebase.js"></script>
	<style>
		.jumbotron{
			margin-top: 1em;
			text-align: center;
			
		}


	</style>

</head>

<body>
	<div class="container">
		<div class="jumbotron">
			<h2>Admin Page</h2><br>
			<h3>List of Customers </h3>
		</div>
		<table class="table table-striped" id="list">
			<thead>
				<tr>
					<th>Name</th>
					<th>Mobile</th>
					<th>Email</th>
					<th>Current Time </th>
					<th>Page // Service</th>
					<th>Make</th>
					<th>Model</th>
					<th>Year</th>
				</tr>
			</thead>
			<tbody id="tRow">

			</tbody>
		</table>


	</div><!--container-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.js" ></script>
	<script src="https://cdn.firebase.com/js/client/1.0.21/firebase.js"></script>
	<script type="text/javascript" src="js/custom.js" ></script>

</body>
</html>

<?php 
}
else {


echo "You are not authorized to view this page. sorry!";
}
?>



































