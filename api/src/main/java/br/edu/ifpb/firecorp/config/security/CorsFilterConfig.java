package br.edu.ifpb.firecorp.config.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilterConfig implements Filter {
	
	private final String ORIGEM_REQUISICAO = "http://localhost:4200";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		
		httpResponse.setHeader("Access-Control-Allow-Origin", ORIGEM_REQUISICAO);
		httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
        
		if (podeObterOptions(httpRequest)) {
			httpResponse.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
			httpResponse.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept");
			httpResponse.setHeader("Access-Control-Max-Age", "3600");
			httpResponse.setStatus(HttpServletResponse.SC_OK);
		} else {
			chain.doFilter(request, response);
		}
    	
	}
	
	private boolean podeObterOptions(HttpServletRequest httpRequest) {
		return httpRequest.getMethod().equals("OPTIONS") &&  httpRequest.getHeader("Origin").equals(ORIGEM_REQUISICAO);
	}
	
}
