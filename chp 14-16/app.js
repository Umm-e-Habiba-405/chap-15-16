// ------------chp 14-16----------
    //       Question no:1
    // let studentNames = [];
    //       Question no:2
    // let studentNames = {};
    //        Question no:3
    // let string_array=["hiba","apple","maths"];
    //        Question no:4
    //  let numbers_string=[1,2,3,4];
    //        Question no:5
    // let boolean_array=[true,false];
    //          Question no:6
    // let mixed_array=["mango",2,true,];
        //     Question no:7
//      let education_qualification=[" SSC ", " HSC ", " BCS "," BS ", " BCOM ", " MS ", " M. Phil ", " PhD "];
//      document.write("<h2>Educational Qualification</h2>");
//      document.write("<ul>");
//      for(i=0; i<education_qualification.length; i++){
//         document.write("<li>" + education_qualification[i] + "<li>");
//      }
//   document.write("</ul>");
    // Question no:8
// let studentNames = ["micheal", "john", "tony"];
// let studentScores = [320, 230, 480];
// let totalMarks = 500;
// for (let i = 0; i < studentNames.length; i++) {
//   let score = studentScores[i];
//   let percentage = (score / totalMarks) * 100;
//  document.write( "Scores is    " + studentNames [i] + score +  " . " + " percentage: " + percentage + "%" + "<br>");
  
// }
 
    // Question no:9
    // part(a)
    // let colors = ["Red", "Green", "Blue", "Yellow"];
// document.write("<h2>Color Names:</h2>");
// document.write("<ul>");
// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ul>");
       // part(b)
// let newColor = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(newColor);
// document.write("<h2>Updated Color Names:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }

// document.write("</ul>");
      // part(c)
// let newColor = prompt("Enter a color to add to the end  of the array:");
// colors.push(newColor);
// document.write("<h2>Updated Color Names:</h2>");

// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
        // part(d)
// let color1 = prompt("Enter the first color:");
// let color2 = prompt("Enter the second color:");
// colors.unshift(color2, color1);
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(", "));
    // part(e)
//     let newColor = prompt("Enter a color to delete to the begining of the array:");
// colors.shift(newColor);
// document.write("<h2>Updated Color Names:</h2>");

// for (let i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");

// }
    // part(f)
//     let index = prompt("Enter the index where you want to add the color:");
// let color = prompt("Enter the color name:");
// index = +(index);
// colors.splice(index,0, color);
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(", "));
//   part(g)
// let index = prompt("Enter the index from where you want to delete color(s):");
// let numToDelete = prompt("Enter the number of colors to delete:");
// index = +(index);
// numToDelete = +(numToDelete);
// let deletedColors = colors.slice(index, numToDelete);
// document.write("<h2>Updated Array:</h2>");
// document.write(colors.join(", "));
// // document.write(deletedColors);
    // Question no:10
//     let student_scores=[320,230,480,120];
//   student_scores.sort(); 
//     document.write("Order scores of student: " + student_scores.sort())
//    Question no:11
//   let cities=["karachi","lahore","islamabad","quetta","peshawar"];
// document.write("cities List : " +cities +"<br>");
//  document.write("Selected Cites: " +cities.slice(1,3));
    // Question no:12
//     let array = ["This", "is", "my", "cat"];
// let singleString = array.join(" ");
// document.write("array: " +array + "<br>");

// document.write( "string: " + singleString);
    // Question no:13
   // Create a new array
// let  myArray = [];
// myArray.push("keyborad");
// myArray.push("mouse");
// myArray.push("printer");
// myArray.push("monitor");
// for (let i = 0; i < myArray.length; i++) {
//   document.write( "out: <br> " +myArray[i] +"<br>");
// }
    //   Question no:14
//     let  myArray = [];
// myArray.push("keyborad");
// myArray.push("mouse");
// myArray.push("printer");
// myArray.push("monitor");
// while (myArray.length > 0) {
//   let value = myArray.pop();
//   document.write( " out: <br> " +value  +"<br> ");
// } 
    //  Question no:15
    let mob_array=["Apple","Samsung", "Motorola", "Nokia ", "Sony" ," Haier"];
    document.write("<select>");
for (let i = 0; i < mob_array.length; i++) {
  document.write("<option value= +  mob_array[i] + >" +  mob_array[i] + "</option>");
}
document.write("</select>");