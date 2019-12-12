# Music Player API

## Roles

* costumer
* manager

## routes

* auth: actions {
  * register: defaults { role: costumer }
  * login
  * recover password
* musics: roles {
  * crud: manager,
  * list, show: *
* users: roles {
  * crud: *
* playlists: roles {
  * crud : *
* albums: roles {
  * create, update, delete: manager
  * list, show: *