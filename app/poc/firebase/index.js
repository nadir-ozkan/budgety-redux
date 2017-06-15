import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCgr8v6ARCjL8OzSZRGDNS1JeKLz4bKFtc",
    authDomain: "math-game-c66ec.firebaseapp.com",
    databaseURL: "https://math-game-c66ec.firebaseio.com",
    projectId: "math-game-c66ec",
    storageBucket: "math-game-c66ec.appspot.com",
    messagingSenderId: "447354560168"
  };

firebase.initializeApp(config);

var fbRef = firebase.database().ref();

const initDb = () => { // set metodu ile veri yazma
  fbRef.set({
    app : {
      name : "Todo App",
      version : "0.0.1"
    },
    isRunning : true,
    user : {
      name : "Nadir Özkan",
      age : 38
    }
  }).then(() => {
      console.log("Veri tabanına ilk kayıt atıldı.")},
    (e) => {
      console.log("Yazma hatası", e.toString());
    }
  );

  fbRef.child("user/name").set("Çınar Özkan"); // implicit update
  fbRef.child("app/name").set("Todo App Redux"); // implicit update

}

const updateDb = () => { // update metodu ile veri güncelleme
  fbRef.update({isRunning : false});
  fbRef.update({'app/name' : "Mutlu Akü"});
  fbRef.child("app").update({name : "Sağlamsa Lassa"}); // root/app/name

  fbRef.update({
    "app/name"  : "Math Game",
    "user/name" : "Zerdali"
  });
}

const deleteData = () => { // remove ve update(değer : null) metodları ile veri silme
  fbRef.child("app/version")
        .remove()
        .then(()=> {
          alert("Versiyon bilgisi silindi.");
        });

  fbRef.child("app").set({
    name : "Mahmut",
    version : "0.0.2",
    type : "Deneysel"
  }).then( ()=>{ // kayıt işlemi bittikten sonra.
    setTimeout(()=>{
      fbRef.child("app").update({
        type : null,
        version : "0.0.3"
      })
    },2000);
  });

}

const fetchAll = () => {
  fbRef.once("value").then(
    (snapshot) => {
      console.log("Db ", snapshot.val());
    },
    (e) => {
      console.log(e.toString());
    }
  )
}

const fetchData = (ref) => {
  return fbRef.child(ref).once("value");
}

//initDb();
//fetchAll();
//fetchData("app").then((snapshot)=>{console.log(snapshot.val());});

fbRef.on("value", (snapshot)=> { // Tüm veri tabanındaki değişikliklerde çalışır.
  console.log("On :" , snapshot.val());
});

fbRef.off(); // ref üzerindeki tüm dinleyicileri uçurur.

const logAllData = (snapshot) => {console.log("On :" , snapshot.val()); };

fbRef.on("value", logAllData);
fbRef.off("value", logAllData); // bu şekilde sadece logAllData dinleyicisini uçurur.

const userWatcher = (snapshot) => {
  console.log("User watcher : ", snapshot.val() );
};

fbRef.child("user").on("value", userWatcher); // userWatcher adlı dinleyiciyi ekle.

fbRef.child("user").update({name : "Hüseyin"});
fbRef.child("app").update({name : "Eğitim"});

fbRef.off("value", userWatcher); // userWatcher dinleyicisini uçur.

let notesRef = fbRef.child("notes");

let newNote = notesRef.push(); // Bu notes noduna eklenen yeni öğenin referansını döner.
newNote.set({
  text : "Kediyi çişe götür",
  time : new Date().toLocaleTimeString()
}); // Yeni notun içini doldur.

let newNote2 = notesRef.push().set({text : "Atı çişe götür", time : new Date().toLocaleTimeString()}); // push ve set metodu bu şekilde zincirlenebilir.
// Ya da set hiç kullanılmadan doğrudan push'a bir nesne göndererek de yeni bir öğe eklenebilir.
let newNote3 = notesRef.push({text : "Deveyi çişe götür", time : new Date().toLocaleTimeString()});

let notesAddedWatcher = (snapshot) => {
  console.log("Note added", snapshot.key, snapshot.val());
}

notesRef.on("child_added", notesAddedWatcher);

let todosRef = fbRef.child("todos");
todosRef.push({
  text : "Atı çişe götür"
});
