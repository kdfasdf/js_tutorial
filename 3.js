<!DOCTYPE html>
  <html lang="ko">
    <head>
    <meta charset="UTF-8">
      <title>JavaScript Output</title>
    </head>
<body>
        <h1>HTML DOM 요소를 이용한 innerHTML 프로퍼티</h1>
        <p id="text"> 바뀔 문장</p>
</body>

<scrpit>
          var str = document.getElementById("text");
str.innerHTML="이 문장으로 바뀌었습니다!!";
</script>
</html>
