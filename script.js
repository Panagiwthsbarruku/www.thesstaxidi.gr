document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('click', function() {
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});
function previewImage(event) {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }
}

function previewVideo(event) {
    const videoInput = document.getElementById('videoInput');
    const videoPreview = document.getElementById('videoPreview');
    
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            videoPreview.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute('6LfgcGYpAAAAAAFleTybafc-5w63xmfkOCWmSI2s', {action: 'LOGIN'});
  });
}
grecaptcha.ready(() => {
    grecaptcha.render('html_element', {
       'sitekey' : '6LfgcGYpAAAAAAFleTybafc-5w63xmfkOCWmSI2s'
    });
  });
  function previewFile() {
    var input = document.getElementById('fileInput');
    var previewImage = document.getElementById('previewImage');
    var previewVideo = document.getElementById('previewVideo');
    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (file.type.startsWith('image')) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
                previewVideo.style.display = 'none';
            } else if (file.type.startsWith('video')) {
                previewVideo.src = e.target.result;
                previewVideo.style.display = 'block';
                previewImage.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = 'none';
        previewVideo.style.display = 'none';
    }
}
function uploadFile() {
    var form = document.getElementById('uploadForm');
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log('Κατάσταση απάντησης:', xhr.status);
            console.log('Απάντηση:', xhr.responseText);
        }
    };

    xhr.open('POST', 'process.php', true);
    xhr.send(formData);
}
function registerUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Εδώ μπορείτε να προσθέσετε κώδικα για αποθήκευση των πληροφοριών σε μια βάση δεδομένων ή άλλο αποθηκευτικό μέσο.

    alert("Επιτυχής εγγραφή! Θα λάβετε ειδοποιήσεις για νέα μηνύματα.");
}
function saveUserData(username, email, password) {
    // Εδώ μπορείτε να προσθέσετε λογική για αποθήκευση σε βάση δεδομένων ή άλλο αποθηκευτικό μέσο.
    // Για το παράδειγμα, θα χρησιμοποιήσουμε έναν απλό πίνακα JavaScript.
var userData = {
        username: username,
        email: email,
        password: password
};

// Προσθήκη των πληροφοριών στον πίνακα
userDatabase.push(userData);
}
var userDatabase = [];

function registerUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    saveUserData(username, email, password);
    // Επιπλέον λειτουργίες (όπως επιβεβαίωση email) μπορούν να προστεθούν εδώ.
    alert("Επιτυχής εγγραφή! Θα λάβετε ειδοποιήσεις για νέα μηνύματα.");
}
document.getElementById('uploadButton').addEventListener('click', function() {
    var input = document.getElementById('videoUpload');
    var file = input.files[0];

    if (file) {
        uploadVideo(file);
    } else {
        alert('Παρακαλώ επιλέξτε ένα αρχείο βίντεο.');
    }
});

function uploadVideo(file) {
    var formData = new FormData();
    formData.append('video', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Το βίντεο ανέβηκε επιτυχώς.');
        } else {
            alert('Προέκυψε ένα σφάλμα κατά το ανέβασμα του βίντεο.');
        }
    })
    .catch(error => {
        console.error('Σφάλμα κατά το ανέβασμα του βίντεο:', error);
 });
}

