
var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new State();
        return object;
    }

    return {
        getInstance: function () {
            return instance;
        },
        createInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        deleteInstance: function () {
                instance = false;
            }
    };
})();


class State{

}

function getInstance(){
  return Singleton.getInstance();
}


function createInstance(){
  return Singleton.createInstance();
}

function deleteInstance(){
  return Singleton.deleteInstance();
}

module.exports.getInstance = getInstance;
module.exports.createInstance = createInstance;
module.exports.deleteInstance = deleteInstance;
