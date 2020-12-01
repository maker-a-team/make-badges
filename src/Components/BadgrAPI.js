import API from '@geobadges/badgr-api-client';

const client = new API({
  endpoint: process.env.BADGES_API_ENDPOINT,
});

export default client;


// const API = require("@geobadges/badgr-api-client");

// class BadgrAPI {
//   constructor() {
//     const client = new API({ endpoint, password, username });
    
//     const { accessToken, expirationDate, refreshToken } = await client.getAccessToken();
//   }

//   getAllBadge = () => {
//     const fields = ['entityId', 'name', 'description']; // fields to include in return
//     const badges = await client.getBadgeClasses({ fields });
//     return badges;
//   };

//   getIssuerDetails = () => {
//     const entityId = '12378t12uy3gkj1h2b31';
//     const fields = ['entityId', 'name'];
//     const issuer = await client.getIssuer({ entityId, fields });
//     return issuer;
//   };

// }

// export default BadgrAPI;



// # BADGES_API_ENDPOINT=

// https://badgr.com/public/issuers/M4OFTtt7QqiJ87tCGt0a0A/badges
// https://api.badgr.io/docs/v2/ 

// curl -X POST 'https://api.badgr.io/o/token' -d "username=YOUREMAIL&password=YOURPASSWORD"
// {"access_token": "VhkVVDrb5OFedidm0BFwJedewQLUXg", "expires_in": 86400, "token_type": "Bearer", "scope": "rw:profile rw:issuer rw:backpack", "refresh_token": "8AxWJDObGGnAflFmdVievxc50lYwNh"}