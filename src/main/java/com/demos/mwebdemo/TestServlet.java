package com.demos.mwebdemo;

import com.google.appengine.api.utils.SystemProperty;

import java.io.IOException;
import java.util.Enumeration;
import java.util.List;
import java.util.Properties;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

@WebServlet(name = "FormServlet", value = "/formservlet")
public class TestServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    Properties properties = System.getProperties();

    response.setContentType("text/plain");
    response.getWriter().println("Hello App Engine - Standard using "
        + SystemProperty.version.get() + " Java " + properties.get("java.specification.version"));
  }

  @Override
  
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {
	   
	  response.addHeader("Access-Control-Allow-Origin", "*");
	  response.addHeader("AMP-Access-Control-Allow-Source-Origin", "https://mweb-demos.appspot.com");
	  response.addHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin");
	  
	  response.setContentType("text/plain");
		
		 Enumeration<String> params =  request.getParameterNames();
		 if(!params.hasMoreElements()) {response.getWriter().println("NO FORM DATA RECEIVED");}
		 while(params.hasMoreElements()) {
			try{System.out.println(params.nextElement() +" - "+request.getParameter(params.nextElement())); }catch(Exception e) {};
		 }
		try {
			 List<FileItem> multiparts = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
			    for (FileItem item : multiparts) {
			        if (item.isFormField()) {
			            String name = item.getFieldName();
			            String value = item.getString();
			            response.getWriter().println("{\"dob\":\""+value+"\"}");
			        } 
			}
		}catch(Exception e) {
			e.printStackTrace();
		}

 

response.flushBuffer();

  }
  
  public static String getInfo() {
    return "Version: " + System.getProperty("java.version")
          + " OS: " + System.getProperty("os.name")
          + " User: " + System.getProperty("user.name");
  }

}
