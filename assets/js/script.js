
// Initialize Firebase
function enviarEmail(){
    Email.send({
        SecureToken : "f44bcba5-502a-419e-b4be-3ad7fabb8bd5",
        To : 'contato@vanderlei.ga',
        From : "contato@vanderlei.ga",
        Subject : $("#subject").val(),
        Body : $("#body").val()
    }).then(function(message){
        if(message == "OK"){
            alert("E-mail enviado, obrigado por entrar em contato.");
        } else{
            alert("Ocorreu um erro ao enviar o e-mail, desculpe pelo ocorrido.");
        }
    });
}
  
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






