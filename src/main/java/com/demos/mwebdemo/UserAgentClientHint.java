package com.demos.mwebdemo;

import com.google.appengine.api.utils.SystemProperty;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableSet;


import java.io.IOException;

import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet("/uach")
public class UserAgentClientHint extends HttpServlet {
private static SimpleDateFormat timeFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss.SSS");
public static void logTimeStamp(HttpServletRequest request, String msg){
    boolean logEnabled = request.getParameter("log") != null;
    if (logEnabled){
        System.out.println(msg+timeFormatter.format(System.currentTimeMillis()));
    }
}
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      logTimeStamp(request,"com.demos.mwebdemo.UserAgentClientHint: doGet called @ ");
        List<String> clientHintList = ImmutableList.of("Accept-CH","Sec-CH-UA-Arch","Sec-CH-UA-Full-Version","Sec-CH-UA-Mobile",
                "Sec-CH-UA-Model","Sec-CH-UA-Platform-Version","Sec-CH-UA-Platform","Sec-CH-UA","Sec-CH-UA-Bitness","Viewport-Width", "Width",
                "Critical-CH","C_Sec-CH-UA-Arch","C_Sec-CH-UA-Full-Version","C_Sec-CH-UA-Mobile",
                "C_Sec-CH-UA-Model","C_Sec-CH-UA-Platform-Version","C_Sec-CH-UA-Platform","C_Sec-CH-UA","C_Sec-CH-UA-Bitness","C_Viewport-Width", "C_Width");//C_ prefix implies Crirical CHs
        Set<String> clientHintSet = new HashSet<>();

        Map<String, Boolean> enabledHints = new HashMap<>();
        for (String ch: clientHintList){
          clientHintSet.add(ch.toUpperCase());
          enabledHints.put(ch,request.getParameter(ch)!=null && request.getParameter(ch).equals("1"));
        }
        request.setAttribute("enabledHints", enabledHints);
        request.setAttribute("clientHintSet", clientHintSet);
        if (enabledHints.get("Accept-CH")){//if this is enabled
            response.addHeader("Accept-CH", getCH(enabledHints, clientHintList));
        }
          if (enabledHints.get("Critical-CH")){//if this is enabled
              response.addHeader("Critical-CH", getCriticalCH(enabledHints, clientHintList));
          }
        response.addHeader("Content-Type", "text/html; charset=utf-8");
        RequestDispatcher rd=request.getRequestDispatcher("uach-res/index.jsp");
        logTimeStamp(request,"com.demos.mwebdemo.UserAgentClientHint: Dispatching Request to uach-res/index.jsp @ ");
        rd.forward(request, response);//method may be include or forward

  }

    private String getCriticalCH(Map<String, Boolean> enabledHints, List<String> clientHintList) {
        StringBuffer clientHints = new StringBuffer();
        for (String hint:clientHintList){
            if (hint.equals("Critical-CH")){
                continue;
            }
            if (enabledHints.get(hint) && hint.startsWith("C_")){//this is enabled and is a critical client hint
                if (clientHints.length()!=0){
                    clientHints.append(", ") ;
                }
                clientHints.append(hint.substring(2, hint.length()));//ignore C_ prefix
            }
        }
        return clientHints.toString();

    }

    private String getCH(Map<String, Boolean> enabledHints, List<String> clientHintList) {
      StringBuffer clientHints = new StringBuffer();
      for (String hint:clientHintList){
          if (hint.equals("Accept-CH") || hint.startsWith("C")){//do not append critical client hints here
              continue;
          }
          if (enabledHints.get(hint)){//this is enabled
              if (clientHints.length()!=0){
                  clientHints.append(", ") ;
              }
              clientHints.append(hint);
          }
      }
      return clientHints.toString();
    }


    @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
    doGet(request, response);
  }

}
