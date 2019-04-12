package com.demos.mwebdemo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AMPCacheUpdatePubKeyFetcher
 */
@WebServlet("/.well-known/amphtml/apikey.pub")
public class AMPCacheUpdatePubKeyFetcher extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AMPCacheUpdatePubKeyFetcher() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		PrintWriter out = response.getWriter();
		
		String pubKey = "-----BEGIN PUBLIC KEY-----\n" + 
				"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4FwY5THxIU9HvCdNbSuo\n" + 
				"nsCoLS/yN3NA02g7WflExYSmnztRePkIo3VULa8/bdKsW3lwyJxWJz//zP3ubWq4\n" + 
				"DBdpUFvasmDeflhJ0gSBt4JAR6I+HK41hDRtW37P1n48cFDgkPtXFhvZN7H4QmfU\n" + 
				"JeICkec8iq0cLbz9CVWFU+AZ1+MiMXpQ5T1bhxwNSLgygK0NN3Kj/Axm4P1XTme4\n" + 
				"cijl9GDDZAkWTio7ZhmW+gUU1ZH9fv0V4GxQz4hdP0fahqpsAZ8rLE6bfYP0JNAR\n" + 
				"mSCVH7dGiEXX++6YyoW2E+HCnUwMg/oIbiPY+nSerrt4yWxwHd65ELtwKvCsUAdM\n" + 
				"YwIDAQAB\n" + 
				"-----END PUBLIC KEY-----";
		
		out.println(pubKey);
		out.flush();
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
