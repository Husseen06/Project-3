<?php
if(isset($_POST['submit'])) {
    echo "<pre>".print_r($_POST, true)."</pre>";
}
$naam = $_POST['naam'];
$achternaam = $_POST['achternaam'];
$email = $_POST['email'];
$gebruikersnaam = $_POST['gebruikersnaam'];
$wachtwoord = $_POST['wachtwoord'];


 
$dsn = "mysql:host=localhost;dbname=chirpify project";
$conn = new PDO($dsn, 'root', '');
 
$stmt = $conn->prepare("INSERT INTO inlog (naam, achternaam, email, gebruikersnaam, wachtwoord)
                        VALUES(?, ?, ?, ?, ?)");
$stmt->execute([
   $naam, $achternaam, $gebruikersnaam, $wachtwoord, $email
]);