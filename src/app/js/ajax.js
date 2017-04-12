(function (window) {

    /******************
    Funtion to call API
    object format: {url:'xample.com',
                    method: 'GET',
                    callback : function,
                    errorCallback : function,
                    dataType : "JSON",
                    headers: { headers}
                    }
    ********************/
    app.ajax = function (object) {
        $.ajax({
            url: object.url,
            method: object.method,
            data: object.data,
            dataType : object.dataType,

            success: function (response) {
                object.callback(response);
            },
            error: function (jqXHR, exception) {
                object.errorCallback(jqXHR);
            },
        });
    };
})(window);
