$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let vowelsArray = [
      "a", "e", "i", "o", "u"
    ];
    let input = $("#input").val();
    let inputArray = input.split("");
    for (let index = 0; index < inputArray.length; index++) {
      for (let index2 = 0; index2 < vowelsArray.length; index2++) {
        if (inputArray[index] === vowelsArray[index2]) {
          inputArray[index] = "-";
        }
      }
    }
    $("#input").val("");
    $("#output").text(inputArray.join(""));
  });
});

//inputArray.forEach(function (input) {
//  if (/[aeiou]/.test(inputArray[input]) === true)
//    inputArray[input] = "-"
//  })
//})

///[aeiou]/.test("a") = true