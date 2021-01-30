
const submit = document.getElementById('file').value;
const image = document.getElementById('image_url');
const id_img = document.getElementById('output');
const pred = document.getElementById('pred');



let model;

submit.onclick = () => {
  const url = submit.value;
  submit.src = url;
  pred.innerText = "Looding ..."

}

id_img.onload = () => {
  doPred();
}

function doPred() {
  mobilenet.load().then(model => {
    (model = model);
    if (model) {
      model.classify(id_img).then(predictions => {
        showPred(predictions);
        console.log(predictions);
        id_img.style.display ="";
      })
    }else{
      mobilenet.load().then(_model => {
        model = _model;
        model.classify(id_img).then(predictions => {
          showPred(predictions);
          console.log(predictions);
          id_img.style.display = " ";
        })
      })
    }

function showPred(predictions) {
  pred.innerText = "This is : " + predictions[0].className;
};
}
  )}
  var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };