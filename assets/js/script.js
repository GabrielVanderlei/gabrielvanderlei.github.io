
// Initialize Firebase

  
function register(){
  
    email = $("#email").val();
    password = $("#senha").val();

    errorFn = function(error){
        alert(error);
    };

    sucessFn = function(data){
        alert(data);
    };

    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(errorFn)
    .then(sucessFn);
}

function login(){

    email = $("#email").val();
    password = $("#senha").val();

    errorFn = function(error){
        alert(error);
    };

    sucessFn = function(data){
    };

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(errorFn)
    .then(sucessFn);
}

function logout(){
    firebase
    .auth()
    .signOut();
    window.location.reload();
}






