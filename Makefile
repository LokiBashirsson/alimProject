run: 
	docker build -t nodeproject .
	docker run -p 5173:5173 nodeproject