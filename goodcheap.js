//nhung link ben firebase
var firebaseConfig = {
    apiKey: "AIzaSyAJt2Ip_PdDsUMVPxhsLZRw8XT6Bez5-WM",
    authDomain: "goodcheap-4b69a.firebaseapp.com",
    projectId: "goodcheap-4b69a",
    storageBucket: "goodcheap-4b69a.appspot.com",
    messagingSenderId: "1010138961216",
    appId: "1:1010138961216:web:b07e15b88f14c71d0c16a5",
    measurementId: "G-CJPJ0M65QN"
};
//khoi tao firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()
    //bien truy cap
const db = firestore.collection("News/Store/ALL")

//get submit form
let submitbutton = document.getElementById('submit')

//tao su kien gui bieu mau
submitbutton.addEventListener("click", (e) => {
        //Ngan gui bieu mau mac dinh
        e.preventDefault()
        uploadImage()
            //nhan gia tri
        let diachi = document.getElementById('diachi').value
        let email = document.getElementById('email').value
        let giagoc = parseInt(document.getElementById('giagoc').value)
        let giatien = parseInt(document.getElementById('giatien').value)
        let hansudung = document.getElementById('hansudung').value
        let hinhanh = document.querySelector('#hinhanh').files[0].name
        let mota = document.getElementById('mota').value
        let ngay = document.getElementById('ngay').value
        let soluong = parseInt(document.getElementById('soluong').value)
        let ten = document.getElementById('ten').value
        let type = document.getElementById('type').value
            // luu du lieu den data
        db.doc().set({
            diachi: diachi,
            email: email,
            giagoc: giagoc,
            giatien: giatien,
            hansudung: hansudung,
            hinhanh: hinhanh,
            mota: mota,
            ngay: ngay,
            soluong: soluong,
            ten: ten,
            type: type
        }).then(() => {
            alert("Bạn đã Lưu thành công")
            console.log("Data saved")
        }).catch((error) => {
            console.log(error)
        })


    })
    //logout acc
let cancelbutton = document.getElementById('cancel')

cancelbutton.addEventListener("click", (e) => {
        firebase.auth().signOut().then(function() {
            window.location.href = "index.html";
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    })
    //hinh anh
function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector('#hinhanh').files[0];
    const metadata = {
        contentType: file.type
    };
    const name = file.name;
    const uploadIMG = ref.child("Store/" + name).put(file, metadata);
    uploadIMG
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);
        })
        .catch(console.error)
}