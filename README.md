# april-blog

A Blog Platform runs on the top of RSS3



# Project Setup

```bash
# 1. install the deps
yarn install

# 2. need a env file to save ur sensitive config info
cat env-template > .env

# 3. u r ready to go
yarn serve
```

# Utils 

## Log

__usage:__
```typescript
// saying u have VUE_APP_DEVELOPER = test

// log in default namespace //
log('What ever u want')
// test:default What ever u want


// log with customized namespace //
const subLog = log('logic1')
subLog('What ever u want')
// test:logic1 What ever u want
```
