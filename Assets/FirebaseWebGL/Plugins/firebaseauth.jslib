mergeInto(LibraryManager.library, {

    CreateUserWithEmailAndPassword: function(email, password, objectName, callback, fallback) {

        var parsedEmail = UTF8ToString(email);
        var parsedPassword = UTF8ToString(password);
        var parsedObjectName = UTF8ToString(objectName);
        var parsedCallback = UTF8ToString(callback);
        var parsedFallback = UTF8ToString(fallback);

        try {
            firebase.auth().createUserWithEmailAndPassword(parsedEmail, parsedPassword).then(function (unused) {
                unityInstance.SendMessage(parsedObjectName, parsedCallback, "Success: signed up for " + parsedEmail);
            }).catch(function (error) {
                unityInstance.SendMessage(parsedObjectName, parsedFallback,  JSON.stringify(error, Object.getOwnPropertyNames(error)));
            });

        } catch (error) {
            unityInstance.SendMessage(parsedObjectName, parsedFallback,  JSON.stringify(error, Object.getOwnPropertyNames(error)) );
        }
    }
});
