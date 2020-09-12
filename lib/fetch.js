module.exports = {
    // body 중간에 a태그 생성(글 생성용 create)
    html: function () {
        return `
        <!DOCTYPE html>
        <html>
        <article id="1">
    
        </article>
        <body>
            <input type="button" value="fetch" onclick="
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(function(json){
                console.log('after async function call');
                console.log(json)
                if(json.status=='404'){
                    alert('Not Found');
                }
                document.getElementById('1').innerHTML=json.url;
            })
            console.log('before async function call'); 
            ">
        </body>
        </html>
        `;
    }
}


/* 

    fetch api 분석

        fetch : url을 통한 데이터 요청

        .then : 응답이 끝나면 콜백 함수 실행(비동기, 응답 전까지는 다른 코드 실행)

    수정사항

        기존 예제에서는 'css'라는 파일의 문자열을 가져왔으나,
            fetch를 사용한 로컬 파일 로드가 대신, html 코드가 가져와져 json으로 대체

*/
