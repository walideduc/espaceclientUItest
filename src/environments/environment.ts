// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


let api_bas_url = 'http://local.api.client.recyclage.veolia.fr';
let spa_bas_url = 'http://local.ui.client.recyclage.veolia.fr/';
export const environment = {
  production: false,
  login_url : api_bas_url+'/oauth/token',
  client_id:'2',
  client_secret:'S7yBRIQANYk36I6QJaLuuXRBYJLiRqQZxFlHPM6A',
  connected_user_url: api_bas_url+'/api/v1/connected_user',
  spa_callback_url: spa_bas_url+'callback',
  login_with_google_url:api_bas_url+'/login/google',

  // for implicit only want be used
  authorisation_server_url:api_bas_url+'/oauth/authorize',

};
