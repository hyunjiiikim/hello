/*var name = "Hello world!";

function changeName(name) {
    name = name;
    return name;
}

changeName("김현지");
console.log(name);*/

//changeName 함수 내에서 name(함수 내에서만 유효한 지역변수)의 값을 변경해도 외부의 name 변수에는 영향이 없음
//함수에서 외부 변수를 직접 변경해야 함

var name = "Hello world!";

function changeName() {
    name = "김현지";
    return name;
}

changeName();
console.log(name);