$(document).ready(function() {
  $("#download").click(function() {
    $.ajax({
      url: "/",
      type: "GET",
      success: function(response){
        if(response != 0){
          console.log('file uploaded');
        } else {
          console.log('file not uploaded');
        }
      }
    })
  })


  $("#upload").click(function() {
    var file = $('#file')[0].files[0];

    var reader = new FileReader();

    reader.onload = function(event) {
      var content = event.target.result;
      console.log(content);

      $.ajax({
        url: "/",
        type: "POST",
        data: content,
        contentType: 'application/json',
        success: function(response){
          if(response != 0){
            console.log('file uploaded');
          } else {
            console.log('file not uploaded');
          }
        }
      })
    }
    reader.readAsText(file);
  })
})

// const fileSelect = document.getElementById('file');
// fileSelect.addEventListener('change', read, false);

// function read() {
//   var fileInput = this.files;
//   var file = fileInput[0];

//   var reader = new FileReader();

//   console.log('reading file', fileInput);

//   reader.onload = function(event) {
//     var content = event.target.result;
//     console.log(content);
//     document.getElementById('data').innerText = content;
//   }

//   reader.readAsText(file);
//   console.log('result', reader.result);
// }