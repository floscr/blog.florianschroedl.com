dev:
	yarn run develop

clean:
	yarn run clean

build:
	clean
	yarn run develop

deploy:
	ssh mueller.uberspace.de 'cd html/blog.florianschroedl.com; git pull; yarn build'
