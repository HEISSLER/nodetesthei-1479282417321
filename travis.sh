body='{
"request": {
  "branch":"master"
}}'

curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Travis-API-Version: 3" \
  -H "Authorization: token w5eY_hNqr1LKXqOCT_W2uA" \
  -d "$body" \
  https://api.travis-ci.org/repo/HEISSLER%2Fnodetravis/requests

if (env_test == 0) 
     env_test = 1;
