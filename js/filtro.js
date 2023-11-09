$(document).ready(
    function() {

        $('.card').hide();

        $('#btnkata').click(
            function() {
            $('.card').hide();
            $('.kata').show();
            }
        );

        $('#btnzoro').click(
            function() {
            $('.card').hide();
            $('.zoro').show();
            }
        );

        $('#btnhide').click(
            function() {
            $('.card').hide();
            }
        );

        $('#btnshow').click(
            function() {
            $('.card').show();
            }
        );

    }

);