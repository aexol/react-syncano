## Create Syncano Account

Navigate to [syncano.io](https://syncano.io) and create an account

## Syncano installation

Install syncano-cli 
```sh
$ yarn global add syncano-cli@beta
```
Initialize your instance in your projects directory somewhere else than frontend provided with this repo
```sh
$ s init
```
Add these two sockets to your instance
```sh
$ syncano-cli add rest-framework rest-auth
```
You will be asked to add superuser to manage your framework
```sh

?   Superuser username
   (SUPERUSER)

    Type in value: example@superhyperuser.com
?   Superuser password
   (SUPERUSER_PASSWORD)

    Type in value: yourPassword#@!Ds

```
Call install endpoint to inject superuser to users database
```sh
$ syncano-cli call rest-framework/install
```
Add your own socket
```sh
$ syncano-cli create my-socket-name
```
Navigate to socket directory and create your models in your neewly created shiny socket as defined in: [Link to socket docs](https://syncano.github.io/syncano-node-cli/#/building-sockets/data-classes)
## Using your project
1. Go back to place where you've cloned this repo.
2. Edit src/syncano.yml file
```
instance: socket-development
app: admin
```
Type your syncano instance name and your app name. App name is useful when you have multiple syncano applications running on the same instance.
3. Run command:
```sh
$ yarn run start
```
Server should be running on [localhost](localhost:8080) and you should see this message:
```
Hello! Everything is up and runnin. 
Now you can start creating your ultra-fast marvelous react-repatch-syncano app. 
Happy coding.
```
4. Navigate to admin panel [admin](localhost:8080/#/admin) and login with your superuser.
5. As you see you have 4 panels here MANAGE, MODEL[TBD], CONFIG, MIGRATE


## Config
Here you can define your models that everybody will have permission to
### Everybody
Define which models should be available for CRUD(create, read, update, delete) operations for users of your website( Superuser and ADMIN_USERS have always access to everything. You will restrict permissions for that models later.
### Logged in user permissions
Define with the use of permission language which models should be available for what iperations to end users of your portal. REMEMBER having declared your model in models section makes it possible to CRUD for everybody.
### Object level user permissions
This is the same stuff that logged in but on object level.

## Manage
Manage your models here

## Migrate
Migrate models from external rest source

## Model
To be done. Platform for mocking endpoint connections

## Next Steps
Navigate to [rest-framework tutorial](examples/bookstore.md)
