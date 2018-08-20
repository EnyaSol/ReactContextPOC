/**
 * Created by aagonzal on 8/13/2018.
 */

const request = require('superagent');
const mock = require('superagent-mocker')(request)
const GitHub = require('github-api')

const gitUrl = '/git/url/here';
const githubUrl = 'https://api.github.com';
// const devServerUrl = "http://developer.gartner.com:8081/property/"

export function getProperties (property){
  request
    .get(property)
    .set("Accept", "application/json")
      .then(
      (res) => {
        console.log(res);
        return res.text;
      },
      (err) => console.log("Err", err)
      )
}

export function getPropertyFile(propName) {
  mock.get('/git/url/here', function(req){
    return {
      content: [
        {"API default Title 1" : " API's test case 1"},
        {"API default Title 2" : " API's test case 2"},
        {"API default Title 3" : " API's test case 3"},
        {"API default Title 4" : " API's test case 4"}
      ],
      headers: req.headers
    }
  });

  return request
    .get(gitUrl)
    .set("Accept", "application/json")
    .then((res) => {
      if(res.status == 200){
        console.log(res.content);
        return res.content;
      }
    })



}


export function getFileFromGit(user, reponame, filename){
  return request
    .get(githubUrl + '/repos/' + user + "/" + reponame + '/contents' + "/" + filename)
    .set("Accept", "applicaiton/vnd.github.VERSION.raw")
    .then(
      response => {
        console.log("Response", response);
        return parseProperty(response.text)
      },
      err => console.log("Err", err)
    )
}

export function loginToGit(user, password){
  let gh;

  if(user != '' && user && password != '' && password){
    gh = new GitHub({
      username: user,
      password: password
    });
  }

  let currentUser = gh.getUser();
  console.log("User is signed in?")
  console.log(currentUser);

  currentUser.listStarredRepos()
    .then(
      repos => console.log("starred repos ", repos),
      err => console.log('error ', err))
    .catch(err => console.log('fatal ', err))

  currentUser.listNotifications()
    .then(
      notifications => console.log("notifications ", notifications),
      err => console.log('error ', err))
    .catch(err => console.log('fatal ', err))

  let repo = gh.getRepo(currentUser,"ReactContextPOC");
  console.log("Retrieved Repo")
  console.log(repo);
}


function parseProperty (data) {
  let tempArr = [];
  let tempObj = {};

  let propertyArr = [];
  data.split("\n").map((prop) => {

    tempArr = prop.split("=")
    tempObj = {[tempArr[0]] : tempArr[1]};
    propertyArr.push(tempObj);
  });

  return propertyArr;
}
