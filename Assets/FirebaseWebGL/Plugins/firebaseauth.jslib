mergeInto(LibraryManager.library, {

  CreateUserWithEmailAndPassword: function(email, password, objectName, callback, fallback) {

    var parsedEmail = UTF8ToString(email);
    var parsedPassword = UTF8ToString(password);
    var parsedObjectName = UTF8ToString(objectName);
    var parsedCallback = UTF8ToString(callback);
    var parsedFallback = UTF8ToString(fallback);

    try {
      firebase.auth().createUserWithEmailAndPassword(parsedEmail, parsedPassword).then(function (unused) {
        if (window.unityInstance && typeof window.unityInstance.SendMessage === 'function') {
          window.unityInstance.SendMessage(parsedObjectName, parsedCallback, "Success: signed up for " + parsedEmail);
        } else {
          console.error("Unity instance or SendMessage function is not defined.");
        }
      }).catch(function (error) {
        if (window.unityInstance && typeof window.unityInstance.SendMessage === 'function') {
          window.unityInstance.SendMessage(parsedObjectName, parsedFallback, JSON.stringify(error, Object.getOwnPropertyNames(error)));
        } else {
          console.error("Unity instance or SendMessage function is not defined.");
        }
      });
    } catch (error) {
      if (window.unityInstance && typeof window.unityInstance.SendMessage === 'function') {
        window.unityInstance.SendMessage(parsedObjectName, parsedFallback, JSON.stringify(error, Object.getOwnPropertyNames(error)));
      } else {
        console.error("Unity instance or SendMessage function is not defined.");
      }
    }
  }
});
