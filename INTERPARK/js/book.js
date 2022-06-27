$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"의학" },
    headers:{Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $(".bslide li .lboxImg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/></div>");
            $(".bslide li .lboxTxt1").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');
            $(".bslide li .lboxTxt1").eq(i).append('<h6>'+msg.documents[i].authors+'</h6>');              
            $(".bslide li .lboxTxt2").eq(i).append('<p>'+msg.documents[i].contents.substring(0,100)+'...</p>');

        }
              

             

             
              

        
    });