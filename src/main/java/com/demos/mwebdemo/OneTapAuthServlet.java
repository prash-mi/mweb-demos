package com.demos.mwebdemo;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.util.Utils;
import com.google.gson.Gson;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
/**
 * Servlet implementation class OneTapAuthServlet
 */
@WebServlet("/onetapauth")
public class OneTapAuthServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public OneTapAuthServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    private static final String CLIENT_ID = "916238640308-74p27e69d08ni6kia7pjuil408tlehk5.apps.googleusercontent.com";

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
    
    private String getOAuthRes(String token) throws Exception{
    	

		System.out.println("\n\n\n>>>>>>>>>>>>>>>>>>>>>idTokenString: "+token);
		
		com.google.api.client.http.HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
        com.google.api.client.json.JsonFactory jsonFactoryd = Utils.getDefaultJsonFactory();
		   
		GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport,jsonFactoryd )
			    // Specify the CLIENT_ID of the app that accesses the backend:
			    .setAudience(Collections.singletonList(CLIENT_ID))
			    // Or, if multiple clients access the backend:
			    //.setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
			    .build();

			// (Receive idTokenString by HTTPS POST)

			GoogleIdToken idToken = verifier.verify(token);
			Map<String, String> hm = new HashMap<String, String>();
			if (idToken != null) {
			  Payload payload = idToken.getPayload();

			  // Print user identifier
			  String userId = payload.getSubject();
			  System.out.println("User ID: " + userId);

			  // Get profile information from payload
			  String email = payload.getEmail();
			  boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
			  String name = (String) payload.get("name");
			  String pictureUrl = (String) payload.get("picture");
			//  String locale = (String) payload.get("locale");
			  //String email = (String) payload.get("email");
			 // String familyName = (String) payload.get("family_name");
			 // String givenName = (String) payload.get("given_name");

			

				hm.put("name", name);
				hm.put("picture", pictureUrl);
				hm.put("email", email);
				hm.put("emailVerified", emailVerified?"true":"false");
				
			  // Use or store profile information
			  // ...

			} else {
				hm.put("err", "Invalid ID token");
			   System.out.println("Invalid ID token.");
			}
			 Gson g = new Gson();
			String res = g.toJson(hm);
			
			
    	return res;
    }
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String idTokenString = request.getParameter("token");
		String res = null, errMsg=null;
		try {
			res = getOAuthRes(idTokenString);
		} catch (Exception e) {
			errMsg = e.getMessage();
			System.out.println(e.getMessage());
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		ServletOutputStream out = response.getOutputStream();
		out.print(res== null? "{\"err\":true, \"msg\":\""+errMsg+"\"}":res);
		out.flush();
	
	}

}
