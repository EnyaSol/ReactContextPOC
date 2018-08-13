/**
 * Created by aagonzal on 8/13/2018.
 */

const request = require('superagent');
const mock = require('superagent-mocker')(request)

const gitUrl = '/git/url/here';

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

// function parseProperty (data) {
//   let propertyArr = [];
//   Object.entries(data).map((entry) => {
//     console.log(entry[1])
//     if(typeof entry === 'object' && entry !== null)
//       propertyArr += entry[1];
//   })
//   return propertyArr;
// }
