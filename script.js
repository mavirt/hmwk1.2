var name1 = prompt("What is the first user's name?");
  var like1= prompt("What is the first user's favorite candy?");
  var dislike1 = prompt("What is the first user's least favorite candy?");

  var name2 = prompt("What is the second user's name?");
  var like2= prompt("What is the second user's favorite candy?");
  var dislike2 = prompt("What is the second user's least favorite candy?");

  function user1(class1){
      document.querySelector(".div1").innerHTML = "Hi my name is "+name1+", and my favorite candy is "+like1+".";
     document.querySelector(".div2").innerHTML = "Hi, the name is "+name1+" and "+dislike1+" is terrible!";
}
user1();


  function user2(class2){
      document.querySelector(".div3").innerHTML = "Hi my name is "+name2+", and my favorite candy is "+like2+".";
     document.querySelector(".div4").innerHTML = "Hi, the name is "+name2+" and "+dislike2+" is terrible!";
}
user2();