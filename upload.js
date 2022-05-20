
function setThumbnail(event) {
  console.log(event);
  var reader = new FileReader();
  reader.onload = (event) => {
    console.log(event);
    var img = document.querySelector("#image_file");
    img.setAttribute("src", event.target.result);
  };

  reader.readAsDataURL(event.target.files[0]);
}

