const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "916238640308-74p27e69d08ni6kia7pjuil408tlehk5.apps.googleusercontent.com";
//The token goes here
let token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJ************nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTI0MTMwMjc4NzY0MDAz**taXNoQGdvb2dsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiOTE2MjM4NjQwMzA4LTc0cDI3ZTY5ZDA4bmk2a2lhN3BqdWlsNDA4dGxlaGs1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiZXhwIjoxNTM0MjM5ODYyLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiJjYjM5YjVkYmRiZDgxZmRmM2E4YjhhMDk5MGJhYzljMWVjYWU4ODNlIiwiaWF0IjoxNTM0MjM2MjYyLCJuYmYiOjE1MzQyMzU5NjIsIm5hbWUiOiJQcmFzaGFudCBNaXNocmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1BV3ZMSC10OTdsTS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFURS8xSkszblpmMXV5cy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiUHJhc2hhbnQiLCJmYW1pbHlfbmFtZSI6Ik1pc2hyYSJ9.s8Qbw6zr7Gq0BY6xkheTdanFKBLwIYs_RdIgaHbMeZDFceAJfLDdtCDmZGq7gJhg-8QeKzlL9zD3XdA5U0XDNl9vbbV1PKL7Kr_lnGHKDzhUvCcG8uGitRg53Z3H5J6be9LCx-XkKI112Tx8UHPpARe_uswu40EJNDzUn4aMbSy831qYKFlHNVb7PBtnX9WNKZdXAUUb1EnIeP8h9LgEhUyIArxaYzYNe5keb8Tpl06Nvs98egpivNDp8X5ZTqEfGPJF4jSVff9DGDWygNnK2lSf2yL_CD4Atf5Ulw5g2VXsFw02l0hFhWUIPGxqMSX9YJtF2w3xg48vgx-0Lt86OQ';

const client = new OAuth2Client(CLIENT_ID);
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  console.log(`User Id: ${userid} `);
  console.log(`Payload: ${JSON.stringify(payload)} `);
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  
  /*
  
  This returns the user info: Masked some info
  
  {
	"aud": "916238640308-74p27e69d08ni6kia7pjuil408tlehk5.apps.googleusercontent.com",
	"sub": "112413027000000405",
	"hd": "***.com",
	"email": "***@.com",
	"email_verified": true,
	"azp": "916238640308-74p27e69d08ni6kia7pjuil408tlehk5.apps.googleusercontent.com",
	"exp": 1534239862,
	"iss": "https://accounts.google.com",
	"jti": "cb39b5dbdbd81fdf3a8b8a0990bac9c1ecae883e",
	"iat": 1534236262,
	"nbf": 1534235962,
	"name": "Prashant Mishra",
	"picture": "https://lh4.googleusercontent.com/____/photo.jpg",
	"given_name": "Prashant",
	"family_name": "Mishra"
}
  
  */
  
}
verify(token).catch(console.error);