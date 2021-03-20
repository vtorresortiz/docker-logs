all: build up
build:
	docker-compose build
up:
	docker-compose up
rm:
	docker-compose rm