$(document).ready(function () {

    getData();

    function getData() {
        let container = $('#container');

        $.ajax({
            url: 'data.json',
            method: 'GET'
        }).done(function (data) {
            let box = $('<div></div>');

            $.each(data, function (index, obj) {
                let newLabel = (obj.new == true) ? 'New' : '';
                let featuredLabel = obj.featured == true ? 'Featured' : '';

                let item = $(`
                <div class='item'>
                    <div class='left'>
                        <img src='${obj.logo}'>
                        <div class='top'>
                            <h5>${obj.company}</h5>
                            <label>${newLabel}</label>
                            <label>${featuredLabel}</label>
                        </div>
                        <div class='middle'>
                            <h3>${obj.position}</h3>
                        </div>
                        <div class='bottom'>
                        <span>${obj.postedAt}</span>
                        <span>${obj.contract}</span>
                        <span>${obj.location}</span>
                        </div>
                    </div>
                    <div clas='right'>
                        <ul>
                            ${ $.each(obj.languages, function (index, it) { `<li>${it}</li>` })}
                        </ul>
                    </div>
                </div>
                `);

                $(box).append($(item));
            });

            $(container).html($(box));
            console.log(data);
        });
    }

});