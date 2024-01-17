# LARA10 - Setup Enviroment(Quick Guide)

### 1. Clone repository in your local

```
git clone git@github.com:ragg09/lara10-refresher.git
```

_note: use ssh when you clone_

### 2. Create .env file.

```
make env
```

### 3. Add Database Credentials

update the `DB_` variables part. To add the mysql credentials pleaser refer from
`docker-compose.yml`.

```
DB_CONNECTION=mysql
DB_HOST=laravel-database
DB_PORT=3306
DB_DATABASE=<placeholder>
DB_USERNAME=<placeholder>
DB_PASSWORD=<placeholder>
```

### 4. Build the docker container & configuration

```
make setup
```

### 5. Visit it the application in browser

```
http://localhost:8080
```

# Some important resources

### Laravel Documentation

https://laravel.com/docs/10.x

### Best Practices

https://github.com/alexeymezenin/laravel-best-practices

### Migrations

Docs - https://laravel.com/docs/10.x/migrations#main-content
Naming Convention - https://github.com/Selectra-Dev/standards/issues/19
