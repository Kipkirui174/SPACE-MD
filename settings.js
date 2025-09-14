require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGNbLluZ7uf3gAQAAJAHAAAKAAAAY3JlZHMuanNvbpVUy66jRhD9lai3tsYYjHlIVxqwMS*bF+PHtR1l0UADbTDgbh62R5byOVlNNLsssnM+LOI+ZmaRTG5YNdWtU6fqnKpPIMsxRTa6APkTKAiuYYnaY3kpEJCBWoUhIqALAlhCIIPHkVSI*TNNMn04Mdi1wm9wD2bWtYpHhch6RBwPjALF27X4AG5dUFReiv0fAF7HM0JMN2fzIk59dIBwFm+41YatHvXOrrwqJ8dddgaHLBk8gFuLCDHBWaQVMToiAlMbXRyIyfvoL2ZJ42ArSMxmeRFcbd5Y2irpNOfQDzLbdurzTqVqPHE30fvoD0cBjscTbyaxfNiYh2I1HeWrNLFrxUtQY2BDnMWsqzZq8kKf4ihDgRmgrMTl5d19txWKmHxlXgIUdRL1aW4NVWbMpOXT*lhTB8ZjkUlGcyzo2vuIP2VhlPMTdzW*eofMSGHPjFcZ28xFRR2yo8I7zzm2ZPGZ074n7pA3ryT*p+*adOnaxvTkZGy6GkykDa0OOxFbXmeK6+2Mb0wN9Y462mzeSX*PqasxqdF2oj3CVShuBTecu47Innza2NKpFi30FG89ZiF+ow*LivyIpW6wztX2Gmo6SHAv06HndurrJI*MeMMeJBO5eEMH230csJKuMbwUkXNi2hzPNIdx75qTDj+cuDvP00xWlK6cIK7rWHl4rihBFzMAcv*WBQRFmJYEljjP2hjLCF0Ag3qJfILK5*YCbom0U2ZRj0iHlRn5boWfdJh01sHT9Bzt5jX2dRuFkscvHkAXFCT3EaUoMDAtc3KZIUphhCiQf*6lCzJ0Ll+Ea9Nx*S4IMaHlOquKNIfBm6pvl9D38yorl5fMH7UHRIDMfAujssRZRNs+VhkkfoxrNIphSYEcwpSirxUiggIgl6RCX6d2lAdt4wcbdjNhOQ10wfFZEBwAGbD8QJCEIS8MWEbuf6QfmhYVFsWHDJWgCzLYPgb2*fciuX8m9z*vn3*669f7l+D+G6H3P+5fQBekr0icOBQGIjPkOJ4R5P7HNn77WkObMkAlxCkFMhiZS5M5DXTN9OZHutN1RYuUUaSAbzW*medFHFEXDWfdSVyU7Yw0kzhRWSyKZd9msjBrIKFKgD1H3zdc8vAPIEAGVpXqyPFGe8sY9S3psnPqQtv2isF5uvBMy7OPdvi0CBO8uU7MXRoNw*X4JGGiBCp8vNh7nWyq2Lyc*PyUL2fiaXnQlHHrtC4IUI199H0ytTBO8d6QNuYueoTixFeNcrzz1FnPqtQxI6wY*8g713Fdc6YeTs1pT7OI6XacXdiZMwGaL4*z9d4z1jU*PB782ZZaB7x4sfXzWKWv6ww*G65Vs*0NMXreDq+y*Ze6L7xbDzK37ncQr+vmX0ZWDdVavfadQtsWrMrve0FP0TR7XS5Li+NF*SQoxu54PR*9OQ9ut1+6oEhhGebkCGRAjx4EXUDyqnW0mYX5DzKNFNMcv1adQloq36ZkhY+IlvBYALkv8II4kFh2+PLKIXlhQBq3I+1Ke05qLX9RimJZwvJt6IDSfjP*BG5*A1BLAQIUAxQAAAgIAGNbLluZ7uf3gAQAAJAHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAKgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254797657420',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || ''Kipkirui174,
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
