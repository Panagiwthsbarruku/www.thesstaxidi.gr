<?php
if ($_FILES['file']) {
    $uploadedFile = $_FILES['file'];
    $targetDir = 'uploads/';
    $targetFile = $targetDir . basename($uploadedFile['name']);

    // Ανεβάστε το αρχείο
    if (move_uploaded_file($uploadedFile['tmp_name'], $targetFile)) {
        echo 'Επιτυχές ανέβασμα αρχείου.';
    } else {
        echo 'Αποτυχία ανεβάσματος αρχείου.';
    }
} else {
    echo 'Δεν επιλέχθηκε αρχείο.';
}
?>
