var db;
window.onload = function(){
  if(!window.openDatabase) {
    alert('Web SQL Database를 지원하지 않습니다.');
    return;
  }
  db = openDatabase('mydb','1.0','회원정보 DB', 1024*1024);

  db.transaction(function(tx) {
    tx.executeSql('create table if not exists mydb(mydb_id integer primary key autoincrement,my_id, my_pass, my_name, my_sex, my_tel, my_mail, my_birth, my_age, my_hot)');
  });

  load();

  document.getElementById('myForm').onsubmit = function(){

    if(document.getElementById('btnadd').value == '확인'){
      add();
    }
    else {
      window.close;
    }
  }
}
