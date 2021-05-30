package com.demos.mwebdemo;

import com.google.appengine.api.utils.SystemProperty;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableSet;

import java.io.IOException;
import java.util.*;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.*;
import javax.servlet.http.*;

@WebServlet("/uach")
public class UserAgentClientHint extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

        List<String> clientHintList = ImmutableList.of("Accept-CH","Sec-CH-UA-Arch","Sec-CH-UA-Full-Version","Sec-CH-UA-Mobile",
                "Sec-CH-UA-Model","Sec-CH-UA-Platform-Version","Sec-CH-UA-Platform","Sec-CH-UA","Sec-CH-UA-Bitness","Viewport-Width", "Width");
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
        response.addHeader("Content-Type", "text/html; charset=utf-8");
        RequestDispatcher rd=request.getRequestDispatcher("uach-res/index.jsp");
        rd.forward(request, response);//method may be include or forward

  }

    private String getCH(Map<String, Boolean> enabledHints, List<String> clientHintList) {
      StringBuffer clientHints = new StringBuffer();
      for (String hint:clientHintList){
          if (hint.equals("Accept-CH")){
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
