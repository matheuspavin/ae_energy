const _promise = Promise.reject(new Error('BOOOM'));
_promise.then(() => console.log('.then'));
_promise.catch(console.log)