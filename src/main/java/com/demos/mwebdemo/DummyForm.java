package com.demos.mwebdemo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DummyForm
 */
@WebServlet("/dummyform")
public class DummyForm extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DummyForm() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/*
access-control-allow-credentials: true
access-control-allow-headers: Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token
access-control-allow-methods: POST, GET, OPTIONS
access-control-allow-origin: https://mweb-demos.appspot.com
access-control-expose-headers: AMP-Access-Control-Allow-Source-Origin
amp-access-control-allow-source-origin: https://mweb-demos.appspot.com
		 */
		// TODO Auto-generated method stub
		
		response.addHeader("access-control-allow-credentials", "true");
		response.addHeader("access-control-allow-headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");
		response.addHeader("access-control-allow-methods", "POST, GET, OPTIONS");
		response.addHeader("access-control-allow-origin", "https://mweb-demos.appspot.com");
		response.addHeader("access-control-expose-headers", "AMP-Access-Control-Allow-Source-Origin");
		response.addHeader("amp-access-control-allow-source-origin", "https://mweb-demos.appspot.com");
		
		PrintWriter out = response.getWriter();
		out.print("{\"status\":\"success\"}");
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
