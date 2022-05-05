export const exampleRegexps = [
  {
    name: 'custom',
    regexp: ``,
  },
  {
    name: 'artifactory-password',
    regexp: `(?: |=|:|\"|^)AP[0-9ABCDEF][a-zA-Z0-9]{8,}`,
  },
  {
    name: 'artifactory-token',
    regexp: `(?: |=|:|\"|^)AKC[a-zA-Z0-9]{10,}`,
  },
  {
    name: 'auth-basic',
    regexp: `basic [a-zA-Z0-9_\\-:\\.=]+`,
  },
  {
    name: 'auth-bearer',
    regexp: `bearer [a-zA-Z0-9_\\-\\.=]+`,
  },
  {
    name: 'auth-http',
    regexp: `(?<=://)[a-zA-Z0-9]+:[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]+`,
  },
  {
    name: 'aws-client-id',
    regexp: `(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}`,
  },
  {
    name: 'aws-mws-key',
    regexp: `amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`,
  },
  {
    name: 'aws-secret-key',
    regexp: `(?i)aws(.{0,20})?(?-i)['\"][0-9a-zA-Z/+]{40}['\"]`,
  },
  {
    name: 'base32',
    regexp: `(?:[A-Z2-7]{8})*(?:[A-Z2-7]{2}={6}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{7}=)?`,
  },
  {
    name: 'base64',
    regexp: `(eyJ|YTo|Tzo|PD[89]|aHR0cHM6L|aHR0cDo|rO0)[a-zA-Z0-9+/]+={0,2}`,
  },
  {
    name: 'cloudinary-basic-auth',
    regexp: `cloudinary://[0-9]{15}:[0-9A-Za-z]+@[a-z]+`,
  },
  {
    name: 'facebook-access-token',
    regexp: `EAACEdEose0cBA[0-9A-Za-z]+`,
  },
  {
    name: 'facebook-client-id',
    regexp: `(?i)(facebook|fb)(.{0,20})?['\"][0-9]{13,17}`,
  },
  {
    name: 'facebook-oauth',
    regexp: `[f|F][a|A][c|C][e|E][b|B][o|O][o|O][k|K].*['|\"][0-9a-f]{32}['|\"]`,
  },
  {
    name: 'facebook-secret-key',
    regexp: `(?i)(facebook|fb)(.{0,20})?(?-i)['\"][0-9a-f]{32}`,
  },
  {
    name: 'github',
    regexp: `(?i)github(.{0,20})?(?-i)['\"][0-9a-zA-Z]{35,40}`,
  },
  {
    name: 'google-api-key',
    regexp: `AIza[0-9A-Za-z\\-_]{35}`,
  },
  {
    name: 'google-cloud-key',
    regexp: `(?i)(google|gcp|youtube|drive|yt)(.{0,20})?['\"][AIza[0-9a-z\\-_]{35}]['\"]`,
  },
  {
    name: 'google-drive-key',
    regexp: `AIza[0-9A-Za-z\\-_]{35}`,
  },
  {
    name: 'google-oauth',
    regexp: `[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com`,
  },
  {
    name: 'google-ouath-token',
    regexp: `ya29.[0-9A-Za-z\\-_]+`,
  },
  {
    name: 'google-youtube-key',
    regexp: `AIza[0-9A-Za-z\\-_]{35}`,
  },
  {
    name: 'heroku-api',
    regexp: `[h|H][e|E][r|R][o|O][k|K][u|U].{0,30}[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}`,
  },
  {
    name: 'ipv4',
    regexp: `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}`,
  },
  {
    name: 'ipv6',
    regexp: `(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))`,
    enable: true,
  },
  {
    name: 'javascript-variables',
    regexp: ` (?<=const |let |var )([a-zA-Z0-9_]+?)(?=[;.= ])`,
  },
  {
    name: 'linkedin-id',
    regexp: `(?i)linkedin(.{0,20})?(?-i)['\"][0-9a-z]{12}['\"]`,
  },
  {
    name: 'linkedin-secret',
    regexp: `(?i)linkedin(.{0,20})?['\"][0-9a-z]{16}['\"]`,
  },
  {
    name: 'mail-address',
    regexp: `[\\w\\-._]+@[\\w\\-._]+\\.[A-Za-z]+`,
  },
  {
    name: 'mailchamp-api',
    regexp: `[0-9a-f]{32}-us[0-9]{1,2}`,
  },
  {
    name: 'mailgun-api',
    regexp: `key-[0-9a-zA-Z]{32}`,
  },
  {
    name: 'mailto',
    regexp: `(?<=mailto:)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9.-]+`,
  },
  {
    name: 'md5',
    regexp: `[a-f0-9]{32}`,
  },
  {
    name: 'picatic-api',
    regexp: `sk_live_[0-9a-z]{32}`,
  },
  {
    name: 's3-buckets',
    regexp: ``,
  },
  {
    name: 'slack-token',
    regexp: `xox[baprs]-([0-9a-zA-Z]{10,48})?`,
  },
  {
    name: 'slack-webhook',
    regexp: `https://hooks\\.slack\\.com/services/T[a-zA-Z0-9_]{10}/B[a-zA-Z0-9_]{10}/[a-zA-Z0-9_]{24}`,
  },
  {
    name: 'square-secret',
    regexp: `sq0csp-[ 0-9A-Za-z\\-_]{43}`,
  },
  {
    name: 'square-token',
    regexp: `sqOatp-[0-9A-Za-z\\-_]{22}`,
  },
  {
    name: 'stripe-key',
    regexp: `(?:r|s)k_live_[0-9a-zA-Z]{24}`,
  },
  {
    name: 'twilio-key',
    regexp: `SK[0-9a-fA-F]{32}`,
  },
  {
    name: 'twitter-id',
    regexp: `(?i)twitter(.{0,20})?['\"][0-9a-z]{18,25}`,
  },
  {
    name: 'twitter-oauth',
    regexp: `[t|T][w|W][i|I][t|T][t|T][e|E][r|R].{0,30}['\"\\s][0-9a-zA-Z]{35,44}['\"\\s]`,
  },
  {
    name: 'twitter-secret',
    regexp: `(?i)twitter(.{0,20})?['\"][0-9a-z]{35,44}`,
  },
  {
    name: 'url-parameter',
    regexp: `(?<=\\?|\\&)[a-zA-Z0-9_]+(?=\\=)`,
  },
]
