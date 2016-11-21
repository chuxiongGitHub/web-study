/**
 * Created by Administrator on 2016/11/3.
 */
$(function () {
    var len = $('#table tr').length;
    console.log(len);
    for (var i = 1; i < len; i++) {
        $('#table tr:eq(' + i + ') td:first').text(i);
    }

});