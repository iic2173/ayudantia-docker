# Database

# Opens the database console in the database container
psql:
	sh -c "docker exec -it postgres psql -U dcc dcc"
