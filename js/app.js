$().ready(function () {
    $('.location').hide();
    $('.gradovi-info').children().hide();

    const city = $('.location').attr('value')


    $('#tech').on('change', function () {

        const currentOpt = $('#tech').children().children("option:selected").val();

        if (currentOpt === 'bela-tehnika-magacin') {
            $('.location').hide();
            $('.location[grad="skopje').slideDown(800);
            $('.location[grad="bitola').slideDown(800);


        } else if (currentOpt === 'avto-delovi-magacin') {
            $('.location').hide();
            $('.gradovi-info').children().hide();
            $('.location[grad="gevgelija').slideDown(800);
            $('.location[grad="kocani').slideDown(800);
        } else if (currentOpt === "prikazi-se") {
            $('.location').hide();
            $('.gradovi-info').children().hide();
            $('.location[grad="gevgelija').slideDown(800);
            $('.location[grad="kocani').slideDown(800);
            $('.location[grad="skopje').slideDown(800);
            $('.location[grad="bitola').slideDown(800);
        } else {
            $('.location').hide();
        }

        if (currentOpt === 'prikazi-saloni') {
            $('.gradovi-info').children().hide();
            $('.location').show(800);

        } else if (currentOpt === 'g-shop') {
            $('.location').hide();
            $('.gradovi-info').children().hide();
            $('.location[grad="gevgelija').slideDown(800);
            $('.location[grad="skopje').slideDown(800);
            $('.location[grad="struga').slideDown(800);
            $('.location[grad="prilep').slideDown(800);
        } else if (currentOpt === 'b-texnika') {
            $('.location').hide();
            $('.location[grad="gevgelija').slideDown(800);
            $('.location[grad="gostivar').slideDown(800);
            $('.location[grad="struga').slideDown(800);
            $('.location[grad="ohrid').slideDown(800);
        } else if (currentOpt === 'a-delovi') {
            $('.location').hide();
            $('.location[grad="kocani').slideDown(800);
            $('.location[grad="skopje').slideDown(800);
            $('.location[grad="struga').slideDown(800);
            $('.location[grad="prilep').slideDown(800);
            $('.location[grad="bitola').slideDown(800);
        }


        $('.location').click(function () {
            const location = $(this).attr('grad');
            const magacin = $(`div[class='${location} magacin']`);
            const salon = $(`div[class='${location} salon']`);

            $(magacin).each(function () {
                if (magacin) {
                    magacin.prev().hide()
                    magacin.show()
                    magacin.next().hide()
                } else {
                    magacin.hide()
                }
            })

            $(salon).each(function () {
                // $(this).hide()
                // $(this).show()
                // if (salon) {

                //     magacin.hide()




                //     // salon.hide()




                // }
            })






        })



    })
})

