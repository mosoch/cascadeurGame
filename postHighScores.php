<?php
$dbhost = "localhost";
$dbuser = "cascadeur";
$dbpass = "abenteuer0";
$dbname = "cascadeur";

	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);

	//Select Database
mysql_select_db($dbname) or die(mysql_error());

	//build query
$query = "SELECT User, Score, Temps FROM GameLog ORDER BY Score DESC LIMIT 0,15";

	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());



	//Build Result String
$display_string = "<table bgcolor='FFFFFF'>";
$display_string .= "<tr>";
$display_string .= "<td><u><b>High Scores:</b></u></td>";
$display_string .= "<td></td>";
$display_string .= "</tr>";
$display_string .= "<tr>";
$display_string .= "<th>Name</th>";
$display_string .= "<th width = '100'>Score</th>";
$display_string .= "</tr>";

	// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){
	$display_string .= "<tr>";
	$display_string .= "<td>$row[User]</td>";
	$display_string .= "<td align='right'>$row[Score]</td>";
	$display_string .= "</tr>";

}
echo "<br />";
$display_string .= "</table>";
echo $display_string;
?>
