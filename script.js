const VULN_DATA = {"topics": [{"id": "vuln-information-disclosure", "name": "Information disclosure", "desc": "Dados sensíveis expostos sem querer: em mensagens de erro, páginas de debug, código-fonte ou histórico do Git.", "novo": "Nenhuma ferramenta nova. Só usar Proxy, Repeater e o DevTools do navegador para procurar informação exposta.", "labs": [{"name": "Information disclosure in error messages", "level": "APPRENTICE", "solved": false}, {"name": "Information disclosure on debug page", "level": "APPRENTICE", "solved": false}, {"name": "Source code disclosure via backup files", "level": "APPRENTICE", "solved": false}, {"name": "Authentication bypass via information disclosure", "level": "APPRENTICE", "solved": false}, {"name": "Information disclosure in version control history", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-access-control-vulnerabilities", "name": "Access control vulnerabilities", "desc": "Falhas que permitem acessar uma função ou um dado de outro usuário: IDOR, URLs de admin escondidas, parâmetro de papel (role) manipulável.", "novo": "Nenhuma ferramenta nova. O foco é entender como o controle de acesso deveria funcionar e onde ele falha.", "labs": [{"name": "Unprotected admin functionality", "level": "APPRENTICE", "solved": true}, {"name": "Unprotected admin functionality with unpredictable URL", "level": "APPRENTICE", "solved": true}, {"name": "User role controlled by request parameter", "level": "APPRENTICE", "solved": true}, {"name": "User role can be modified in user profile", "level": "APPRENTICE", "solved": true}, {"name": "User ID controlled by request parameter", "level": "APPRENTICE", "solved": true}, {"name": "User ID controlled by request parameter, with unpredictable user IDs", "level": "APPRENTICE", "solved": true}, {"name": "User ID controlled by request parameter with data leakage in redirect", "level": "APPRENTICE", "solved": true}, {"name": "User ID controlled by request parameter with password disclosure", "level": "APPRENTICE", "solved": true}, {"name": "Insecure direct object references", "level": "APPRENTICE", "solved": false}, {"name": "URL-based access control can be circumvented", "level": "PRACTITIONER", "solved": false}, {"name": "Method-based access control can be circumvented", "level": "PRACTITIONER", "solved": false}, {"name": "Multi-step process with no access control on one step", "level": "PRACTITIONER", "solved": false}, {"name": "Referer-based access control", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-path-traversal", "name": "Path traversal", "desc": "Manipular caminhos de arquivo (../) para ler arquivos fora da pasta permitida pela aplicação.", "novo": "Codificação de URL e o Decoder do Burp, para entender bypass com %2e%2e, double encoding e null byte.", "labs": [{"name": "File path traversal, simple case", "level": "APPRENTICE", "solved": false}, {"name": "File path traversal, traversal sequences blocked with absolute path bypass", "level": "PRACTITIONER", "solved": false}, {"name": "File path traversal, traversal sequences stripped non-recursively", "level": "PRACTITIONER", "solved": false}, {"name": "File path traversal, traversal sequences stripped with superfluous URL-decode", "level": "PRACTITIONER", "solved": false}, {"name": "File path traversal, validation of start of path", "level": "PRACTITIONER", "solved": false}, {"name": "File path traversal, validation of file extension with null byte bypass", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-os-command-injection", "name": "OS command injection", "desc": "Injetar comandos do sistema operacional através de um campo que a aplicação repassa para o shell do servidor.", "novo": "Noções básicas de shell Linux (; | && backticks). Dois labs out-of-band vão para a seção de pulados.", "labs": [{"name": "OS command injection, simple case", "level": "APPRENTICE", "solved": false}, {"name": "Blind OS command injection with time delays", "level": "PRACTITIONER", "solved": false}, {"name": "Blind OS command injection with output redirection", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-sql-injection", "name": "SQL injection", "desc": "Injetar SQL para ler, alterar ou burlar autenticação no banco de dados. É o tema mais extenso do Academy, com ataques diretos, UNION e cegos (blind).", "novo": "SQL básico (SELECT, UNION, comentários), Burp Intruder para automatizar testes, e o conceito de Collaborator para os ataques out-of-band (2 labs ficam pulados, exigem Pro).", "labs": [{"name": "SQL injection vulnerability in WHERE clause allowing retrieval of hidden data", "level": "APPRENTICE", "solved": true}, {"name": "SQL injection vulnerability allowing login bypass", "level": "APPRENTICE", "solved": true}, {"name": "SQL injection attack, querying the database type and version on Oracle", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection attack, querying the database type and version on MySQL and Microsoft", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection attack, listing the database contents on non-Oracle databases", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection attack, listing the database contents on Oracle", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection UNION attack, determining the number of columns returned by the query", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection UNION attack, finding a column containing text", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection UNION attack, retrieving data from other tables", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection UNION attack, retrieving multiple values in a single column", "level": "PRACTITIONER", "solved": false}, {"name": "Blind SQL injection with conditional responses", "level": "PRACTITIONER", "solved": false}, {"name": "Blind SQL injection with conditional errors", "level": "PRACTITIONER", "solved": false}, {"name": "Visible error-based SQL injection", "level": "PRACTITIONER", "solved": false}, {"name": "Blind SQL injection with time delays", "level": "PRACTITIONER", "solved": false}, {"name": "Blind SQL injection with time delays and information retrieval", "level": "PRACTITIONER", "solved": false}, {"name": "SQL injection with filter bypass via XML encoding", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-nosql-injection", "name": "NoSQL injection", "desc": "Mesma lógica da SQLi, mas em bancos como MongoDB, usando operadores como $ne e $gt em vez de sintaxe SQL.", "novo": "Sintaxe JSON e operadores de bancos NoSQL. As ferramentas são as mesmas do SQLi.", "labs": [{"name": "Detecting NoSQL injection", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting NoSQL operator injection to bypass authentication", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting NoSQL injection to extract data", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting NoSQL operator injection to extract unknown fields", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-authentication", "name": "Authentication", "desc": "Falhas de login: enumeração de usuário, bypass de 2FA, proteção fraca contra força bruta, cookies previsíveis.", "novo": "Intruder em modo Cluster bomb / Pitchfork e o uso de listas de senhas (wordlists).", "labs": [{"name": "Username enumeration via different responses", "level": "APPRENTICE", "solved": false}, {"name": "2FA simple bypass", "level": "APPRENTICE", "solved": false}, {"name": "Password reset broken logic", "level": "APPRENTICE", "solved": false}, {"name": "Username enumeration via subtly different responses", "level": "PRACTITIONER", "solved": false}, {"name": "Username enumeration via response timing", "level": "PRACTITIONER", "solved": false}, {"name": "Broken brute-force protection, IP block", "level": "PRACTITIONER", "solved": false}, {"name": "Username enumeration via account lock", "level": "PRACTITIONER", "solved": false}, {"name": "2FA broken logic", "level": "PRACTITIONER", "solved": false}, {"name": "Brute-forcing a stay-logged-in cookie", "level": "PRACTITIONER", "solved": false}, {"name": "Offline password cracking", "level": "PRACTITIONER", "solved": false}, {"name": "Password reset poisoning via middleware", "level": "PRACTITIONER", "solved": false}, {"name": "Password brute-force via password change", "level": "PRACTITIONER", "solved": false}, {"name": "Broken brute-force protection, multiple credentials per request", "level": "EXPERT", "solved": false}, {"name": "2FA bypass using a brute-force attack", "level": "EXPERT", "solved": false}]}, {"id": "vuln-business-logic-vulnerabilities", "name": "Business logic vulnerabilities", "desc": "Abusar da lógica de negócio da aplicação (descontos, limites, fluxos de várias etapas) de um jeito que o desenvolvedor não previu.", "novo": "Nenhuma ferramenta nova. O desafio aqui é puramente de raciocínio, usando tudo o que você já aprendeu até aqui.", "labs": [{"name": "Excessive trust in client-side controls", "level": "APPRENTICE", "solved": false}, {"name": "High-level logic vulnerability", "level": "APPRENTICE", "solved": false}, {"name": "Inconsistent security controls", "level": "APPRENTICE", "solved": false}, {"name": "Flawed enforcement of business rules", "level": "APPRENTICE", "solved": false}, {"name": "Low-level logic flaw", "level": "PRACTITIONER", "solved": false}, {"name": "Inconsistent handling of exceptional input", "level": "PRACTITIONER", "solved": false}, {"name": "Weak isolation on dual-use endpoint", "level": "PRACTITIONER", "solved": false}, {"name": "Insufficient workflow validation", "level": "PRACTITIONER", "solved": false}, {"name": "Authentication bypass via flawed state machine", "level": "PRACTITIONER", "solved": false}, {"name": "Infinite money logic flaw", "level": "PRACTITIONER", "solved": false}, {"name": "Authentication bypass via encryption oracle", "level": "PRACTITIONER", "solved": false}, {"name": "Bypassing access controls using email address parsing discrepancies", "level": "EXPERT", "solved": false}]}, {"id": "vuln-file-upload-vulnerabilities", "name": "File upload vulnerabilities", "desc": "Subir um arquivo malicioso (web shell) para conseguir executar código no servidor.", "novo": "Conceito de web shell, Content-Type e magic bytes de arquivo.", "labs": [{"name": "Remote code execution via web shell upload", "level": "APPRENTICE", "solved": false}, {"name": "Web shell upload via Content-Type restriction bypass", "level": "APPRENTICE", "solved": false}, {"name": "Web shell upload via path traversal", "level": "PRACTITIONER", "solved": false}, {"name": "Web shell upload via extension blacklist bypass", "level": "PRACTITIONER", "solved": false}, {"name": "Web shell upload via obfuscated file extension", "level": "PRACTITIONER", "solved": false}, {"name": "Remote code execution via polyglot web shell upload", "level": "PRACTITIONER", "solved": false}, {"name": "Web shell upload via race condition", "level": "EXPERT", "solved": false}]}, {"id": "vuln-cross-site-scripting", "name": "Cross-site scripting", "desc": "Injetar JavaScript que roda no navegador de outro usuário. Categoria enorme: refletido, armazenado e baseado em DOM.", "novo": "JavaScript básico mais a fundo, e o Exploit Server do próprio Academy para simular ataques contra vítimas.", "labs": [{"name": "Reflected XSS into HTML context with nothing encoded", "level": "APPRENTICE", "solved": true}, {"name": "Stored XSS into HTML context with nothing encoded", "level": "APPRENTICE", "solved": true}, {"name": "DOM XSS in document.write sink using source location.search", "level": "APPRENTICE", "solved": false}, {"name": "DOM XSS in innerHTML sink using source location.search", "level": "APPRENTICE", "solved": false}, {"name": "DOM XSS in jQuery anchor href attribute sink using location.search source", "level": "APPRENTICE", "solved": false}, {"name": "DOM XSS in jQuery selector sink using a hashchange event", "level": "APPRENTICE", "solved": false}, {"name": "Reflected XSS into attribute with angle brackets HTML-encoded", "level": "APPRENTICE", "solved": false}, {"name": "Stored XSS into anchor href attribute with double quotes HTML-encoded", "level": "APPRENTICE", "solved": false}, {"name": "Reflected XSS into a JavaScript string with angle brackets HTML encoded", "level": "APPRENTICE", "solved": false}, {"name": "DOM XSS in document.write sink using source location.search inside a select element", "level": "PRACTITIONER", "solved": false}, {"name": "DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected DOM XSS", "level": "PRACTITIONER", "solved": false}, {"name": "Stored DOM XSS", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS into HTML context with most tags and attributes blocked", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS into HTML context with all tags blocked except custom ones", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS with some SVG markup allowed", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS in canonical link tag", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS into a JavaScript string with single quote and backslash escaped", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped", "level": "PRACTITIONER", "solved": false}, {"name": "Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting cross-site scripting to steal cookies", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting cross-site scripting to capture passwords", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting XSS to bypass CSRF defenses", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS with AngularJS sandbox escape without strings", "level": "EXPERT", "solved": false}, {"name": "Reflected XSS with AngularJS sandbox escape and CSP", "level": "EXPERT", "solved": false}, {"name": "Reflected XSS with event handlers and href attributes blocked", "level": "EXPERT", "solved": false}, {"name": "Reflected XSS in a JavaScript URL with some characters blocked", "level": "EXPERT", "solved": false}, {"name": "Reflected XSS protected by very strict CSP, with dangling markup attack", "level": "PRACTITIONER", "solved": false}, {"name": "Reflected XSS protected by CSP, with CSP bypass", "level": "EXPERT", "solved": false}]}, {"id": "vuln-cross-site-request-forgery-csrf", "name": "Cross-site request forgery (CSRF)", "desc": "Forçar o navegador de uma vítima já autenticada a enviar uma requisição sem ela perceber.", "novo": "O atributo SameSite dos cookies e como ele bloqueia (ou não) o ataque.", "labs": [{"name": "CSRF vulnerability with no defenses", "level": "APPRENTICE", "solved": false}, {"name": "CSRF where token validation depends on request method", "level": "PRACTITIONER", "solved": false}, {"name": "CSRF where token validation depends on token being present", "level": "PRACTITIONER", "solved": false}, {"name": "CSRF where token is not tied to user session", "level": "PRACTITIONER", "solved": false}, {"name": "CSRF where token is tied to non-session cookie", "level": "PRACTITIONER", "solved": false}, {"name": "CSRF where token is duplicated in cookie", "level": "PRACTITIONER", "solved": false}, {"name": "SameSite Lax bypass via method override", "level": "PRACTITIONER", "solved": false}, {"name": "SameSite Strict bypass via client-side redirect", "level": "PRACTITIONER", "solved": false}, {"name": "SameSite Strict bypass via sibling domain", "level": "PRACTITIONER", "solved": false}, {"name": "CSRF where Referer validation depends on header being present", "level": "PRACTITIONER", "solved": false}, {"name": "CSRF with broken Referer validation", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-clickjacking", "name": "Clickjacking", "desc": "Sobrepor a página real com uma camada invisível (iframe) para enganar cliques do usuário.", "novo": "HTML/CSS de iframe e a ferramenta Clickbandit, do próprio Burp.", "labs": [{"name": "Basic clickjacking with CSRF token protection", "level": "APPRENTICE", "solved": false}, {"name": "Clickjacking with form input data prefilled from a URL parameter", "level": "APPRENTICE", "solved": false}, {"name": "Clickjacking with a frame buster script", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting clickjacking vulnerability to trigger DOM-based XSS", "level": "PRACTITIONER", "solved": false}, {"name": "Multistep clickjacking", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-cross-origin-resource-sharing-cors", "name": "Cross-origin resource sharing (CORS)", "desc": "Configuração mal feita de CORS permitindo que um site malicioso leia dados de outra origem.", "novo": "Os cabeçalhos Origin e Access-Control-Allow-*.", "labs": [{"name": "CORS vulnerability with basic origin reflection", "level": "APPRENTICE", "solved": false}, {"name": "CORS vulnerability with trusted null origin", "level": "APPRENTICE", "solved": false}, {"name": "CORS vulnerability with trusted insecure protocols", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-dom-based-vulnerabilities", "name": "DOM-based vulnerabilities", "desc": "Vulnerabilidades que acontecem só dentro do navegador, via JavaScript, sem o servidor nunca ver o payload.", "novo": "A extensão DOM Invader do Burp, e os conceitos de source e sink em JavaScript.", "labs": [{"name": "DOM XSS using web messages", "level": "PRACTITIONER", "solved": false}, {"name": "DOM XSS using web messages and a JavaScript URL", "level": "PRACTITIONER", "solved": false}, {"name": "DOM XSS using web messages and JSON.parse", "level": "PRACTITIONER", "solved": false}, {"name": "DOM-based open redirection", "level": "PRACTITIONER", "solved": false}, {"name": "DOM-based cookie manipulation", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting DOM clobbering to enable XSS", "level": "EXPERT", "solved": false}, {"name": "Clobbering DOM attributes to bypass HTML filters", "level": "EXPERT", "solved": false}]}, {"id": "vuln-xml-external-entity-xxe-injection", "name": "XML external entity (XXE) injection", "desc": "Injetar entidades XML maliciosas para ler arquivos locais do servidor ou provocar um SSRF.", "novo": "Sintaxe de XML e DTD. Dois labs out-of-band vão para a seção de pulados.", "labs": [{"name": "Exploiting XXE using external entities to retrieve files", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting XXE to perform SSRF attacks", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting blind XXE to exfiltrate data using a malicious external DTD", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting blind XXE to retrieve data via error messages", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting XInclude to retrieve files", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting XXE via image file upload", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting XXE to retrieve data by repurposing a local DTD", "level": "EXPERT", "solved": false}]}, {"id": "vuln-server-side-request-forgery-ssrf", "name": "Server-side request forgery (SSRF)", "desc": "Forçar o servidor a fazer requisições para onde você quer, inclusive para endereços internos da rede.", "novo": "Nenhuma ferramenta nova. Um lab out-of-band vai para a seção de pulados.", "labs": [{"name": "Basic SSRF against the local server", "level": "APPRENTICE", "solved": false}, {"name": "Basic SSRF against another back-end system", "level": "APPRENTICE", "solved": false}, {"name": "SSRF with blacklist-based input filter", "level": "PRACTITIONER", "solved": false}, {"name": "SSRF with filter bypass via open redirection vulnerability", "level": "PRACTITIONER", "solved": false}, {"name": "Blind SSRF with Shellshock exploitation", "level": "EXPERT", "solved": false}, {"name": "SSRF with whitelist-based input filter", "level": "EXPERT", "solved": false}]}, {"id": "vuln-server-side-template-injection", "name": "Server-side template injection", "desc": "Injetar código dentro de motores de template (Jinja2, Freemarker etc.) para executar comandos no servidor.", "novo": "Noção de template engines e a metodologia de detecção com payloads como ${7*7}.", "labs": [{"name": "Basic server-side template injection", "level": "PRACTITIONER", "solved": false}, {"name": "Basic server-side template injection (code context)", "level": "PRACTITIONER", "solved": false}, {"name": "Server-side template injection using documentation", "level": "PRACTITIONER", "solved": false}, {"name": "Server-side template injection in an unknown language with a documented exploit", "level": "PRACTITIONER", "solved": false}, {"name": "Server-side template injection with information disclosure via user-supplied objects", "level": "PRACTITIONER", "solved": false}, {"name": "Server-side template injection in a sandboxed environment", "level": "EXPERT", "solved": false}, {"name": "Server-side template injection with a custom exploit", "level": "EXPERT", "solved": false}]}, {"id": "vuln-api-testing", "name": "API testing", "desc": "Testar endpoints de API que não aparecem na interface visual, parâmetros ocultos e mass assignment.", "novo": "Leitura de documentação de API no formato Swagger / OpenAPI.", "labs": [{"name": "Exploiting an API endpoint using documentation", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting server-side parameter pollution in a query string", "level": "PRACTITIONER", "solved": false}, {"name": "Finding and exploiting an unused API endpoint", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting a mass assignment vulnerability", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting server-side parameter pollution in a REST URL", "level": "EXPERT", "solved": false}]}, {"id": "vuln-jwt", "name": "JWT", "desc": "Falhas em tokens JWT: assinatura não verificada, chave fraca, injeção via header jwk/jku, confusão de algoritmo.", "novo": "Base64, a estrutura de um JWT (header.payload.assinatura) e noções de HMAC/RSA.", "labs": [{"name": "JWT authentication bypass via unverified signature", "level": "APPRENTICE", "solved": false}, {"name": "JWT authentication bypass via flawed signature verification", "level": "APPRENTICE", "solved": false}, {"name": "JWT authentication bypass via weak signing key", "level": "PRACTITIONER", "solved": false}, {"name": "JWT authentication bypass via jwk header injection", "level": "PRACTITIONER", "solved": false}, {"name": "JWT authentication bypass via jku header injection", "level": "PRACTITIONER", "solved": false}, {"name": "JWT authentication bypass via kid header path traversal", "level": "PRACTITIONER", "solved": false}, {"name": "JWT authentication bypass via algorithm confusion", "level": "EXPERT", "solved": false}, {"name": "JWT authentication bypass via algorithm confusion with no exposed key", "level": "EXPERT", "solved": false}]}, {"id": "vuln-oauth-authentication", "name": "OAuth authentication", "desc": "Falhas no fluxo de login do tipo \"Entrar com Google/Facebook\": redirect_uri malicioso, roubo de token.", "novo": "O fluxo do OAuth 2.0 (authorization code e implicit flow).", "labs": [{"name": "Authentication bypass via OAuth implicit flow", "level": "APPRENTICE", "solved": false}, {"name": "SSRF via OpenID dynamic client registration", "level": "PRACTITIONER", "solved": false}, {"name": "Forced OAuth profile linking", "level": "PRACTITIONER", "solved": false}, {"name": "OAuth account hijacking via redirect_uri", "level": "PRACTITIONER", "solved": false}, {"name": "Stealing OAuth access tokens via an open redirect", "level": "PRACTITIONER", "solved": false}, {"name": "Stealing OAuth access tokens via a proxy page", "level": "EXPERT", "solved": false}]}, {"id": "vuln-http-host-header-attacks", "name": "HTTP Host header attacks", "desc": "Abusar do cabeçalho Host para envenenar o reset de senha ou burlar validações internas.", "novo": "Nenhuma ferramenta nova, mas exige entender bem como o servidor usa o Host internamente.", "labs": [{"name": "Basic password reset poisoning", "level": "APPRENTICE", "solved": false}, {"name": "Host header authentication bypass", "level": "APPRENTICE", "solved": false}, {"name": "Web cache poisoning via ambiguous requests", "level": "PRACTITIONER", "solved": false}, {"name": "Routing-based SSRF", "level": "PRACTITIONER", "solved": false}, {"name": "SSRF via flawed request parsing", "level": "PRACTITIONER", "solved": false}, {"name": "Host validation bypass via connection state attack", "level": "PRACTITIONER", "solved": false}, {"name": "Password reset poisoning via dangling markup", "level": "EXPERT", "solved": false}]}, {"id": "vuln-websockets", "name": "WebSockets", "desc": "Interceptar e manipular mensagens WebSocket, incluindo CSWSH (sequestro de WebSocket entre origens).", "novo": "A aba WebSockets history do Burp Suite.", "labs": [{"name": "Manipulating WebSocket messages to exploit vulnerabilities", "level": "APPRENTICE", "solved": false}, {"name": "Cross-site WebSocket hijacking", "level": "PRACTITIONER", "solved": false}, {"name": "Manipulating the WebSocket handshake to exploit vulnerabilities", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-graphql-api-vulnerabilities", "name": "GraphQL API vulnerabilities", "desc": "Testar APIs GraphQL: introspecção, campos ocultos, bypass de proteção contra força bruta.", "novo": "Sintaxe de queries GraphQL e a extensão InQL.", "labs": [{"name": "Accessing private GraphQL posts", "level": "APPRENTICE", "solved": false}, {"name": "Accidental exposure of private GraphQL fields", "level": "PRACTITIONER", "solved": false}, {"name": "Finding a hidden GraphQL endpoint", "level": "PRACTITIONER", "solved": false}, {"name": "Bypassing GraphQL brute force protections", "level": "PRACTITIONER", "solved": false}, {"name": "Performing CSRF exploits over GraphQL", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-race-conditions", "name": "Race conditions", "desc": "Explorar janelas de tempo entre verificação e uso, como usar o mesmo cupom de desconto duas vezes ao mesmo tempo.", "novo": "A extensão Turbo Intruder, para disparar requisições simultâneas de verdade.", "labs": [{"name": "Limit overrun race conditions", "level": "APPRENTICE", "solved": false}, {"name": "Bypassing rate limits via race conditions", "level": "PRACTITIONER", "solved": false}, {"name": "Multi-endpoint race conditions", "level": "PRACTITIONER", "solved": false}, {"name": "Single-endpoint race conditions", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting time-sensitive vulnerabilities", "level": "PRACTITIONER", "solved": false}, {"name": "Partial construction race conditions", "level": "EXPERT", "solved": false}]}, {"id": "vuln-web-llm-attacks", "name": "Web LLM attacks", "desc": "Prompt injection e abuso de agentes de IA conectados a ferramentas dentro de uma aplicação.", "novo": "Conceitos de prompt injection e de \"excessive agency\" em agentes de IA.", "labs": [{"name": "Exploiting LLM APIs with excessive agency", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting vulnerabilities in LLM APIs", "level": "PRACTITIONER", "solved": false}, {"name": "Indirect prompt injection", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting insecure output handling in LLMs", "level": "EXPERT", "solved": false}, {"name": "Exploiting AI agents to perform destructive actions", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting AI agents to exfiltrate sensitive information", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting AI agents to trigger secondary vulnerabilities", "level": "PRACTITIONER", "solved": false}, {"name": "Bypassing AI scanner defenses to exfiltrate sensitive information", "level": "PRACTITIONER", "solved": false}]}, {"id": "vuln-insecure-deserialization", "name": "Insecure deserialization", "desc": "Manipular objetos serializados (Java, PHP, Ruby) para conseguir executar código remoto no servidor.", "novo": "Conceito de serialização, gadget chains, e a ferramenta ysoserial para Java.", "labs": [{"name": "Modifying serialized objects", "level": "APPRENTICE", "solved": false}, {"name": "Modifying serialized data types", "level": "PRACTITIONER", "solved": false}, {"name": "Using application functionality to exploit insecure deserialization", "level": "PRACTITIONER", "solved": false}, {"name": "Arbitrary object injection in PHP", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting Java deserialization with Apache Commons", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting PHP deserialization with a pre-built gadget chain", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting Ruby deserialization using a documented gadget chain", "level": "PRACTITIONER", "solved": false}, {"name": "Developing a custom gadget chain for Java deserialization", "level": "EXPERT", "solved": false}, {"name": "Developing a custom gadget chain for PHP deserialization", "level": "EXPERT", "solved": false}, {"name": "Using PHAR deserialization to deploy a custom gadget chain", "level": "EXPERT", "solved": false}]}, {"id": "vuln-prototype-pollution", "name": "Prototype pollution", "desc": "Poluir o protótipo de objetos em JavaScript para alterar o comportamento da aplicação inteira.", "novo": "O conceito de prototype chain em JavaScript (o DOM Invader já visto antes ajuda aqui também).", "labs": [{"name": "Client-side prototype pollution via browser APIs", "level": "PRACTITIONER", "solved": false}, {"name": "DOM XSS via client-side prototype pollution", "level": "PRACTITIONER", "solved": false}, {"name": "DOM XSS via an alternative prototype pollution vector", "level": "PRACTITIONER", "solved": false}, {"name": "Client-side prototype pollution via flawed sanitization", "level": "PRACTITIONER", "solved": false}, {"name": "Client-side prototype pollution in third-party libraries", "level": "PRACTITIONER", "solved": false}, {"name": "Privilege escalation via server-side prototype pollution", "level": "PRACTITIONER", "solved": false}, {"name": "Detecting server-side prototype pollution without polluted property reflection", "level": "PRACTITIONER", "solved": false}, {"name": "Bypassing flawed input filters for server-side prototype pollution", "level": "PRACTITIONER", "solved": false}, {"name": "Remote code execution via server-side prototype pollution", "level": "PRACTITIONER", "solved": false}, {"name": "Exfiltrating sensitive data via server-side prototype pollution", "level": "EXPERT", "solved": false}]}, {"id": "vuln-web-cache-deception", "name": "Web cache deception", "desc": "Enganar o cache para guardar e depois servir uma página privada para qualquer visitante.", "novo": "Como funciona um cache HTTP: cache key e cabeçalhos de cache.", "labs": [{"name": "Exploiting path mapping for web cache deception", "level": "APPRENTICE", "solved": false}, {"name": "Exploiting path delimiters for web cache deception", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting origin server normalization for web cache deception", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting cache server normalization for web cache deception", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting exact-match cache rules for web cache deception", "level": "EXPERT", "solved": false}]}, {"id": "vuln-web-cache-poisoning", "name": "Web cache poisoning", "desc": "Envenenar o cache com uma resposta maliciosa, que passa a ser servida para todo mundo depois.", "novo": "A extensão Param Miner, para achar headers e parâmetros \"unkeyed\" (fora da chave do cache).", "labs": [{"name": "Web cache poisoning with an unkeyed header", "level": "PRACTITIONER", "solved": false}, {"name": "Web cache poisoning with an unkeyed cookie", "level": "PRACTITIONER", "solved": false}, {"name": "Web cache poisoning with multiple headers", "level": "PRACTITIONER", "solved": false}, {"name": "Targeted web cache poisoning using an unknown header", "level": "PRACTITIONER", "solved": false}, {"name": "Web cache poisoning via an unkeyed query string", "level": "PRACTITIONER", "solved": false}, {"name": "Web cache poisoning via an unkeyed query parameter", "level": "PRACTITIONER", "solved": false}, {"name": "Parameter cloaking", "level": "PRACTITIONER", "solved": false}, {"name": "Web cache poisoning via a fat GET request", "level": "PRACTITIONER", "solved": false}, {"name": "URL normalization", "level": "PRACTITIONER", "solved": false}, {"name": "Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria", "level": "EXPERT", "solved": false}, {"name": "Combining web cache poisoning vulnerabilities", "level": "EXPERT", "solved": false}, {"name": "Cache key injection", "level": "EXPERT", "solved": false}, {"name": "Internal cache poisoning", "level": "EXPERT", "solved": false}]}, {"id": "vuln-http-request-smuggling", "name": "HTTP request smuggling", "desc": "Explorar diferenças na forma como dois servidores interpretam o fim de uma requisição HTTP (Content-Length vs Transfer-Encoding). É o tema mais difícil do Academy, por isso fica por último.", "novo": "Entendimento bem profundo de HTTP/1.1 e HTTP/2, e a extensão HTTP Request Smuggler.", "labs": [{"name": "HTTP request smuggling, confirming a CL.TE vulnerability via differential responses", "level": "PRACTITIONER", "solved": false}, {"name": "HTTP request smuggling, confirming a TE.CL vulnerability via differential responses", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting HTTP request smuggling to reveal front-end request rewriting", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting HTTP request smuggling to capture other users' requests", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting HTTP request smuggling to deliver reflected XSS", "level": "PRACTITIONER", "solved": false}, {"name": "Response queue poisoning via H2.TE request smuggling", "level": "PRACTITIONER", "solved": false}, {"name": "H2.CL request smuggling", "level": "PRACTITIONER", "solved": false}, {"name": "HTTP/2 request smuggling via CRLF injection", "level": "PRACTITIONER", "solved": false}, {"name": "HTTP/2 request splitting via CRLF injection", "level": "PRACTITIONER", "solved": false}, {"name": "0.CL request smuggling", "level": "EXPERT", "solved": false}, {"name": "CL.0 request smuggling", "level": "PRACTITIONER", "solved": false}, {"name": "HTTP request smuggling, basic CL.TE vulnerability", "level": "PRACTITIONER", "solved": false}, {"name": "HTTP request smuggling, basic TE.CL vulnerability", "level": "PRACTITIONER", "solved": false}, {"name": "HTTP request smuggling, obfuscating the TE header", "level": "PRACTITIONER", "solved": false}, {"name": "Exploiting HTTP request smuggling to perform web cache poisoning", "level": "EXPERT", "solved": false}, {"name": "Exploiting HTTP request smuggling to perform web cache deception", "level": "EXPERT", "solved": false}, {"name": "Bypassing access controls via HTTP/2 request tunnelling", "level": "EXPERT", "solved": false}, {"name": "Web cache poisoning via HTTP/2 request tunnelling", "level": "EXPERT", "solved": false}, {"name": "Client-side desync", "level": "EXPERT", "solved": false}, {"name": "Server-side pause-based request smuggling", "level": "EXPERT", "solved": false}]}, {"id": "vuln-essential-skills", "name": "Essential skills", "desc": "Praticar scanning direcionado para achar vulnerabilidades rápido, em vez de testar tudo manualmente.", "novo": "O Burp Scanner automático. Como ele só existe na versão Pro, os 2 labs daqui vão inteiros para a seção de pulados.", "labs": []}], "skipped": [{"category": "OS command injection", "name": "Blind OS command injection with out-of-band interaction", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "OS command injection", "name": "Blind OS command injection with out-of-band data exfiltration", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "SQL injection", "name": "Blind SQL injection with out-of-band interaction", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "SQL injection", "name": "Blind SQL injection with out-of-band data exfiltration", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "XML external entity (XXE) injection", "name": "Blind XXE with out-of-band interaction", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "XML external entity (XXE) injection", "name": "Blind XXE with out-of-band interaction via XML parameter entities", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "Server-side request forgery (SSRF)", "name": "Blind SSRF with out-of-band detection", "level": "PRACTITIONER", "reason": "Usa o Burp Collaborator (ataque out-of-band), recurso exclusivo do Burp Suite Professional."}, {"category": "Essential skills", "name": "Discovering vulnerabilities quickly with targeted scanning", "level": "PRACTITIONER", "reason": "Depende do Burp Scanner automático, recurso exclusivo do Burp Suite Professional."}, {"category": "Essential skills", "name": "Scanning non-standard data structures", "level": "PRACTITIONER", "reason": "Depende do Burp Scanner automático, recurso exclusivo do Burp Suite Professional."}]}
;

const FOUNDATION_PHASES = [
  {
    key:"f0", num:"00", title:"Fundamentos de internet e web", sub:"Antes de qualquer vulnerabilidade, entender como a web funciona por baixo dos panos.",
    topics:[
      {id:"f0-internet", name:"Como a internet funciona", kind:"item",
       desc:"Entender o caminho de uma requisição: do seu navegador até o servidor e de volta.",
       novo:"Nenhuma ferramenta ainda — é teoria pura, mas é a base de tudo que vem depois.",
       labs:[
         {name:"Modelo cliente-servidor", level:null, solved:false},
         {name:"O que é um IP e uma porta", level:null, solved:false},
         {name:"Como o DNS resolve um domínio", level:null, solved:false},
         {name:"Diferença entre domínio, subdomínio e path da URL", level:null, solved:false}
       ]},
      {id:"f0-tcpip", name:"TCP/IP e protocolos de rede", kind:"item",
       desc:"As camadas de rede e como os pacotes de dados trafegam entre máquinas.",
       novo:"Nenhuma ferramenta nova.",
       labs:[
         {name:"Modelo TCP/IP (ou OSI simplificado)", level:null, solved:false},
         {name:"Diferença entre TCP e UDP", level:null, solved:false},
         {name:"Three-way handshake do TCP", level:null, solved:false},
         {name:"Portas comuns (80, 443, 22, 21, 3306)", level:null, solved:false}
       ]},
      {id:"f0-http", name:"HTTP e HTTPS", kind:"item",
       desc:"O protocolo que toda vulnerabilidade deste roadmap vai explorar de alguma forma.",
       novo:"Nenhuma ferramenta nova — as ferramentas chegam na próxima etapa.",
       labs:[
         {name:"Métodos HTTP (GET, POST, PUT, DELETE...)", level:null, solved:false},
         {name:"Estrutura de uma requisição e de uma resposta HTTP", level:null, solved:false},
         {name:"Headers importantes (Host, Content-Type, User-Agent, Authorization)", level:null, solved:false},
         {name:"Status codes (2xx, 3xx, 4xx, 5xx)", level:null, solved:false},
         {name:"O que o HTTPS/TLS protege e o que não protege", level:null, solved:false}
       ]},
      {id:"f0-cookies", name:"Cookies e sessões", kind:"item",
       desc:"Como a aplicação \"lembra\" que você está logado entre uma requisição e outra.",
       novo:"Nenhuma ferramenta nova.",
       labs:[
         {name:"O que é um cookie e o que é uma sessão", level:null, solved:false},
         {name:"Atributos Secure, HttpOnly e SameSite", level:null, solved:false},
         {name:"Diferença entre autenticação e autorização", level:null, solved:false},
         {name:"Token vs sessão guardada no servidor", level:null, solved:false}
       ]}
    ]
  },
  {
    key:"f1", num:"01", title:"Linux, terminal e programação", sub:"A caixa de ferramentas de quem escreve exploits e automações.",
    topics:[
      {id:"f1-linux", name:"Linux e terminal básico", kind:"item",
       desc:"A maioria das ferramentas de segurança roda em Linux. Você precisa estar confortável no terminal.",
       novo:"Terminal Linux e comandos básicos.",
       labs:[
         {name:"Navegação (cd, ls, pwd)", level:null, solved:false},
         {name:"Permissões de arquivo (chmod, ls -l)", level:null, solved:false},
         {name:"curl para fazer requisições HTTP pelo terminal", level:null, solved:false},
         {name:"grep, cat, find para buscar coisas em arquivos", level:null, solved:false},
         {name:"Redirecionamento e pipes (>, >>, |)", level:null, solved:false}
       ]},
      {id:"f1-bash", name:"Bash básico", kind:"item",
       desc:"Scripts simples para automatizar tarefas repetitivas.",
       novo:"Bash scripting.",
       labs:[
         {name:"Variáveis e loops em bash", level:null, solved:false},
         {name:"Um script simples que automatiza uma tarefa", level:null, solved:false},
         {name:"Argumentos de linha de comando ($1, $2...)", level:null, solved:false}
       ]},
      {id:"f1-python", name:"Python básico", kind:"item",
       desc:"A linguagem mais usada em segurança ofensiva para escrever exploits e automações.",
       novo:"Python e a biblioteca requests.",
       labs:[
         {name:"Sintaxe básica (variáveis, loops, funções)", level:null, solved:false},
         {name:"Biblioteca requests para fazer chamadas HTTP", level:null, solved:false},
         {name:"Ler e escrever arquivos", level:null, solved:false},
         {name:"Um script que testa várias entradas (mini brute-force)", level:null, solved:false}
       ]},
      {id:"f1-js", name:"JavaScript básico", kind:"item",
       desc:"Necessário para entender XSS, DOM-based vulnerabilities e prototype pollution mais à frente.",
       novo:"JavaScript no navegador.",
       labs:[
         {name:"Sintaxe básica e DOM (document.getElementById etc.)", level:null, solved:false},
         {name:"Eventos (onclick, addEventListener)", level:null, solved:false},
         {name:"O que é o DOM e como o navegador executa JS de uma página", level:null, solved:false},
         {name:"Fetch/XHR para fazer requisições via JS", level:null, solved:false}
       ]},
      {id:"f1-sql", name:"SQL básico", kind:"item",
       desc:"Para entender SQL injection, primeiro você precisa entender SQL do lado do bem.",
       novo:"SQL.",
       labs:[
         {name:"SELECT, WHERE, INSERT, UPDATE, DELETE", level:null, solved:false},
         {name:"JOIN entre tabelas", level:null, solved:false},
         {name:"Comentários em SQL (--, #, /* */)", level:null, solved:false},
         {name:"UNION SELECT", level:null, solved:false}
       ]},
      {id:"f1-crypto", name:"Criptografia e codificação básica", kind:"item",
       desc:"Conceitos que reaparecem depois em JWT, senhas e insecure deserialization.",
       novo:"Base64, hashing e a ideia de HMAC (sem precisar da matemática pesada).",
       labs:[
         {name:"Diferença entre codificação (Base64) e criptografia", level:null, solved:false},
         {name:"O que é um hash (MD5, SHA-256) e por que senha não devia usar algo reversível", level:null, solved:false},
         {name:"O que é HMAC e assinatura digital, em termos simples", level:null, solved:false}
       ]}
    ]
  },
  {
    key:"f2", num:"02", title:"Ferramentas", sub:"O essencial para testar aplicações web na prática, antes de começar as vulnerabilidades.",
    topics:[
      {id:"f2-devtools", name:"Navegador e DevTools", kind:"item",
       desc:"A primeira ferramenta de qualquer teste web é o próprio navegador.",
       novo:"DevTools (abas Network, Console e Application/Storage).",
       labs:[
         {name:"Aba Network: ver requisições feitas pela página", level:null, solved:false},
         {name:"Aba Application/Storage: ver cookies e localStorage", level:null, solved:false},
         {name:"Aba Console: rodar JavaScript manualmente", level:null, solved:false}
       ]},
      {id:"f2-burp1", name:"Burp Suite: Proxy e Repeater", kind:"item",
       desc:"O Burp fica entre o seu navegador e o site, deixando você ver e reenviar qualquer requisição.",
       novo:"Burp Suite Community, Proxy e Repeater.",
       labs:[
         {name:"Configurar o navegador para usar o Proxy do Burp", level:null, solved:false},
         {name:"Instalar o certificado do Burp para interceptar HTTPS", level:null, solved:false},
         {name:"Enviar uma requisição capturada para o Repeater", level:null, solved:false},
         {name:"Editar e reenviar uma requisição manualmente", level:null, solved:false}
       ]},
      {id:"f2-burp2", name:"Burp Suite: Intruder, Decoder e Comparer", kind:"item",
       desc:"Ferramentas para automatizar testes (fuzzing, força bruta) e para codificar/comparar dados.",
       novo:"Intruder, Decoder e Comparer.",
       labs:[
         {name:"Os 4 modos do Intruder (Sniper, Battering ram, Pitchfork, Cluster bomb)", level:null, solved:false},
         {name:"Usar o Decoder para URL-encode/decode e Base64", level:null, solved:false},
         {name:"Usar o Comparer para achar diferenças entre duas respostas", level:null, solved:false}
       ]},
      {id:"f2-collab", name:"Burp Collaborator e limites da versão Community", kind:"item",
       desc:"Entender por que alguns labs do Academy não dá para resolver com a versão gratuita.",
       novo:"O conceito de ataque out-of-band (OOB) e o que é o Collaborator.",
       labs:[
         {name:"O que é um ataque out-of-band e por que ele precisa de um servidor externo", level:null, solved:false},
         {name:"Por que a versão Community não tem Collaborator nem Scanner automático", level:null, solved:false},
         {name:"Saber identificar, só pelo nome do lab, se ele provavelmente precisa do Pro", level:null, solved:false}
       ]}
    ]
  }
];

const PRO_PHASE = {
  key:"pro", num:"04", title:"Rumo a profissional", sub:"O PortSwigger cobre segurança web. Isso é uma fatia do caminho — aqui vem o resto.",
  topics:[
    {id:"pro-recon", name:"Metodologia de pentest e reconhecimento", kind:"item",
     desc:"Como organizar um teste de verdade, do escopo ao reconhecimento de alvos.",
     novo:"Nmap, enumeração de subdomínios (subfinder, amass) e Shodan.",
     labs:[
       {name:"Fases de um pentest (reconhecimento, exploração, pós-exploração, relatório)", level:null, solved:false},
       {name:"Nmap básico (varredura de portas e serviços)", level:null, solved:false},
       {name:"Enumeração de subdomínios", level:null, solved:false},
       {name:"Google dorking básico", level:null, solved:false}
     ]},
    {id:"pro-netpentest", name:"Pentest de redes e sistemas", kind:"item",
     desc:"Sair do escopo \"só web\" e testar serviços de rede: SMB, FTP, RDP e afins.",
     novo:"Metasploit, scripts NSE do Nmap e Hydra.",
     labs:[
       {name:"Identificar serviços vulneráveis por versão", level:null, solved:false},
       {name:"Usar o Metasploit para um exploit conhecido", level:null, solved:false},
       {name:"Força bruta de serviços de rede com Hydra", level:null, solved:false}
     ]},
    {id:"pro-privesc", name:"Escalonamento de privilégios", kind:"item",
     desc:"Depois de entrar em uma máquina, como virar administrador ou root.",
     novo:"linPEAS / winPEAS e GTFOBins.",
     labs:[
       {name:"Enumeração manual de privilégios em Linux", level:null, solved:false},
       {name:"Enumeração manual de privilégios em Windows", level:null, solved:false},
       {name:"Usar scripts de enumeração automática (linPEAS/winPEAS)", level:null, solved:false}
     ]},
    {id:"pro-ad", name:"Active Directory", kind:"item",
     desc:"A maioria das redes corporativas usa AD. É um mundo à parte dentro do pentest.",
     novo:"BloodHound, Kerberoasting e Mimikatz (conceito).",
     labs:[
       {name:"Conceitos de domínio, usuário, grupo e GPO", level:null, solved:false},
       {name:"Kerberoasting, na teoria", level:null, solved:false},
       {name:"Usar o BloodHound para mapear caminhos de ataque", level:null, solved:false}
     ]},
    {id:"pro-platforms", name:"Prática em plataformas (TryHackMe / Hack The Box)", kind:"item",
     desc:"Colocar tudo em prática em máquinas completas, não só em labs isolados por tema.",
     novo:"Nenhuma ferramenta nova — é onde tudo se junta.",
     labs:[
       {name:"Completar máquinas fáceis de rede e web no TryHackMe", level:null, solved:false},
       {name:"Completar máquinas fáceis no Hack The Box", level:null, solved:false},
       {name:"Resolver ao menos uma máquina sem ver write-up antes", level:null, solved:false}
     ]},
    {id:"pro-report", name:"Relatórios técnicos", kind:"item",
     desc:"Um pentest sem relatório claro não tem valor nenhum para o cliente.",
     novo:"Estrutura de relatório (resumo executivo, achados, CVSS, evidências).",
     labs:[
       {name:"Estrutura básica de um relatório de pentest", level:null, solved:false},
       {name:"Como usar o CVSS para classificar severidade", level:null, solved:false},
       {name:"Escrever um achado de exemplo com passo a passo de reprodução", level:null, solved:false}
     ]},
    {id:"pro-bounty", name:"Bug bounty", kind:"item",
     desc:"Aplicar tudo isso em programas reais, de forma legal e remunerada.",
     novo:"Plataformas como HackerOne, Bugcrowd e Intigriti.",
     labs:[
       {name:"Entender regras de escopo de programas de bug bounty", level:null, solved:false},
       {name:"Escrever um relatório de bug bounty bem feito", level:null, solved:false},
       {name:"Submeter o primeiro relatório (mesmo que duplicado ou informativo)", level:null, solved:false}
     ]},
    {id:"pro-certs", name:"Certificações", kind:"item",
     desc:"Validação formal do conhecimento, útil para o mercado de trabalho.",
     novo:"Nenhuma ferramenta nova — é revisão e prática para a prova.",
     labs:[
       {name:"BSCP (Burp Suite Certified Practitioner), direto do PortSwigger", level:null, solved:false},
       {name:"eJPT, boa certificação de entrada", level:null, solved:false},
       {name:"OSCP, referência da área, mais avançada", level:null, solved:false}
     ]}
  ]
};

const PHASES = [
  ...FOUNDATION_PHASES,
  {key:"vulns", num:"03", title:"Vulnerabilidades web (PortSwigger Academy)", sub:"Do mais fácil ao mais difícil. 12 labs que você já resolveu (SQLi, XSS e Access control) já entram marcados.",
   topics: VULN_DATA.topics.map(t => ({...t, kind:"lab"}))},
  PRO_PHASE
];

const ALL_TOPICS = PHASES.flatMap(p => p.topics);
const STORAGE_KEY = "psw_roadmap_v1";

function defaultState(){
  const topics = {};
  ALL_TOPICS.forEach(t=>{
    const labsChecked = {};
    t.labs.forEach((l,i)=>{ labsChecked[i] = !!l.solved; });
    topics[t.id] = {status:"not_started", notes:"", labsChecked};
  });
  return {topics};
}

function loadState(){
  let saved = null;
  try{ saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); }catch(e){ saved = null; }
  const base = defaultState();
  if(saved && saved.topics){
    Object.keys(base.topics).forEach(id=>{
      if(saved.topics[id]){
        base.topics[id].status = saved.topics[id].status || "not_started";
        base.topics[id].notes = saved.topics[id].notes || "";
        const lc = saved.topics[id].labsChecked || {};
        Object.keys(lc).forEach(k=>{ base.topics[id].labsChecked[k] = !!lc[k]; });
      }
    });
  }
  return base;
}

let STATE = loadState();

function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); }catch(e){ /* storage unavailable */ }
}

function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._tm);
  showToast._tm = setTimeout(()=>t.classList.remove("show"), 2200);
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function topicProgress(t){
  const st = STATE.topics[t.id];
  const total = t.labs.length;
  const done = t.labs.reduce((n,_,i)=> n + (st.labsChecked[i] ? 1 : 0), 0);
  return {done, total};
}

function renderPhases(){
  const root = document.getElementById("phases");
  root.innerHTML = "";

  // find the global "current" topic: first one not yet learned, in order
  let currentId = null;
  for(const t of ALL_TOPICS){
    if(STATE.topics[t.id].status !== "learned"){ currentId = t.id; break; }
  }

  PHASES.forEach(phase=>{
    const section = document.createElement("div");
    section.className = "phase";
    section.innerHTML = `
      <div class="phase-head">
        <span class="phase-num">FASE ${phase.num}</span>
        <h2 class="phase-title">${escapeHtml(phase.title)}</h2>
      </div>
      <p class="phase-sub">${escapeHtml(phase.sub)}</p>
    `;
    const rail = document.createElement("div");
    rail.className = "rail";

    phase.topics.forEach(topic=>{
      rail.appendChild(renderCard(topic, currentId));
    });

    section.appendChild(rail);
    root.appendChild(section);
  });

  updateOverallProgress();
}

function renderCard(topic, currentId){
  const st = STATE.topics[topic.id];
  const {done, total} = topicProgress(topic);
  const unit = topic.kind === "lab" ? "labs" : "itens";

  const card = document.createElement("div");
  card.className = "card";
  card.dataset.topicId = topic.id;
  if(st.status === "learned") card.classList.add("done");
  else if(st.status === "studying") card.classList.add("studying");
  else if(topic.id === currentId) card.classList.add("current");

  let tag = "";
  if(st.status === "learned") tag = `<span class="status-tag done">Aprendido</span>`;
  else if(st.status === "studying") tag = `<span class="status-tag studying">Estudando</span>`;
  else if(topic.id === currentId) tag = `<span class="status-tag current">Atual</span>`;
  else tag = `<span class="status-tag locked">A seguir</span>`;

  card.innerHTML = `
    <div class="card-head" tabindex="0" role="button" aria-expanded="false">
      ${tag}
      <span class="card-title">${escapeHtml(topic.name)}</span>
      <span class="card-count">${done}/${total} ${unit}</span>
      <span class="chev">▸</span>
    </div>
    <div class="card-body">
      <p class="card-desc">${escapeHtml(topic.desc)}</p>
      <div class="novo-box"><b>O que é novo aqui</b>${escapeHtml(topic.novo)}</div>
      <ul class="lab-list">
        ${topic.labs.map((l,i)=>`
          <li class="lab-item ${st.labsChecked[i] ? "checked":""}" data-idx="${i}">
            <input type="checkbox" id="chk-${topic.id}-${i}" ${st.labsChecked[i] ? "checked":""}>
            <label for="chk-${topic.id}-${i}">${escapeHtml(l.name)}</label>
            ${l.level ? `<span class="lab-level">${l.level.slice(0,4)}</span>` : ""}
          </li>
        `).join("")}
      </ul>
      <div class="status-row">
        <button class="btn small ${st.status==="studying"?"primary":""}" data-action="studying">Marcar como estudando</button>
        <button class="btn small ${st.status==="learned"?"primary":""}" data-action="learned">Marcar como aprendido</button>
        <button class="btn small" data-action="reset">Reiniciar</button>
      </div>
      <span class="notes-label">O que você aprendeu (suas palavras)</span>
      <textarea class="notes" placeholder="Escreva aqui o que entendeu sobre este tópico...">${escapeHtml(st.notes)}</textarea>
      <div class="copy-row">
        <button class="btn small" data-action="copy">Copiar para enviar no chat</button>
      </div>
    </div>
  `;

  // expand/collapse
  const head = card.querySelector(".card-head");
  head.addEventListener("click", ()=>{
    card.classList.toggle("open");
    head.setAttribute("aria-expanded", card.classList.contains("open"));
  });
  head.addEventListener("keydown", (e)=>{
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); head.click(); }
  });

  // checkboxes
  card.querySelectorAll(".lab-item input[type=checkbox]").forEach(cb=>{
    cb.addEventListener("click", (e)=> e.stopPropagation());
    cb.addEventListener("change", ()=>{
      const idx = cb.closest(".lab-item").dataset.idx;
      st.labsChecked[idx] = cb.checked;
      cb.closest(".lab-item").classList.toggle("checked", cb.checked);
      saveState();
      const {done:d, total:tt} = topicProgress(topic);
      card.querySelector(".card-count").textContent = `${d}/${tt} ${unit}`;
    });
  });

  // status buttons
  card.querySelectorAll("[data-action]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      const action = btn.dataset.action;
      if(action === "studying"){ st.status = st.status === "studying" ? "not_started" : "studying"; }
      else if(action === "learned"){ st.status = st.status === "learned" ? "not_started" : "learned"; }
      else if(action === "reset"){ st.status = "not_started"; }
      else if(action === "copy"){ copyTopic(topic); return; }
      saveState();
      const wasOpen = card.classList.contains("open");
      renderPhases();
      if(wasOpen){
        const newCard = document.querySelector(`.card[data-topic-id="${topic.id}"]`);
        if(newCard) newCard.classList.add("open");
      }
    });
  });

  // notes
  const ta = card.querySelector("textarea.notes");
  let saveTm;
  ta.addEventListener("input", ()=>{
    st.notes = ta.value;
    clearTimeout(saveTm);
    saveTm = setTimeout(saveState, 400);
  });
  ta.addEventListener("click", e=>e.stopPropagation());

  return card;
}

function copyTopic(topic){
  const st = STATE.topics[topic.id];
  const {done, total} = topicProgress(topic);
  const unit = topic.kind === "lab" ? "labs" : "itens de estudo";
  const lines = [];
  lines.push(`Tópico: ${topic.name}`);
  lines.push(`Progresso: ${done}/${total} ${unit} concluídos`);
  lines.push("");
  lines.push("O que eu aprendi, com minhas palavras:");
  lines.push(st.notes.trim() ? st.notes.trim() : "(ainda não escrevi nada aqui)");
  const text = lines.join("\n");
  copyToClipboard(text, "Resumo copiado. Cole aqui no chat.");
}

function copyToClipboard(text, successMsg){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(
      ()=> showToast(successMsg),
      ()=> fallbackCopy(text, successMsg)
    );
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg){
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try{ document.execCommand("copy"); showToast(successMsg); }
  catch(e){ showToast("Não consegui copiar automaticamente. Selecione o texto manualmente."); }
  document.body.removeChild(ta);
}

function updateOverallProgress(){
  const totalTopics = ALL_TOPICS.length;
  const learned = ALL_TOPICS.filter(t=> STATE.topics[t.id].status === "learned").length;
  const pct = totalTopics ? Math.round((learned/totalTopics)*100) : 0;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").textContent = `${learned} / ${totalTopics} tópicos`;

  let level = "Iniciante";
  if(pct >= 80) level = "Profissional";
  else if(pct >= 50) level = "Pleno";
  else if(pct >= 25) level = "Júnior";
  document.getElementById("level-pill").textContent = level;

  const totalLabs = VULN_DATA.topics.reduce((n,t)=>n+t.labs.length,0) + VULN_DATA.skipped.length;
  document.getElementById("total-labs-label").textContent = totalLabs + "+";
}

function renderSkipped(){
  const ul = document.getElementById("skip-list");
  ul.innerHTML = VULN_DATA.skipped.map(s=>{
    const kind = s.reason.includes("Collaborator") ? "oob" : "scanner";
    return `<li class="skip-item">
      <span class="dot ${kind}"></span>
      <span>
        <strong>${escapeHtml(s.name)}</strong>
        <span class="meta">${escapeHtml(s.category)} · ${s.level} — ${escapeHtml(s.reason)}</span>
      </span>
    </li>`;
  }).join("");
}

// ---- backup panel wiring ----
const panelExport = document.getElementById("panel-export");
const panelImport = document.getElementById("panel-import");

document.getElementById("btn-export").addEventListener("click", ()=>{
  document.getElementById("export-text").value = JSON.stringify(STATE);
  panelImport.classList.remove("open");
  panelExport.classList.add("open");
  panelExport.scrollIntoView({behavior:"smooth", block:"center"});
});
document.getElementById("btn-close-export").addEventListener("click", ()=> panelExport.classList.remove("open"));
document.getElementById("btn-copy-export").addEventListener("click", ()=>{
  copyToClipboard(document.getElementById("export-text").value, "Backup copiado. Cole em um arquivo de texto para guardar.");
});

document.getElementById("btn-import").addEventListener("click", ()=>{
  panelExport.classList.remove("open");
  panelImport.classList.add("open");
  panelImport.scrollIntoView({behavior:"smooth", block:"center"});
});
document.getElementById("btn-close-import").addEventListener("click", ()=> panelImport.classList.remove("open"));
document.getElementById("btn-do-import").addEventListener("click", ()=>{
  const raw = document.getElementById("import-text").value.trim();
  if(!raw){ showToast("Cole o texto do backup primeiro."); return; }
  try{
    const parsed = JSON.parse(raw);
    if(!parsed || typeof parsed !== "object" || !parsed.topics) throw new Error("formato inválido");
    const base = defaultState();
    Object.keys(base.topics).forEach(id=>{
      if(parsed.topics[id]){
        base.topics[id].status = parsed.topics[id].status || "not_started";
        base.topics[id].notes = parsed.topics[id].notes || "";
        const lc = parsed.topics[id].labsChecked || {};
        Object.keys(lc).forEach(k=>{ base.topics[id].labsChecked[k] = !!lc[k]; });
      }
    });
    STATE = base;
    saveState();
    panelImport.classList.remove("open");
    renderPhases();
    showToast("Progresso restaurado.");
  }catch(e){
    showToast("Não consegui ler esse texto. Confira se colou o backup completo.");
  }
});

const btnReset = document.getElementById("btn-reset");
let resetArmed = false;
let resetTimer = null;
btnReset.addEventListener("click", ()=>{
  if(!resetArmed){
    resetArmed = true;
    btnReset.textContent = "Clique de novo para confirmar";
    resetTimer = setTimeout(()=>{ resetArmed = false; btnReset.textContent = "Zerar progresso"; }, 4000);
    return;
  }
  clearTimeout(resetTimer);
  resetArmed = false;
  btnReset.textContent = "Zerar progresso";
  STATE = defaultState();
  saveState();
  renderPhases();
  showToast("Progresso zerado.");
});

renderPhases();
renderSkipped();