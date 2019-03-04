package com.demos.mwebdemo;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class WellKnownFetcher
 */
@WebServlet("/.well-known/assetlinks.json")
public class WellKnownFetcher extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WellKnownFetcher() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	response.getWriter().append("Served at: ").append(request.getContextPath());
		
		PrintWriter out = response.getWriter();
		
		String assetFile = "[{\n" + 
				"  \"relation\": [\"delegate_permission/common.handle_all_urls\"],\n" + 
				"  \"target\" : { \"namespace\": \"android_app\", \"package_name\": \"com.innovativedemoapps.twa.sample\",\n" + 
				"               \"sha256_cert_fingerprints\": [\"B3:CC:49:A4:EF:B9:12:BD:DB:D5:B9:62:AE:CF:E7:FE:91:45:3E:7C:FA:D2:55:A2:65:0D:9A:05:25:57:15:98\"] }\n" + 
				"}]";
		
	/*	
		StringBuilder assetLine = new StringBuilder("");

		//Get file from resources folder
		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource("assetlinks.json").getFile());

		try (Scanner scanner = new Scanner(file)) {

			while (scanner.hasNextLine()) {
				String line = scanner.nextLine();
				assetLine.append(line).append("\n");
			}

			scanner.close();

		} catch (IOException e) {
			e.printStackTrace();
		}
		
		out.print(assetLine.toString());
		out.flush();
		
		*/
		
		out.println(assetFile);
		out.flush();
		
	}

}
