<?php
// Σύνδεση στη βάση δεδομένων
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$database = "your_database";
$conn = new mysqli($servername, $username, $password, $database);
// Έλεγχος σύνδεσης
if ($conn->connect_error) {
    die("Σφάλμα σύνδεσης στη βάση δεδομένων: " . $conn->connect_error);
}
// Εάν έχει γίνει υποβολή της φόρμας εγγραφής
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Πάρτε την τιμή από τη φόρμα
    $email = $_POST["email"];
    // Εισαγωγή της τιμής στον πίνακα των newsletters
    $sql = "INSERT INTO newsletters (email) VALUES ('$email')";
    if ($conn->query($sql) === TRUE) {
        echo "Επιτυχής εγγραφή στο Newsletter!";
    } else {
        echo "Σφάλμα κατά την εγγραφή: " . $conn->error;
    }
}
// Κλείσιμο της σύνδεσης με τη βάση δεδομένων
$conn->close();
?>
