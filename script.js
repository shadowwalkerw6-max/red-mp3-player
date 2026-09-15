const audio = document.getElementById("audio");
const fileInput = document.getElementById("fileInput");
const playButton = document.getElementById("playButton");
const songName = document.getElementById("songName");

let selectedFile = null;

fileInput.addEventListener("change", function () {

    if (this.files.length === 0) {
        return;
    }

    selectedFile = this.files[0];

    // Show song name
    songName.textContent = selectedFile.name;

    // Create audio URL
    const audioURL = URL.createObjectURL(selectedFile);

    audio.src = audioURL;

    // Load the song
    audio.load();

    playButton.textContent = "▶️";
});

playButton.addEventListener("click", function () {

    if (!selectedFile) {
        alert("Please choose a song first.");
        return;
    }

    if (audio.paused) {

        audio.play()
            .then(function () {
                playButton.textContent = "⏸️";
            })
            .catch(function (error) {
                alert("The song could not be played.");
                console.log(error);
            });

    } else {

        audio.pause();

        playButton.textContent = "▶️";
    }
});

audio.addEventListener("ended", function () {
    playButton.textContent = "▶️";
});