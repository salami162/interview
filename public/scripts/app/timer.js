define([], function () {

    var count = function (start, end, time) {
        var timeout;

        function doIt () {
            console.log(start++);

            if (start <= end) {
                timeout = setTimeout(doIt, time);
            }
        }

        doIt();

        return {
            cancel : function () {
                if (timeout) {
                    clearTimeout(timeout);
                }
            }
        };
    };

    return count;
});
