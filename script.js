const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Select media stream ->pass to video element

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(
      '🚀 ~ file: script.js ~ line 11 ~ selectMediaStream ~ error',
      error
    );
  }
};

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();
