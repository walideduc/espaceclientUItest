let api_bas_url = 'http://recette.api.client.recyclage.veolia.fr';
let spa_bas_url = 'http://local.ui.client.recyclage.veolia.fr/';
export const environment = {
  production: true,
  login_url : api_bas_url+'/oauth/token',
  client_id:'2',
  client_secret:'U8cRhyFXXDYLjA0XxUw1sufsUrC05dRnGXtKjADk',
  connected_user_url: api_bas_url+'/api/v1/connected_user',
  spa_callback_url: spa_bas_url+'callback',
  login_with_google_url:api_bas_url+'/login/google',

  // for implicit only want be used
  authorisation_server_url:api_bas_url+'/oauth/authorize',

};