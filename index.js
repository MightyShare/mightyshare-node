const hmacSha256 = require('crypto-js/hmac-sha256');
const qs = require('qs');
const urlencode = require('rawurlencode');

const DEFAULT_ENDPOINT = 'https://api.mightyshare.io/v1/';

module.exports = (apikey, prefix = DEFAULT_ENDPOINT) => {
  const apiKey = apikey.substr( 0, 16 );
	const apiSecret = apikey.substr( 16, 32 );
  return {
    generateUrl: options => {
      for(let key in options.template_values) {
        for(let option in options.template_values[key]) {
          if(option !== 'name') {
            options.template_values[key][option] = urlencode(options.template_values[key][option]);
          }
        }
      }

      options.template_values = JSON.stringify(options.template_values);
      const query = qs.stringify(options);

      if (apiKey && apiSecret) {
        const token = generateApiToken(query, apiSecret);
        return `${prefix}${apiKey}/${token}/${options.format || 'jpeg'}?${query}`;
      }
    }
  };
};

const generateApiToken = (queryString, secret) => {
  return hmacSha256(queryString, secret);
};
