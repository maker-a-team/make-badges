// import API from '@geobadges/badgr-api-client';


// const INITIAL_STATE = {
//   username: '',
//   password: '',
//   error: null,
// };

// class BadgrAPI {
//   constructor() {
//     constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };

//     const client = new API({
//       endpoint: process.env.BADGES_API_ENDPOINT,
//       password,
//       username
//     });

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
