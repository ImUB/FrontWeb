var db

if (!window.openDatabase)
{
    alert("이 Browser 는 Web SQL Database 를 지원하지 않습니다.");
}
else
{
      db = openDatabase("MyDB", "1.0", "고객 DB", 2*1024*1024);
      db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS mydb (id, pass, name, sex, tel, mail, birth, age, hot)');
      });
};

function saveCustom() {
  var id = document.getElementById('username2');
  var pass = document.getElementById('pass1');
  var name = document.getElementById('name');
  var sex = document.getElementsByName('sex');
  var tel = document.getElementById('tel');
  var mail = document.getElementById('mail');
  var birth = document.getElementById('birth');
  var age = document.getElementById('age');
  var hot = document.getElementById('hot');

  db.transaction(function(tx) {
    tx.executeSql('INSERT INTO mydb VALUES(?,?,?,?,?,?,?,?,?)',
    [id.value,pass.value,name.value,sex.value,tel.value,mail.value,birth.value,age.value,hot.value]);
  });
}

function

// function insertData()
// {

//
//   db.transaction(function(tx)
//   {
//     tx.executeSql("insert into custom values(?,?,?,?,?,?,?,?,?)",
//     [id.value,pass.value,name.value,sex.value,tel.value,mail.value,birth.value,age.value,hot.value]);
//   });
//
//   alert('데이터 추가 완료');
// }
