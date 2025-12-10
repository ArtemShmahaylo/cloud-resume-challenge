from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from datetime import datetime

count = 0

class handler(BaseHTTPRequestHandler):

    def log_request_info(self):
        print(f"\n[{datetime.now()}] {self.command} {self.path}")
        print(f"Origin: {self.headers.get('Origin', 'N/A')}")
        print(f"Referer: {self.headers.get('Referer', 'N/A')}")

    def set_cors_headers(self):
        # Разрешаем ВСЕ origins для дебага
        origin = self.headers.get('Origin', '*')
        self.send_header("Access-Control-Allow-Origin", origin)
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Allow-Credentials", "true")

    def do_OPTIONS(self):
        self.log_request_info()
        print("→ Sending OPTIONS response")
        self.send_response(200)
        self.set_cors_headers()
        self.end_headers()

    def do_GET(self):
        self.log_request_info()
        
        # Убираем всё после : если есть
        path = self.path.split(':')[0]
        
        if path in ["/counter", "/"]:
            global count
            print(f"→ Returning count: {count}")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.set_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"count": count}).encode())
        else:
            print(f"→ 404: Path not found")
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        self.log_request_info()
        
        path = self.path.split(':')[0]
        
        if path in ["/counter", "/"]:
            global count
            count += 1
            print(f"→ Incremented count to: {count}")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.set_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({"count": count}).encode())
        else:
            print(f"→ 404: Path not found")
            self.send_response(404)
            self.end_headers()


if __name__ == "__main__":
    port = 8000
    print(f"\n{'='*50}")
    print(f"Mock API running on ALL interfaces")
    print(f"Local: http://localhost:{port}")
    print(f"Network: http://0.0.0.0:{port}")
    print(f"{'='*50}\n")
    
    try:
        HTTPServer(("0.0.0.0", port), handler).serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped")