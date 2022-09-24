const client = stitch.Stitch.initializeDefaultAppClient('challengeford-xdrkg');
const url_base = "https://data.mongodb-api.com/app/challengeford-xdrkg/endpoint/";
Login();

function Login() {
    if (client.auth.isLoggedIn) {
        console.log('already logged in');
        return Promise.resolve();
    } else {
        window.location.href = "login.html"
    }
}